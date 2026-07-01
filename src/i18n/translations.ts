export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; ecology: string; culture: string; bestTime: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; bestTime: { title: string; content: string; tip: string } };
  ecology: EcologySection;
  culture: CultureSection;
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] }; route: { title: string; content: string } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", ecology: "建筑特色", culture: "印加文化", bestTime: "最佳时间", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "秘鲁库斯科大区 · 印加古迹", title: "十二边印加石", subtitle: "Piedra de los 12 ángulos · 库斯科", cta: "探索古迹" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "十二边印加石（Piedra de los 12 ángulos）位于秘鲁库斯科市的哈图姆鲁米约克街（C. Hatunrumiyoc），是印加帝国杰出石工技术的巅峰之作。这块著名的安山岩巨石以其精确的十二边形切割而闻名于世，展现了印加工匠无与伦比的建筑技艺。\n\n这块石头是历史上著名的十二边印加石，因其复杂的十二边形形状而备受赞誉。它位于前科里坎查圣器收藏室（Antiguo Palacio Arzobispal）的外墙上，该建筑建在印加圣所科里坎查（Qorikancha）的遗址上。石头完美地嵌入墙体，展示了印加人如何在没有灰泥或水泥的情况下，将不规则形状的巨石严丝合缝地拼接在一起。",
      p2: "十二边印加石是库斯科最受欢迎的旅游景点之一，24小时免费对外开放。游客可以随时前来参观这块建筑奇迹。墙体由无数多边形石块组成，而这块十二边石因其独特的几何形状成为其中最著名的石块。这里也是了解印加建筑和安第斯文化的绝佳地点。",
      highlights: { title: "景点亮点", items: ["十二边形巨石: 印加石工技术的杰出代表", "精确切割: 石块完美契合，无需灰泥", "历史价值: 位于前科里坎查圣器收藏室墙上", "免费参观: 24小时开放，无需门票", "地理位置: 库斯科市中心，交通便利"] },
      bestTime: { title: "最佳参观时间", content: "全天24小时开放\n建议清晨或傍晚参观，光线更佳", tip: "💡 建议: 清晨游客较少，更适合拍照" }
    },
    ecology: {
      subtitle: "建筑特色 | 印加石工的几何奇迹",
      content: "十二边印加石之所以成为世界闻名的建筑奇迹，不仅因为其独特的十二边形形状，更因为它展现了印加帝国令人惊叹的石工技术。\n\n**无灰泥的建筑：**\n印加建筑的独特之处在于，石块之间没有任何灰泥或水泥。工匠们将巨大的安山岩块切割成复杂的多边形，使其完美契合。这种技术称为"精确切割石工"（Ashlar masonry）。\n\n**抗震设计：**\n库斯科位于地震活跃区，但印加石墙却能经受住数个世纪的地震考验。这是因为石块的不规则形状和紧密契合形成了柔性结构，能够在地震中轻微移动而不倒塌。\n\n**几何的奥秘：**\n这块石头有十二条边和十二个角，每个角度都经过精确计算。印加人没有使用轮子或铁制工具，却能将坚硬的安山岩切割成如此复杂的形状，至今仍是建筑学的谜题。\n\n💡 **建筑知识：** 在印加建筑中，石块的拼接精度达到毫米级。即使过了一千多年，你仍然无法将刀片插入石缝之间！这种技术被称为"库斯科式石工"（Sillar masonry），是印加帝国留给世界的宝贵遗产。"
    },
    culture: {
      subtitle: "文化科普 | 印加帝国的建筑智慧与宇宙观",
      content: "十二边印加石不仅是一块建筑奇迹，它更是印加帝国（Tawantinsuyu）辉煌文明的见证。要理解这块石头的文化价值，需要了解印加人对石头（Rumi）的神圣崇拜。\n\n在原住民的安第斯信仰中，石头不仅仅是建筑材料，更是大地的骨骼和祖先的化身。印加人认为，精心雕琢的石头能够储存能量（Kawsay）并与神灵沟通。\n\n**科里坎查的辉煌：**\n这块石头所在的位置，曾经是印加帝国最神圣的太阳神殿——科里坎查（Qorikancha，意为"黄金庭院"）。据西班牙殖民者记载，科里坎查的墙壁上曾经覆盖着黄金板材，庭院中矗立着巨大的太阳神像。\n\n**石头的语言：**\n印加人相信，每块石头都有自己的灵魂（Kausay）。十二边石的复杂形状象征着宇宙的复杂性——正如安第斯宇宙观中的"查卡纳"（Chakana，安第斯十字），十二个数字可能象征着时间的循环和宇宙的秩序。\n\n💡 **文化知识：** 在克丘亚语中，这块石头被称为"Piedra de los 12 ángulos"。它不仅是建筑杰作，也是印加人数学、几何和天文学知识的结晶。印加人使用"基普"（Quipu，结绳记事）来记录信息和进行计算，而这块石头可能也蕴含着某种数学或天文密码。"
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "24 小时营业\n全年无休", note: "⚠️ 提醒：虽然是户外景点，但建议白天参观，安全和光线更佳。" },
      price: { title: "门票费用", content: "免费开放\n无需购买门票", note: "⚠️ 重要提示：虽然参观免费，但如果想深入了解历史，建议聘请当地导游。" },
      duration: { title: "建议游览时长", content: "建议预留 30 分钟 - 1 小时", note: "可以结合库斯科市区游览，安排半天时间参观多个景点。" },
      tips: { title: "游览建议物品", items: ["舒适的步行鞋（库斯科石板路较滑）",
        "预防高反药物或古柯叶（库斯科海拔约3400米，请预防高山症 Soroche）", "防晒用品与墨镜（高原紫外线强）", "相机和备用电池", "帽子和保暖衣物", "水和零食", "当地地图或导游APP"] },
      route: { title: "主要探索路线", content: "我们特别推荐以下库斯科市区探索路线：\n\n1. 从武器广场（Plaza de Armas）出发\n2. 步行至哈图姆鲁米约克街（C. Hatunrumiyoc），参观十二边印加石\n3. 继续游览圣布拉斯区（San Blas），欣赏殖民地建筑\n4. 参观科里坎查遗址（Sun Temple）\n5. 返回武器广场，结束半日游" }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从利马或其他城市出发", content: "所有游客需先到达库斯科（Cusco）——印加帝国的古都。库斯科拥有国际机场，连接利马和南美洲主要城市。", options: [
        { name: "飞机(推荐)", price: "约 $80 - $200 美元", time: "约 1 小时飞机", steps: ["从利马飞往库斯科（约1小时）", "从库斯科机场前往市区（约20分钟）", "步行或打车前往哈图姆鲁米约克街"] },
        { name: "长途汽车", price: "约 $30 - $60 美元", time: "约 20-24 小时", steps: ["从利马乘坐长途汽车前往库斯科", "到达库斯科后步行或打车前往景点"] }
      ]},
      city: { title: "库斯科市内交通", content: "十二边印加石位于库斯科市中心，交通便利。从武器广场步行约10分钟即可到达。", steps: ["从住宿地点步行前往（最方便）", "乘坐出租车或网约车", "导航: 在 Google Maps 中输入 Piedra de los 12 ángulos", "沿哈图姆鲁米约克街步行即可找到"] },
      selfDrive: { title: "自驾前往", content: "库斯科市区不建议自驾，因为街道狭窄且为石板路。建议步行或打车前往。", steps: ["将车停在武器广场附近停车场", "步行前往哈图姆鲁米约克街", "注意：库斯科老城区限行，外地车辆禁入"] }
    },
    tips: { title: "游览建议", items: [
      "建议清晨或傍晚参观，光线更适合拍照",
      "库斯科海拔3400米，注意预防高原反应",
      "请做好防晒措施，高原紫外线极强",
      "石板路较滑，建议穿防滑鞋",
      "请尊重当地文化，不要攀爬墙体",
      "建议聘请当地导游，了解更多历史故事",
      "可以结合参观科里坎查遗址，了解印加历史",
      "注意保管个人物品，市中心游客较多",
      "尊重当地文化和传统",
      "保持景点整洁，不要乱扔垃圾"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自库斯科的声音：Google Maps 真实见证", viewMore: "在 Google Maps 查看更多见证" },
    faq: { title: "常见问题", subtitle: "深入了解十二边印加石", items: [
      { question: "十二边印加石的开放时间是？", answer: "十二边印加石位于户外墙体上，24小时开放，全年无休。但由于是户外景点，建议白天参观，安全和光线更佳。清晨或傍晚时分游客较少，更适合拍照。" },
      { question: "参观十二边印加石需要门票吗？", answer: "不需要，十二边印加石免费对外开放。它位于哈图姆鲁米约克街的公共墙面上，游客可以随时前来参观。如果想深入了解历史背景，建议聘请当地导游。" },
      { question: "十二边印加石有什么特别之处？", answer: "十二边印加石因其独特的十二边形形状而闻名。它展现了印加帝国杰出的石工技术——石块被精确切割成十二边形，完美嵌入墙体，无需任何灰泥或水泥。这种技术至今仍是建筑学的谜题，展示了印加人高超的数学和几何知识。" },
      { question: "如何前往十二边印加石？", answer: "十二边印加石位于秘鲁库斯科市的哈图姆鲁米约克街（C. Hatunrumiyoc）480号。从库斯科武器广场步行约10分钟即可到达。具体导航可在 Google Maps 中搜索\"Piedra de los 12 ángulos, Cusco\"。建议步行或打车前往。" },
      { question: "游览十二边印加石需要注意什么？有什么安全建议？", answer: "游览时需要注意：\n1. 高原反应：库斯科海拔约3400米，注意预防高山症\n2. 防晒：高原紫外线强，做好防晒措施\n3. 防滑：石板路较滑，穿防滑鞋\n4. 文化尊重：不要攀爬墙体，尊重当地文化\n5. 安全：保管好个人物品，市中心游客较多" },
      { question: "附近还有哪些值得一游的景点？", answer: "十二边印加石位于库斯科市中心，附近有许多值得游览的景点，包括：\n1. 武器广场（Plaza de Armas）——库斯科的心脏\n2. 科里坎查（Qorikancha）——印加太阳神殿遗址\n3. 圣布拉斯区（San Blas）——艺术家聚集区\n4. 库斯科大教堂（Cusco Cathedral）——殖民地建筑\n5. 圣佩德罗市场（San Pedro Market）——体验当地生活" }
    ]},
    location: { title: "地图位置", address: "C. Hatunrumiyoc 480, Cusco 08002\nPerú", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为库斯科的重要文化遗产，请与我们一起爱护古迹、保护历史。保持景点整洁，共同维护这一人类文化遗产。", text: "© 2026 十二边印加石指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播十二边印加石信息。我们与秘鲁政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "秘鲁外贸和旅游部", url: "https://www.gob.pe/mincetur" },
      { name: "秘鲁国家旅游局官方指南 - 库斯科大区专页", url: "https://www.peru.travel/es/destinos/cusco" },
      { name: "库斯科大区政府", url: "https://www.gob.pe/regioncusco" },
      { name: "库斯科文化局", url: "https://www.culturacusco.gob.pe/" }
    ]}
  },

  en: {
    nav: { about: "Overview", ecology: "Architecture", culture: "Inca Culture", bestTime: "Best Time", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Cusco, Peru · Inca Heritage", title: "Stone of the 12 Angles", subtitle: "Piedra de los 12 ángulos · Cusco", cta: "Explore the Stone" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview",
      p1: "The Stone of the 12 Angles (Piedra de los 12 ángulos) is located on Hatunrumiyoc Street in Cusco, Peru. It is the pinnacle of the Inca Empire's outstanding stonework technology. This famous andesite boulder is world-renowned for its precise twelve-sided cut, demonstrating the unparalleled architectural skills of Inca craftsmen.\n\nThis stone is the historically famous Stone of the 12 Angles, celebrated for its complex twelve-sided shape. It is located on the outer wall of the former Archbishop's Palace (Antiguo Palacio Arzobispal), which was built on the site of the Inca sanctuary Qorikancha. The stone fits perfectly into the wall, showing how the Incas joined irregular-shaped boulders together without mortar or cement.",
      p2: "The Stone of the 12 Angles is one of the most popular tourist attractions in Cusco, open 24 hours a day with free admission. Visitors can come at any time to see this architectural marvel. The wall is composed of countless polygonal stones, and this twelve-sided stone has become the most famous due to its unique geometric shape. It is also an excellent place to learn about Inca architecture and Andean culture.",
      highlights: { title: "Highlights", items: ["Twelve-sided Stone: Outstanding representative of Inca stonework", "Precise Cutting: Stones fit perfectly without mortar", "Historical Value: Located on former Archbishop's Palace wall", "Free Admission: Open 24 hours, no ticket required", "Location: Cusco city center, convenient transportation"] },
      bestTime: { title: "Best Time to Visit", content: "Open 24 hours a day\nEarly morning or evening recommended for better light", tip: "💡 Tip: Early morning has fewer tourists, better for photos" }
    },
    ecology: {
      subtitle: "Architecture | The Geometric Miracle of Inca Stonework",
      content: "Why is the best time to see condors at the Cruz del Cóndor viewpoint so precisely limited to between 7:30 and 9:00 AM? It's no coincidence, but a physical marvel orchestrated by the sun, the canyon, and gravity.\n\n**A Flying Giant That Doesn't 'Flap':**\nThe Andean condor is the largest flying bird in the Western Hemisphere. An adult can weigh up to 15 kg (33 lbs) with a wingspan of 3.2 meters (10.5 ft). Because of their massive size, continuously flapping their wings like normal birds would quickly exhaust their energy. Therefore, condors have evolved an extremely energy-efficient survival strategy—gliding on 'Thermal Updrafts'.\n\n**The 'Invisible Elevators' of Colca Canyon:**\nThe 4,160-meter-deep Colca Canyon perfectly provides the power condors need. Here is how it works:\n\n• **Morning Energy Storage:** At night, cold air accumulates at the bottom of the canyon. Condors usually sleep or preen their feathers in their cliffside nests, waiting for sunrise.\n• **Thermal Drive:** After the sun rises, direct sunlight hits the deep canyon floor and rock walls. The rocks rapidly heat the surrounding cold air.\n• **Rising Currents:** Warm air is lighter than cold air, forming powerful, vertically rising columns of thermal currents. This is like turning on countless 'invisible elevators' in the canyon.\n• **Taking Flight (7:30 - 9:00 AM):** At this time, a condor only needs to leap from the cliff and spread its huge wings to effortlessly ride these rising thermal currents, spiraling up from the canyon floor to thousands of meters high to search for animal carcasses.\n\nOnce it gets past 9:30 AM, as the canyon's overall temperature rises, the concentrated thermal currents dissipate, and the condors fly to higher, farther plateaus to forage until returning in the evening.\n\n💡 **Observation Guide:** When you see condors at the viewpoint, notice their wingtips. Their primary flight feathers spread completely open like fingers to sense minute changes in airflow, achieving perfect aerodynamic control. Because gliding in the air requires almost no extra energy, a condor's heart rate remains nearly identical to when it's resting, even while flying hundreds of kilometers!"
    },
    culture: {
      subtitle: "Culture | The Architectural Wisdom and Cosmology of the Inca Empire",
      content: "In the Colca Canyon, the Andean condor is not just a rare giant bird of prey; it is a sacred totem in Inca and pre-Inca civilizations. To understand the condor's status, one must look into the ancient 'Andean Three-World Cosmology' (Chakana).\n\nIn the indigenous belief system, the universe is divided into three distinct yet closely connected dimensions, represented by three sacred animals:\n\n• **Uku Pacha (Underworld / Past):** Represented by the Snake (Amaru). It symbolizes the resting place of the dead, the depths of the earth, and the cycle of life and rebirth.\n• **Kay Pacha (Human World / Present):** Represented by the Puma. It symbolizes the earth we live on, the material world, representing strength, courage, and earthly wisdom.\n• **Hanan Pacha (World of the Gods / Future):** Represented by the Andean Condor (Cóndor). It symbolizes the sky, the dwelling place of the gods (Apus, or mountain spirits), and the infinite future.\n\n**Messenger of the Sky:**\nBecause the condor flies over the snow-capped Andean peaks, indigenous people believed it was the only creature capable of traveling between the 'Human World' and the 'World of the Gods'. The condor is seen as the 'messenger of the gods', responsible for carrying human prayers to the sky and using its massive wings to help the sun rise every morning. In local legends, the condor also guides the souls of the deceased, carrying them on its back to their resting place in the heavens.\n\n💡 **Did you know?** In the villages near the viewpoint, you might see a cross-shaped, stepped geometric pattern known as the 'Andean Cross' (Chakana). Its top center usually symbolizes the Hanan Pacha, ruled by the condor."
    },
    visiting: {
      title: "Visitor Guide",
      hours: { title: "Opening Hours", content: "Open 24 hours\nOpen every day", note: "⚠️ Note: Although it's an outdoor attraction, daytime visits are recommended for better safety and lighting." },
      price: { title: "Entrance Fees", content: "Free admission\nNo ticket required", note: "⚠️ Important Note: Although admission is free, hiring a local guide is recommended if you want to learn more about the history." },
      duration: { title: "Recommended Duration", content: "Recommended: 30 minutes - 1 hour", note: "Can be combined with Cusco city tour, plan half a day to visit multiple attractions." },
      tips: { title: "Recommended Items", items: ["Warm clothing (early morning temperatures are low)",
        "Altitude sickness medication or coca leaves (Viewpoint altitude is approx. 3,287m, please prevent Soroche)", "Sun protection & sunglasses (strong UV at altitude)", "Binoculars for birdwatching", "Water and snacks", "Camera and spare batteries", "Hat"] },
      route: { title: "Exploration Routes", content: "We especially recommend the following Colca Canyon exploration route:\n\n1. Depart from Arequipa: Leave at 5:00 AM, about 3 hours to the viewpoint\n2. Stay at the viewpoint for 1-2 hours to observe condors\n3. Continue visiting other Colca Canyon attractions, such as Yanque hot springs\n4. Return to Arequipa in the afternoon or stay in Chivay" }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Lima or Cusco", content: "About 1,000 km from Lima, approx. 12-15 hours by car. About 600 km from Cusco. All visitors must first arrive at Arequipa — the gateway city to Colca Canyon.", options: [
        { name: "Flight + Car (Recommended)", price: "About $100 - $200 USD", time: "About 1.5 hours flight + 3 hours car", steps: ["Fly from Lima to Arequipa (approx. 1.5 hours)", "Take a day tour or chartered car from Arequipa to the viewpoint (approx. 3 hours)", "Recommended to join a local day tour, including transportation and guide"] },
        { name: "Long-distance Bus (Economical)", price: "About $20 - $40 USD", time: "About 12-15 hours", steps: ["Take a long-distance bus from Lima to Arequipa", "Join a day tour or charter a car from Arequipa to the viewpoint"] }
      ]},
      city: { title: "From Arequipa to the Viewpoint", content: "Arequipa is the gateway city to Colca Canyon. About 150 km from Arequipa to the viewpoint, approx. 3 hours by car.", steps: ["Join a day tour from Arequipa (most convenient)", "Charter a car (more freedom)", "Navigation: Enter Mirador Cruz del Cóndor in Google Maps", "Pass through Chivay, where you can rest and have breakfast"] },
      selfDrive: { title: "Driving", content: "Driving from Arequipa to the viewpoint is convenient, road conditions are good. Recommended to depart at 5:00 AM to arrive before 8:00 AM.", steps: ["Navigate to Mirador Cruz del Cóndor, Cañón del Colca, Perú", "Road conditions are good, but some sections are mountain roads", "High-clearance vehicle recommended, though regular cars can also pass", "Depart early in the morning to arrive in time for the best condor viewing"] }
    },
    tips: { title: "Travel Tips", items: [
      "Arrive before 7:30 AM to get a good spot",
      "Condors soar on thermal currents, best observed in early morning",
      "Bring binoculars for better condor observation",
      "Please take sun protection measures, UV is strong at altitude",
      "Bring warm clothing, early morning temperature may be only 5-10°C",
      "Keep the area clean, take all garbage with you",
      "Do not feed or disturb wildlife",
      "Hire a local guide to learn more about condors",
      "Check weather in advance, condors may not appear on rainy days",
      "Respect local culture and traditions"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Reviews", subtitle: "Voices from Colca Canyon: Real Reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Cruz del Cóndor Viewpoint", items: [
      { question: "What are the opening hours of Cruz del Cóndor Viewpoint?", answer: "The viewpoint is open 24 hours, every day of the year. However, the best time to visit is between 7:30 and 9:00 AM, when Andean condors are most active, using thermal currents to soar above the canyon." },
      { question: "Is there an entrance fee? How much is it?", answer: "Yes, there is an entrance fee. Foreign visitors: 20 Peruvian soles, Peruvian visitors: 10 soles, local communities: free. Cash is recommended as credit cards may not be accepted." },
      { question: "When is the best time to see condors?", answer: "Early morning 7:30 to 9:00 AM is the best time. The temperature is cooler, and condors use thermal currents rising from the canyon floor to circle and glide near the cliffs and above the viewpoint. After that, thermal currents strengthen and condors fly higher and farther away.\n\nAlso, during the dry season (May-November), condors are more active as food is more concentrated." },
      { question: "What are the features of the viewpoint?", answer: "Cruz del Cóndor Viewpoint is a world-renowned Andean condor observation spot. Features include:\n1. Close-up observation of Andean condors with wingspan up to 3.2 meters\n2. Spectacular Colca Canyon views, 4,160m deep\n3. Open 24 hours\n4. Reasonable entrance fee (70 soles for foreigners)\n5. Good infrastructure with parking and viewing platforms" },
      { question: "How to get to Cruz del Cóndor Viewpoint?", answer: "The viewpoint is located in Colca Canyon, Arequipa region, Peru. About 150 km from Arequipa, approx. 3 hours by car. For specific navigation, search for \"Mirador Cruz del Cóndor, Cañón del Colca, Perú\" in Google Maps. Recommended to join a day tour or charter a car." },
      { question: "What should I pay attention to when visiting? Any safety recommendations?", answer: "When visiting the viewpoint, please note:\n1. Early morning temperature is low: Bring warm clothing\n2. Strong UV at altitude: Use sun protection\n3. Altitude: Approx. 3,400m, be aware of altitude sickness\n4. Safety: Do not go beyond railings, watch your step\n5. Environmental protection: Take all garbage with you, do not disturb condors" },
      { question: "What other attractions are worth visiting near the viewpoint?", answer: "Colca Canyon and Arequipa region have many worth-visiting attractions, including:\n1. Chivay — Main town in Colca Canyon, with hot springs\n2. Yanque — Traditional colonial town\n3. Coporaque — Another beautiful town\n4. Arequipa city — UNESCO World Cultural Heritage, white volcanic stone buildings\n5. Colca Lodge hot springs — Soak in hot springs in natural setting" }
    ]},
    location: { title: "Map Location", address: "C. Hatunrumiyoc 480, Cusco 08002\nPeru", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important cultural heritage site in Cusco, please join us in caring for the monument and protecting history. Keep the attraction clean and maintain this cultural heritage of humanity together.", text: "© 2026 Stone of the 12 Angles Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about the Stone of the 12 Angles. We are not affiliated with the Peruvian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Peru Ministry of Foreign Trade and Tourism", url: "https://www.gob.pe/mincetur" },
      { name: "Official Peru Travel Guide - Cusco Region", url: "https://www.peru.travel/es/destinos/cusco" },
      { name: "Cusco Regional Government", url: "https://www.gob.pe/regioncusco" },
      { name: "Cusco Culture Bureau", url: "https://www.culturacusco.gob.pe/" }
    ]}
  },

  es: {
    nav: { about: "Descripción", ecology: "Ecología", culture: "Cultura", bestTime: "Mejor Época", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Arequipa, Perú · Cañón del Colca", title: "Mirador Cruz del Cóndor", subtitle: "Cañón del Colca · Arequipa, Perú", cta: "Explora el Mirador" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "El Mirador Cruz del Cóndor se encuentra en el Cañón del Colca, en la región Arequipa de Perú. Es uno de los mejores lugares del mundo para observar el cóndor andino (Vultur gryphus). El Cañón del Colca alcanza una profundidad máxima de 4,160 metros, medida como la caída vertical desde los picos más altos (como el volcán Ampato) hasta el río en el fondo del cañón, haciéndolo casi el doble de profundo que el Gran Cañón.\n\nEl mirador debe su nombre a la formación rocosa en forma de cruz y a los cóndores andinos que frecuentemente sobrevuelan aquí. Todas las mañanas temprano, los cóndores utilizan corrientes térmicas para circular y planear sobre el cañón, permitiendo a los visitantes observar de cerca a estas magníficas aves. El cóndor tiene una envergadura de hasta 3.2 metros, siendo la ave voladora más grande del hemisferio occidental.",
      p2: "El mirador está abierto las 24 horas, pero el mejor momento para visitarlo es entre las 7:30 y 9:00 AM cuando los cóndores están más activos. La entrada cuesta 70 soles peruanos para visitantes extranjeros. El mirador cuenta con infraestructura básica que incluye estacionamiento, plataformas de observación y pequeños puestos. Es una atracción imperdible en cualquier viaje al Cañón del Colca, atrayendo a decenas de miles de visitantes cada año.",
      highlights: { title: "Datos Destacados", items: ["Observación de Cóndores: Mejor lugar del mundo para observar cóndor andino", "Profundidad del Cañón: Cañón del Colca alcanza 4,160m, uno de los más profundos", "Mejor Época: Temprano en la mañana 7:30-9:00 cuando cóndores están activos", "Entrada: 70 PEN para visitantes extranjeros", "Ubicación: Región Arequipa, Cañón del Colca"] },
      bestTime: { title: "Mejor Época para Visitar", content: "Temprano en la mañana 7:30 - 9:00 AM es mejor\nCóndores planean en corrientes térmicas", tip: "💡 Consejo: Llegue temprano para obtener un buen lugar de observación" }
    },
    ecology: {
      subtitle: "Ecología | El Secreto de Vuelo del Gigante: Corrientes Térmicas",
      content: "¿Por qué el mejor momento para ver cóndores en el mirador Cruz del Cóndor está tan precisamente limitado entre las 7:30 y las 9:00 AM? No es coincidencia, sino una maravilla física orquestada por el sol, el cañón y la gravedad.\n\n**Un Gigante Volador que no 'Aletea':**\nEl cóndor andino es el ave voladora más grande del hemisferio occidental. Un adulto puede pesar hasta 15 kg con una envergadura de 3.2 metros. Debido a su enorme tamaño, aletear continuamente como las aves normales agotaría rápidamente su energía. Por lo tanto, los cóndores han evolucionado una estrategia de supervivencia extremadamente eficiente en energía: planear en 'Corrientes Térmicas'.\n\n**Los 'Ascensores Invisibles' del Cañón del Colca:**\nEl Cañón del Colca, de 4,160 metros de profundidad, proporciona perfectamente la energía que los cóndores necesitan. Así es como funciona:\n\n• **Almacenamiento de Energía Matutino:** Por la noche, el aire frío se acumula en el fondo del cañón. Los cóndores generalmente duermen o acicalan sus plumas en sus nidos en los acantilados, esperando el amanecer.\n• **Impulso Térmico:** Después del amanecer, la luz solar directa golpea el profundo fondo del cañón y las paredes rocosas. Las rocas calientan rápidamente el aire frío circundante.\n• **Corrientes Ascendentes:** El aire cálido es más ligero que el aire frío, formando poderosas columnas de corrientes térmicas que se elevan verticalmente. Esto es como encender innumerables 'ascensores invisibles' en el cañón.\n• **Tomando Vuelo (7:30 - 9:00 AM):** En este momento, un cóndor solo necesita saltar del acantilado y extender sus enormes alas para montar sin esfuerzo estas corrientes térmicas ascendentes, girando en espiral desde el fondo del cañón hasta miles de metros de altura para buscar cadáveres de animales.\n\nUna vez pasadas las 9:30 AM, a medida que la temperatura general del cañón aumenta, las corrientes térmicas concentradas se disipan y los cóndores vuelan hacia mesetas más altas y lejanas para alimentarse hasta regresar por la noche.\n\n💡 **Guía de Observación:** Cuando vea cóndores en el mirador, note las puntas de sus alas. Sus plumas de vuelo primarias se abren completamente como dedos para detectar cambios diminutos en el flujo de aire, logrando un control aerodinámico perfecto. Debido a que planear en el aire casi no requiere energía adicional, ¡la frecuencia cardíaca de un cóndor permanece casi idéntica a cuando está descansando, incluso mientras vuela cientos de kilómetros!"
    },
    culture: {
      subtitle: "Cultura | La Cosmovisión Andina y el Tótem del Cóndor",
      content: "En el Cañón del Colca, el cóndor andino no es solo una rara ave de presa gigante; es un tótem sagrado en las civilizaciones incas y preincas. Para comprender el estatus del cóndor, uno debe mirar hacia la antigua 'Cosmovisión de los Tres Mundos Andinos' (Chakana).\n\nEn el sistema de creencias indígenas, el universo está dividido en tres dimensiones distintas pero estrechamente conectadas, representadas por tres animales sagrados:\n\n• **Uku Pacha (Mundo Subterráneo / Pasado):** Representado por la Serpiente (Amaru). Simboliza el lugar de descanso de los muertos, las profundidades de la tierra y el ciclo de vida y renacimiento.\n• **Kay Pacha (Mundo Humano / Presente):** Representado por el Puma. Simboliza la tierra en la que vivimos, el mundo material, representando la fuerza, el coraje y la sabiduría terrenal.\n• **Hanan Pacha (Mundo de los Dioses / Futuro):** Representado por el Cóndor Andino. Simboliza el cielo, la morada de los dioses (Apus, o espíritus de las montañas) y el futuro infinito.\n\n**Mensajero del Cielo:**\nDebido a que el cóndor vuela sobre los picos nevados de los Andes, los pueblos indígenas creían que era la única criatura capaz de viajar entre el 'Mundo Humano' y el 'Mundo de los Dioses'. El cóndor es visto como el 'mensajero de los dioses', responsable de llevar las oraciones humanas al cielo y usar sus enormes alas para ayudar a que el sol salga cada mañana. En las leyendas locales, el cóndor también guía las almas de los difuntos, llevándolos en su espalda a su lugar de descanso en los cielos.\n\n💡 **¿Sabías que?** En los pueblos cercanos al mirador, es posible que vea un patrón geométrico escalonado en forma de cruz conocido como la 'Cruz Andina' (Chakana). Su centro superior generalmente simboliza el Hanan Pacha, gobernado por el cóndor."
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "Abierto las 24 horas\nAbierto todos los días", note: "⚠️ Nota: Aunque abierto las 24 horas, temprano en la mañana es el mejor momento para ver cóndores." },
      price: { title: "Tarifas de Entrada", content: "Visitantes extranjeros/internacionales: 70 PEN (Boleto Turístico del Colca)\nVisitantes sudamericanos: 40 PEN\nVisitantes peruanos: 10 PEN\nComunidades locales: Gratis\n\n(Las tarifas anteriores están sujetas a fluctuaciones de la tasa de cambio, consulte el anuncio oficial)", note: "⚠️ Nota Importante: Se recomienda efectivo ya que es posible que no se acepten tarjetas de crédito. Las tarifas están sujetas a cambios, confirme con anticipación." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 1 - 2 horas", note: "Si se combina con un viaje de un día al Cañón del Colca, planee medio día a un día completo." },
      tips: { title: "Artículos Recomendados", items: ["Ropa abrigadora (temperatura temprano en la mañana es baja)",
        "Medicamentos para el mal de altura u hojas de coca (La altitud del mirador es de aprox. 3,287m, por favor prevenga el Soroche)", "Protección solar y gafas de sol (UV fuerte en altura)", "Binoculares para observación de aves", "Agua y snacks", "Cámara y baterías de repuesto", "Sombrero"] },
      route: { title: "Rutas de Exploración", content: "Recomendamos especialmente la siguiente ruta de exploración del Cañón del Colca:\n\n1. Salir de Arequipa: Salir a las 5:00 AM, aproximadamente 3 horas al mirador\n2. Quedarse en el mirador 1-2 horas para observar cóndores\n3. Continuar visitando otras atracciones del Cañón del Colca, como las aguas termales de Yanque\n4. Regresar a Arequipa en la tarde o quedarse en Chivay" }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde Lima o Cusco", content: "A unos 1,000 km de Lima, aproximadamente 12-15 horas en automóvil. A unos 600 km de Cusco. Todos los visitantes deben llegar primero a Arequipa — la ciudad de entrada al Cañón del Colca.", options: [
        { name: "Vuelo + Auto (Recomendado)", price: "Aprox. $100 - $200 USD", time: "Aprox. 1.5 horas vuelo + 3 horas auto", steps: ["Volar de Lima a Arequipa (aprox. 1.5 horas)", "Tomar un tour de un día o auto alquilado de Arequipa al mirador (aprox. 3 horas)", "Recomendado unirse a un tour de un día local, incluye transporte y guía"] },
        { name: "Ómnibus de Larga Distancia (Económico)", price: "Aprox. $20 - $40 USD", time: "Aproximadamente 12-15 horas", steps: ["Tomar un ómnibus de larga distancia de Lima a Arequipa", "Unirse a un tour de un día o alquilar auto de Arequipa al mirador"] }
      ]},
      city: { title: "De Arequipa al Mirador", content: "Arequipa es la ciudad de entrada al Cañón del Colca. Aproximadamente 150 km de Arequipa al mirador, aprox. 3 horas en automóvil.", steps: ["Unirse a un tour de un día desde Arequipa (más conveniente)", "Alquilar auto (más libertad)", "Navegación: Ingresar Mirador Cruz del Cóndor en Google Maps", "Pasar por Chivay, donde puede descansar y desayunar"] },
      selfDrive: { title: "Conduciendo", content: "Conducir de Arequipa al mirador es conveniente, condiciones de carretera son buenas. Recomendado salir a las 5:00 AM para llegar antes de las 8:00 AM.", steps: ["Navegar a Mirador Cruz del Cóndor, Cañón del Colca, Perú", "Condiciones de carretera son buenas, pero algunas secciones son caminos de montaña", "Vehículo de alta altura recomendado, aunque autos regulares también pueden pasar", "Salir temprano en la mañana para llegar a tiempo para la mejor observación de cóndores"] }
    },
    tips: { title: "Consejos de Viaje", items: [
      "Llegue antes de las 7:30 AM para obtener un buen lugar",
      "Cóndores planean en corrientes térmicas, mejor observados temprano en la mañana",
      "Traiga binoculares para mejor observación de cóndores",
      "Por favor tome medidas de protección solar, UV fuerte en altura",
      "Traiga ropa abrigadora, temperatura temprano puede ser solo 5-10°C",
      "Mantenga el área limpia, lleve toda la basura con usted",
      "No alimente ni perturbe la vida silvestre",
      "Contrate un guía local para aprender más sobre cóndores",
      "Verifique clima con anticipación, cóndores pueden no aparecer en días lluviosos",
      "Respete la cultura y tradiciones locales"
    ] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Voces del Cañón del Colca: Reseñas reales de Google Maps", viewMore: "Ver Más Reseñas en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda más sobre el Mirador Cruz del Cóndor", items: [
      { question: "¿Cuál es el horario de apertura del Mirador Cruz del Cóndor?", answer: "El mirador está abierto las 24 horas, todos los días del año. Sin embargo, el mejor momento para visitarlo es entre las 7:30 y 9:00 AM, cuando los cóndores andinos están más activos, utilizando corrientes térmicas para planear sobre el cañón." },
      { question: "¿Hay tarifa de entrada? ¿Cuánto es?", answer: "Sí, hay una tarifa de entrada. Visitantes extranjeros: 70 soles peruanos, visitantes peruanos: 10 soles, comunidades locales: gratis. Se recomienda efectivo ya que es posible que no se acepten tarjetas de crédito." },
      { question: "¿Cuándo es el mejor momento para ver cóndores?", answer: "Temprano en la mañana de 7:30 a 9:00 AM es el mejor momento. La temperatura es más fresca y los cóndores utilizan corrientes térmicas que se elevan desde el fondo del cañón para circular y planear cerca de los acantilados y sobre el mirador. Después de eso, las corrientes térmicas se fortalecen y los cóndores vuelan más alto y más lejos.\n\nAdemás, durante la temporada seca (mayo-noviembre), los cóndores están más activos ya que la comida está más concentrada." },
      { question: "¿Cuáles son las características del mirador?", answer: "El Mirador Cruz del Cóndor es un lugar de observación de cóndores andinos reconocido mundialmente. Características incluyen:\n1. Observación cercana de cóndores andinos con envergadura de hasta 3.2 metros\n2. Vistas espectaculares del Cañón del Colca, 4,160m de profundidad\n3. Abierto las 24 horas\n4. Tarifa de entrada razonable (70 soles para extranjeros)\n5. Buena infraestructura con estacionamiento y plataformas de observación" },
      { question: "¿Cómo llegar al Mirador Cruz del Cóndor?", answer: "El mirador se encuentra en el Cañón del Colca, región Arequipa, Perú. Aproximadamente 150 km de Arequipa, aprox. 3 horas en automóvil. Para navegación específica, busque \"Mirador Cruz del Cóndor, Cañón del Colca, Perú\" en Google Maps. Recomendado unirse a un tour de un día o alquilar auto." },
      { question: "¿Qué debe tener en cuenta al visitar? ¿Alguna recomendación de seguridad?", answer: "Al visitar el mirador, por favor note:\n1. Temperatura temprano en la mañana es baja: Traiga ropa abrigadora\n2. UV fuerte en altura: Use protección solar\n3. Altitud: Aprox. 3,400m, tenga cuidado con el mal de altura\n4. Seguridad: No vaya más allá de las barandas, cuide sus pasos\n5. Protección ambiental: Lleve toda la basura con usted, no perturbe los cóndores" },
      { question: "¿Qué otras atracciones vale la pena visitar cerca del mirador?", answer: "El Cañón del Colca y la región Arequipa tienen muchas atracciones que vale la pena visitar, incluyendo:\n1. Chivay — Pueblo principal en el Cañón del Colca, con aguas termales\n2. Yanque — Pueblo colonial tradicional\n3. Coporaque — Otro pueblo hermoso\n4. Ciudad de Arequipa — UNESCO Patrimonio Cultural Mundial, edificios de piedra volcánica blanca\n5. Aguas termales de Colca Lodge — Descansar en aguas termales en entorno natural" }
    ]},
    location: { title: "Ubicación en el Mapa", address: "93QV+FH San Juan de Chuccho\nCañón del Colca, Arequipa, Perú", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como una atracción importante en el Cañón del Colca, por favor únanse a nosotros para cuidar el entorno y proteger la ecología. Mantenga el mirador limpio y mantenga esta maravilla natural juntos.", text: "© 2026 Guía del Mirador Cruz del Cóndor · Todos los derechos reservados.\nEste sitio web es un proyecto de guía independiente de terceros dedicado a compartir información precisa sobre el Mirador Cruz del Cóndor. No estamos afiliados con el gobierno peruano ni ninguna autoridad oficial.", made: "Este sitio web es un proyecto de guía independiente de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Ministerio de Comercio Exterior y Turismo de Perú", url: "https://www.gob.pe/mincetur" },
      { name: "Servicio Nacional de Áreas Naturales Protegidas por el Estado de Perú", url: "https://www.gob.pe/sernanp" },
      { name: "Guía Oficial del Cañón del Colca", url: "https://www.peru.travel/es/atractivos/canon-del-colca" },
      { name: "Guía de Turismo de la Región Arequipa", url: "https://www.peru.travel/es/destinos/arequipa" },
      { name: "Gobierno Regional de Arequipa", url: "https://www.gob.pe/regionarequipa" }
    ]}
  },

  qu: {
    nav: { about: "Qhaway", ecology: "Yachay", culture: "Kultura", bestTime: "Allin Punchaw", visiting: "Puriy", transportation: "Chaykamuy", tips: "Yachay", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tagline: "Arequipa, Piruw · Cañón del Colca", title: "Cruz del Cóndor Mirador", subtitle: "Mirador Cruz del Cóndor · Cañón del Colca", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    about: {
      title: "Qhaway",
      p1: "Cruz del Cóndor Mirador nisqa Cañón del Colca, Arequipa, Piruwpi tiyan. Kayqa Cóndor Andino (Vultur gryphus) rikuy paq allin lugarmi. Cañón del Colca nisqa tikanpura aswan hanaq cañonkunamanta, 4,160 mitru hanaq.\n\nMiradorninqa cruz unuq rumimanta, Cóndor Andino purinawan. Paqarina 7:30-9:00, cóndor purin. Cóndorqa 3.2 mitru iskay patakunawan, hatun p'isqu.",
      p2: "Miradorqa 24 ura kachkan. Allin punchawqa 7:30-9:00. Extranjero runakunaqa 70 PEN pagan. Miradorpi parking, rikuy, tiendakuna. Watapi achka runakuna hamun cóndorta rikuy.",
      highlights: { title: "Rikuy", items: ["Cóndor rikuy: Tikanpura aswan allin", "Cañón hanaq: 4,160 mitru", "Allin punchaw: 7:30-9:00", "Qullqi: 70 PEN extranjero", "Maypi: Arequipa, Cañón del Colca"] },
      bestTime: { title: "Allin Punchaw", content: "Paqarina 7:30 - 9:00 allin\nCóndor purin", tip: "💡 Yachay: Paqarina hamuy" }
    },
    ecology: {
      subtitle: "Yachay | Cóndor Phaway",
      content: "Cóndor phawayta munanki? 7:30 - 9:00 AM allinmi. Inti q'uñichin, wayra wichayman purin. Cóndorqa hatun p'isqu (15 kg), wayrawan phawan, mana kallpata usuchinchu.\n💡 **Yachay:** Cóndor phawaspaqa samasqallam kachkan."
    },
    culture: {
      subtitle: "Yachay | Cóndor Yachay (Cosmovisión Andina)",
      content: "Inka yachaypi kinsa pacha kan:\n• **Uku Pacha:** Amaru (Amaru)\n• **Kay Pacha:** Puma (Puma)\n• **Hanan Pacha:** Cóndor (Cóndor)\nCóndorqa Hanan Pachamanta apamun, Apukunawan rimaspa. Runakunaq almantapas apan."
    },
    visiting: {
      title: "Puriy",
      hours: { title: "Punchaw", content: "24 ura\nSapa punchaw", note: "⚠️ 7:30-9:00 cóndor rikuy." },
      price: { title: "Qullqi", content: "Extranjero: 70 PEN\nPiruw runakuna: 10 PEN\nLlaqtakuna: Mana qullqiyuqchu", note: "⚠️ Efectivo apamuy." },
      duration: { title: "Unay", content: "1 - 2 ura", note: "Colca Cañonwan: 1 punchaw." },
      tips: { title: "Apamuy", items: ["Ch'irita (patsallapi chiri)", "Intita amachakuy", "Binoculares", "Yaku", "Cámara"] },
      route: { title: "Puriy", content: "1. Arequipa-manta lluqsiy 5:00 AM\n2. Mirador-man 3 ura\n3. Cóndorta rikuy 1-2 ura\n4. Yanque, Chivay puriy" }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Lima nisqamanta", content: "Lima nisqapi 1000 km, 12-15 ura. Tukuyn puriquqkuna Arequipa-man hamun.", options: [
        { name: "Anta + Auto", price: "$100 - $200", time: "1.5 ura + 3 ura", steps: ["Lima-manta Arequipa-man anta", "Arequipa-manta tour", "Tour allin"] },
        { name: "Ómnibus", price: "$20 - $40", time: "12-15 ura", steps: ["Lima-manta ómnibus", "Arequipa-man chayamuy"] }
      ]},
      city: { title: "Arequipa nisqamanta", content: "Arequipa-manta 150 km, 3 ura. Google Maps-mi maskuy.", steps: ["Tour apamuy", "Auto alquilay", "Chivay-man pasay"] },
      selfDrive: { title: "Kuti puriy", content: "Arequipa-manta allin. 5:00 AM lluqsiy.", steps: ["Google Maps-mi maskuy", "Kuti puriy", "5:00 AM lluqsiy"] }
    },
    tips: { title: "Yachay", items: [
      "7:30 AM-man ñawpa hamuy",
      "Cóndorta rikuy",
      "Binoculares apamuy",
      "Intita amachakuy",
      "Ch'irita apamuy",
      "Basurata mana saqiykuychu"
    ] },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    reviews: { title: "Niykuna", subtitle: "Colca nispaq niykuna", viewMore: "Astawan niykuna" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "24 ura. 7:30-9:00 cóndor rikuy." },
      { question: "Qullqi paganan chá?", answer: "Extranjero: 70 PEN." },
      { question: "Imapitachá cóndorta rikuy atikun?", answer: "7:30-9:00 AM. Kay punchawpi cóndor purin." },
      { question: "Maymantá chayamuy atikun?", answer: "Arequipa-manta 3 ura. Google Maps-mi maskuy." },
      { question: "Yachay munay?", answer: "Ch'irita, intita amachakuy, cóndorta rikuy." },
      { question: "Maypipas rikuy atikun?", answer: "Chivay, Yanque, Arequipa." }
    ]},
    location: { title: "Maypipas", address: "93QV+FH San Juan de Chuccho\nCañón del Colca, Arequipa, Piruw", openMaps: "Google Maps nisqapi maytapas rikuy" },
    footer: { callToAction: "Pachamamata yupaychay. Cóndorta amachay.", text: "© 2026 Cruz del Cóndor Mirador. Kayqa puriy yachay.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "SERNANP", url: "https://www.gob.pe/sernanp" },
      { name: "Colca Cañon", url: "https://www.peru.travel/es/atractivos/canon-del-colca" },
      { name: "Arequipa", url: "https://www.peru.travel/es/destinos/arequipa" },
      { name: "Gobierno Arequipa", url: "https://www.gob.pe/regionarequipa" }
    ]}
  }
};
