const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

// 预渲染 HTML 可能出现的目录：
// - out/                              (output: 'export')
// - .next/server/app/                  (output: 'standalone' / 默认)
// - .next/standalone/.next/server/app/ (standalone 产物副本，OpenNext 实际读取)
const htmlDirs = [
  path.join(projectRoot, 'out'),
  path.join(projectRoot, '.next', 'server', 'app'),
  path.join(projectRoot, '.next', 'standalone', '.next', 'server', 'app'),
];

// Map of locale to HTML lang attribute value
const langMap = {
  'en': 'en',
  'es': 'es',
  'zh': 'zh',
  'qu': 'qu',
};

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (file.isFile() && file.name.endsWith('.html')) {
      callback(fullPath);
    }
  }
}

function fixHtmlLang(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Determine locale from file path
  let lang = 'en';
  for (const [locale, htmlLang] of Object.entries(langMap)) {
    // Check if the file path contains the locale directory
    const localePattern = path.sep + locale + path.sep;
    const localePatternAlt = path.sep + locale + '.html';
    if (filePath.includes(localePattern) || filePath.endsWith(localePatternAlt)) {
      lang = htmlLang;
      break;
    }
  }

  // Replace lang attribute on <html> tag
  const htmlTagRegex = /<html[^>]*>/i;
  const htmlTagMatch = content.match(htmlTagRegex);

  if (htmlTagMatch && !new RegExp(`lang\\s*=\\s*["']${lang}["']`, 'i').test(htmlTagMatch[0])) {
    let htmlTag = htmlTagMatch[0];

    // Check if lang attribute exists
    if (/lang\s*=/i.test(htmlTag)) {
      // Replace existing lang attribute
      htmlTag = htmlTag.replace(/lang\s*=\s*["'][^"']*["']/i, `lang="${lang}"`);
    } else {
      // Add lang attribute before the closing >
      htmlTag = htmlTag.replace(/>\s*$/, ` lang="${lang}">`);
    }

    content = content.replace(htmlTagRegex, htmlTag);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Fixed lang="${lang}" in ${path.relative(projectRoot, filePath)}`);
  }
}

console.log('Fixing HTML lang attributes...');
let processed = 0;
for (const dir of htmlDirs) {
  if (!fs.existsSync(dir)) continue;
  walkDir(dir, fixHtmlLang);
  processed += 1;
}
if (processed === 0) {
  console.log('! No prerendered HTML directory found, skipped.');
}
console.log('Done!');
