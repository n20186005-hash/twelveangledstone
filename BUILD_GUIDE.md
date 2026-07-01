# 构建和部署指南

## 项目：Centro turístico Tio Yacu (centrotioyacu.com)
## 日期：2026-06-30

---

## 📋 构建步骤

### 1. 前提条件
- Node.js 已安装（推荐版本 18.x 或更高）
- npm 已安装
- 项目依赖已安装（`npm install`）

### 2. 设置环境变量

#### 创建 `.env.local` 文件
```bash
# 在项目根目录创建 .env.local 文件
copy .env.example .env.local
```

#### 编辑 `.env.local`
打开 `.env.local` 文件，设置正确的域名：
```env
# 站点域名（重要：更新此值以避免 SEO 问题）
CURRENT_SITE_DOMAIN=centrotioyacu.com

# Google Maps URL（可选：更新为此景点的正确链接）
NEXT_PUBLIC_GOOGLE_MAPS_URL=https://maps.app.goo.gl/jMkpxcSHZCNS4h1p8

# Google Maps Embed URL（可选）
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d-77.225492!3d-6.045719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b9b9b9b9b9b%3A0x0!2sCentro%20tur%C3%ADstico%20Tio%20Yacu!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus
```

### 3. 安装依赖（如果尚未安装）
```bash
cd c:/Users/Administrator/Documents/GitHub/piazzaduomotrento/centrotioyacu
npm install
```

### 4. 运行构建
```bash
npm run build
```

#### 预期的构建输出
```
✔ Generated static pages:
  - /en
  - /es
  - /zh
  - /qu
  - /en/page
  - /es/page
  - /zh/page
  - /qu/page
  - /sitemap.xml
  - /robots.txt

✔ Build complete
```

### 5. 检查构建输出

#### 输出目录：`out/`
构建完成后，静态文件将输出到 `out/` 目录。

#### 检查关键文件
```bash
# 检查生成的 HTML 文件
ls out/en/index.html
ls out/es/index.html
ls out/zh/index.html
ls out/qu/index.html

# 检查 sitemap
cat out/sitemap.xml

# 检查是否有 hreflang 标签
grep -i "hreflang" out/en/index.html
```

### 6. 本地测试（可选）
```bash
npm start
```
然后访问 `http://localhost:3000` 查看效果。

---

## ✅ 验证清单

### SEO 元素验证

#### 1. hreflang 标签
在生成的 HTML 文件中检查是否有正确的 hreflang 标签：
```html
<link rel="alternate" hreflang="en" href="https://centrotioyacu.com/en" />
<link rel="alternate" hreflang="es" href="https://centrotioyacu.com/es" />
<link rel="alternate" hreflang="zh" href="https://centrotioyacu.com/zh" />
<link rel="alternate" hreflang="qu" href="https://centrotioyacu.com/qu" />
<link rel="alternate" hreflang="x-default" href="https://centrotioyacu.com/en" />
```

#### 2. HTML lang 属性
检查 `<html>` 标签的 lang 属性：
- `/en/index.html`: `<html lang="en">`
- `/es/index.html`: `<html lang="es">`
- `/zh/index.html`: `<html lang="zh">`
- `/qu/index.html`: `<html lang="qu">`

#### 3. Canonical URL
检查 canonical URL 是否正确：
```html
<link rel="canonical" href="https://centrotioyacu.com/en" />
```

#### 4. Open Graph 标签
检查 Open Graph 元数据：
```html
<meta property="og:locale" content="en_US" />
<meta property="og:locale:alternate" content="es_PE" />
<meta property="og:locale:alternate" content="zh_CN" />
<meta property="og:locale:alternate" content="qu_PE" />
```

#### 5. Sitemap
检查 `out/sitemap.xml` 是否包含所有语言版本：
```xml
<url>
  <loc>https://centrotioyacu.com/en</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://centrotioyacu.com/en"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://centrotioyacu.com/es"/>
  <xhtml:link rel="alternate" hreflang="zh" href="https://centrotioyacu.com/zh"/>
  <xhtml:link rel="alternate" hreflang="qu" href="https://centrotioyacu.com/qu"/>
</url>
```

---

## 🐛 常见错误和解决方案

### 错误 1: `process.env.CURRENT_SITE_DOMAIN` 未定义
**症状**: 生成的 URL 包含 `undefined`

**解决方案**:
1. 确保创建了 `.env.local` 文件
2. 确保设置了 `CURRENT_SITE_DOMAIN=centrotioyacu.com`
3. 重新运行 `npm run build`

### 错误 2: hreflang 标签缺失
**症状**: HTML 中没有 hreflang 标签

**解决方案**:
1. 检查 `[locale]/layout.tsx` 中的 `generateMetadata` 函数
2. 确保 `alternates.languages` 配置正确
3. 重新构建

### 错误 3: 构建失败（TypeScript 错误）
**症状**: 构建过程中出现 TypeScript 编译错误

**解决方案**:
1. 运行 `npx tsc --noEmit` 检查类型错误
2. 修复所有 TypeScript 错误
3. 重新构建

---

## 🚀 部署步骤

### 1. 将 `out/` 目录上传到 Web 服务器
将构建输出的 `out/` 目录内容上传到你的 Web 服务器。

### 2. 配置 Web 服务器
确保 Web 服务器正确配置：
- 启用 gzip 压缩
- 设置正确的 MIME 类型
- 配置 URL 重写（如果需要）

### 3. 提交到 Google Search Console
1. 登录 [Google Search Console](https://search.google.com/search-console)
2. 添加属性 `https://centrotioyacu.com`
3. 提交 sitemap: `https://centrotioyacu.com/sitemap.xml`
4. 请求索引所有页面

---

## 📞 技术支持

如果在构建或部署过程中遇到任何问题，请检查：
1. Node.js 和 npm 版本
2. 环境变量配置
3. 构建日志中的错误信息

**更新时间**: 2026-06-30 12:40
**状态**: 就绪 for build and deployment
