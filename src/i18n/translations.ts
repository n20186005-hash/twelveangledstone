export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };
export type SaqsaywamanSection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; ecology: string; culture: string; saqsaywaman?: string; bestTime: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; bestTime: { title: string; content: string; tip: string } };
  ecology: EcologySection;
  culture: CultureSection;
  saqsaywaman: SaqsaywamanSection;
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
      p1: "十二边印加石（Piedra de los 12 ángulos）位于秘鲁库斯科市的哈图姆鲁米约克街（C. Hatunrumiyoc），是印加帝国杰出石工技术的巅峰之作。这块著名的安山岩巨石以其精确的十二边形切割而闻名于世，展现了印加工匠无与伦比的建筑技艺。\n\n这块石头是历史上著名的十二边印加石，因其复杂的十二边形形状而备受赞誉。它位于前科里坎查圣器收藏室（Antiguo Palacio Arzobispal）的外墙上——这面墙体实为印加罗卡宫殿（Palacio de Inca Roca，第六代萨潘·印加的寝宫）的基座，西班牙殖民者在其上方加盖了殖民建筑。石头完美地嵌入墙体，展示了印加人如何在没有灰泥或水泥的情况下，将不规则形状的巨石严丝合缝地拼接在一起。",
      p2: "十二边印加石是库斯科最受欢迎的旅游景点之一，24小时免费对外开放。游客可以随时前来参观这块建筑奇迹。墙体由无数多边形石块组成，而这块十二边石因其独特的几何形状成为其中最著名的石块。这里也是了解印加建筑和安第斯文化的绝佳地点。",
      highlights: { title: "景点亮点", items: ["十二边形巨石: 印加石工技术的杰出代表", "精确切割: 石块完美契合，无需灰泥", "历史价值: 位于前科里坎查圣器收藏室墙上", "免费参观: 24小时开放，无需门票", "地理位置: 库斯科市中心，交通便利"] },
      bestTime: { title: "最佳参观时间", content: "全天24小时开放\n建议清晨或傍晚参观，光线更佳", tip: "💡 建议: 清晨游客较少，更适合拍照" }
    },
    ecology: {
      subtitle: "建筑特色 | 印加石工的几何奇迹",
      content: "十二边印加石之所以成为世界闻名的建筑奇迹，不仅因为其独特的十二边形形状，更因为它展现了印加帝国令人惊叹的石工技术。\n\n**无灰泥的建筑：**\n印加建筑的独特之处在于，石块之间没有任何灰泥或水泥。工匠们将巨大的安山岩块切割成复杂的多边形，使其完美契合。这种技术称为\"精确切割石工\"（Ashlar masonry）。\n\n**抗震设计：**\n库斯科位于地震活跃区，但印加石墙却能经受住数个世纪的地震考验。这是因为石块的不规则形状和紧密契合形成了柔性结构，能够在地震中轻微移动而不倒塌。\n\n**几何的奥秘：**\n这块石头有十二条边和十二个角，每个角度都经过精确计算。印加人没有使用轮子或铁制工具，却能将坚硬的安山岩切割成如此复杂的形状，至今仍是建筑学的谜题。\n\n💡 **建筑知识：** 在印加建筑中，石块的拼接精度达到毫米级。即使过了六百多年（14世纪至今），你仍然无法将刀片插入石缝之间！这种技术被称为「多边形无缝石工」（Polygonal Ashlar Masonry），是印加帝国留给世界的宝贵遗产。注：Sillar 指南美洲阿雷基帕地区的白色火山凝灰岩，库斯科的石工材料为安山岩/闪长岩，请勿混淆。"
    },
    culture: {
      subtitle: "文化科普 | 印加帝国的建筑智慧与宇宙观",
      content: "十二边印加石不仅是一块建筑奇迹，它更是印加帝国（Tawantinsuyu）辉煌文明的见证。要理解这块石头的文化价值，需要了解印加人对石头（Rumi）的神圣崇拜。\n\n在克丘亚语（Quechua）中，石头被称为「Rumi」。在安第斯原住民的万物有灵论中，石头不仅是建筑材料，更是大地母亲（Pachamama）的骨骼，是有生命的灵体。\n\n**约公元14世纪：**\n印加帝国第六代萨潘·印加（Inca Roca）下令建造他的私人寝宫。这面包含十二边石的宏伟外墙，正是这座皇家宫殿的坚固基座，象征着统治者的至高权力。\n\n**1533年（西班牙征服）：**\n西班牙殖民者占领库斯科，对城内的印加建筑进行了清洗。然而，由于印加罗卡皇宫的闪长岩地基与墙体过于坚硬且稳固，殖民者无法将其彻底拆除。\n\n**殖民时期：**\n西班牙建筑师采取了「叠压改建」的策略，直接在完好的印加石墙上方，加盖了巴洛克风格的白墙、木雕阳台与带有内庭院的大主教宫（Palacio Arzobispal）。\n\n**现代：**\n如今，这座建筑已被辟为库斯科宗教艺术博物馆。游客可以清晰地看到下层是精美绝伦的黑绿色印加巨石，上层是西班牙殖民时期的白墙，形成了极具视觉冲击力的「文化叠压」景观。\n\n💡 **文化知识：** 关于这块石头为什么恰好是「十二边」，在当地学者和克丘亚民间流传着两种深厚的文化解读：\n\n**十二皇家帕纳卡（Panacas）：**\n部分历史学家认为，这12个角代表了印加帝国的12个皇家血统家族（Panacas）。每一个角都象征着一个崇高的家族支系，它们紧密咬合、共同支撑起帝国的基石。\n\n**安第斯历法与时间秩序：**\n另一种观点将其与印加高度发达的天文学相结合。12个角对应着印加历法中的12个太阳月，象征着一年四季的时间循环和宇宙万物有条不紊的运转秩序。"
    },
    saqsaywaman: {
      subtitle: "巨石工艺的宏观延伸：萨克塞华曼（Saqsaywaman）卫城",
      content: "如果您被哈图姆鲁米约克街巷弄里这块精细入微、宛如艺术品的十二边印加石所震撼，那么您的安第斯文明探索之旅才刚刚拉开序幕。\n\n穿过老城巷弄，沿着陡峭的后山石阶向上步行，您将进入印加巨石工艺的另一个极端——萨克塞华曼（Saqsaywaman）皇家军事卫城。\n\n如果说十二边石代表了印加人对「微观几何精细度」的极致追求，那么萨克塞华曼展现的就是「宏观体量与军事防线」的狂暴奇迹。在那座居高临下庞大堡垒中，印加石匠将无缝拼接技术放大到了惊人的规模：那里的巨石不再是几吨重，而是重达100至128吨！那些巨大的石灰岩块被切割出多个棱角，像锯齿一样精准地咬合在一起，构成了守护库斯科的「美洲豹之牙」。\n\n从皇宫墙体的精巧到后山防线的宏伟，两处遗迹互为表里，共同构成了完整的印加石造技术神话。\n\n💡 **旅行建议：** 萨克塞华曼距离十二边石约2公里，步行约30分钟，也可乘坐出租车前往。建议购买库斯科旅游通票（Boleto Turístico），可一并参观萨克塞华曼及其他印加遗址。"
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
      "最佳光线：07:00-08:30 日出侧光，19:30 后地面灯光亮起，最适合拍照",
      "建议清晨或傍晚参观，光线更适合拍照",
      "库斯科海拔3400米，注意预防高原反应",
      "请做好防晒措施，高原紫外线极强",
      "石板路较滑，建议穿防滑鞋",
      "⚠️ 保护规则：请勿触摸石墙，遗址装有红外报警，违者可能被罚款",
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
      p1: "The Stone of the 12 Angles (Piedra de los 12 ángulos) is located on Hatunrumiyoc Street in Cusco, Peru. It is the pinnacle of the Inca Empire's outstanding stonework technology. This famous andesite boulder is world-renowned for its precise twelve-sided cut, demonstrating the unparalleled architectural skills of Inca craftsmen.\n\nThis stone is the historically famous Stone of the 12 Angles, celebrated for its complex twelve-sided shape. It is located on the outer wall of the former Archbishop's Palace (Antiguo Palacio Arzobispal)—this wall is actually the foundation of the Palace of Inca Roca (the 6th Sapan Inca's residence), over which the Spanish colonizers built their colonial structure. The stone fits perfectly into the wall, showing how the Incas joined irregular-shaped boulders together without mortar or cement.",
      p2: "The Stone of the 12 Angles is one of the most popular tourist attractions in Cusco, open 24 hours a day with free admission. Visitors can come at any time to see this architectural marvel. The wall is composed of countless polygonal stones, and this twelve-sided stone has become the most famous due to its unique geometric shape. It is also an excellent place to learn about Inca architecture and Andean culture.",
      highlights: { title: "Highlights", items: ["Twelve-sided Stone: Outstanding representative of Inca stonework", "Precise Cutting: Stones fit perfectly without mortar", "Historical Value: Located on former Archbishop's Palace wall", "Free Admission: Open 24 hours, no ticket required", "Location: Cusco city center, convenient transportation"] },
      bestTime: { title: "Best Time to Visit", content: "Open 24 hours a day\nEarly morning or evening recommended for better light", tip: "💡 Tip: Early morning has fewer tourists, better for photos" }
    },
    ecology: {
      subtitle: "Architecture | The Geometric Miracle of Inca Stonework",
      content: "Why is the Stone of the 12 Angles a world-famous architectural marvel? It's not just because of its unique twelve-sided shape, but because it demonstrates the incredible stonework techniques of the Inca Empire.\n\n**Mortar-free Construction:**\nThe uniqueness of Inca architecture lies in the fact that there is no mortar or cement between the stones. Craftsmen cut massive andesite boulders into complex polygons, making them fit perfectly together. This technique is called \"Ashlar masonry\".\n\n**Seismic Design:**\nCusco is located in a seismically active zone, yet Inca stone walls have withstood centuries of earthquakes. This is because the irregular shapes and tight fit of the stones create a flexible structure that can move slightly during earthquakes without collapsing.\n\n**The Mystery of Geometry:**\nThis stone has twelve sides and twelve angles, each angle precisely calculated. The Incas did not use wheels or iron tools, yet they were able to cut hard andesite into such complex shapes—a puzzle that remains in architecture to this day.\n\n💡 **Architectural Knowledge:** In Inca architecture, the fitting precision of stones reaches the millimeter level. Even after more than six hundred years (14th century to present), you still cannot insert a blade between the stones! This technique is called \"Polygonal Ashlar Masonry\" and is a precious legacy left by the Inca Empire to the world. Note: \"Sillar\" refers to white volcanic tuff in Arequipa, not the andesite/diorite stonework of Cusco—please do not confuse the two."
    },
    culture: {
      subtitle: "Culture | The Architectural Wisdom and Cosmology of the Inca Empire",
      content: "The Stone of the 12 Angles is not just an architectural marvel; it is a witness to the glorious civilization of the Inca Empire (Tawantinsuyu). To understand its cultural value, one must understand the Inca's sacred reverence for stone (Rumi).\n\nIn Quechua, stone is called \"Rumi\". In Andean indigenous animism, stone is not merely a building material—it is the bone of Mother Earth (Pachamama), a living spiritual entity.\n\n**c. 14th Century:**\nInca Roca, the 6th Sapan Inca, ordered the construction of his private residence. This magnificent outer wall containing the Twelve-angle Stone was the sturdy foundation of this royal palace, symbolizing the supreme power of the ruler.\n\n**1533 (Spanish Conquest):**\nSpanish conquerors occupied Cusco and dismantled Inca structures. However, the diorite foundation and walls of Inca Roca's palace were too hard and stable to be fully demolished.\n\n**Colonial Period:**\nSpanish architects adopted a \"superimposition\" strategy, directly building the baroque-style Palacio Arzobispal (Archbishop's Palace) with white walls, carved wooden balconies, and an inner courtyard atop the intact Inca stone wall.\n\n**Modern Era:**\nToday, the building houses the Museo de Arte Religioso del Cusco. Visitors can clearly see the lower layer of exquisite black-green Inca megaliths and the upper layer of Spanish colonial white walls, forming a visually striking \"cultural superimposition\" landscape.\n\n💡 **Cultural Knowledge:** Two profound cultural interpretations circulate among local scholars and Quechua communities regarding why this stone has exactly \"twelve sides\":\n\n**The Twelve Royal Panacas:**\nSome historians believe the 12 angles represent the 12 royal bloodline families (Panacas) of the Inca Empire. Each angle symbolizes a noble family branch, tightly interlocked to collectively support the empire's foundation.\n\n**The Andean Calendar and Time Order:**\nAnother view connects it to the Inca's highly developed astronomy. The 12 angles correspond to the 12 solar months in the Inca calendar, symbolizing the cyclical order of seasons and the universe's orderly operation."
    },
    saqsaywaman: {
      subtitle: "Macro Extension of Megalithic Craft: Saqsaywaman Citadel",
      content: "If you are amazed by this exquisitely detailed Twelve-angle Stone on Hatunrumiyoc Street, your Andean civilization exploration journey has just begun.\n\nWalk through the old town alleys and hike up the steep stone steps of the back mountain, and you will enter another extreme of Inca megalithic craft—the Saqsaywaman Royal Military Citadel.\n\nIf the Twelve-angle Stone represents the Inca's ultimate pursuit of micro geometric precision, then Saqsaywaman displays the violent miracle of macro scale and military defense lines. In that commanding massive fortress, Inca stonemasons scaled up the seamless joining technique to an astonishing magnitude: the megaliths there weigh not just a few tons, but 100 to 128 tons! Those huge limestone blocks were cut with multiple angles, interlocking precisely like sawteeth, forming the Jaguar's Teeth that guarded Cusco.\n\nFrom the delicacy of the palace wall to the grandeur of the back mountain defense line, the two sites complement each other and together constitute the complete myth of Inca stone-making technology.\n\n💡 **Travel Tip:** Saqsaywaman is about 2 km from the Twelve-angle Stone. It takes about 30 minutes walking, or you can take a taxi. It is recommended to purchase the Cusco Tourist Ticket (Boleto Turístico) to visit Saqsaywaman and other Inca sites together."
    },
    visiting: {
      title: "Visit Guide",
      hours: { title: "Opening Hours", content: "Open 24 hours\nOpen every day", note: "⚠️ Note: Although it's an outdoor attraction, daytime visits are recommended for better safety and lighting." },
      price: { title: "Entrance Fees", content: "Free admission\nNo ticket required", note: "⚠️ Important Note: Although admission is free, hiring a local guide is recommended if you want to learn more about the history." },
      duration: { title: "Recommended Duration", content: "Recommended: 30 minutes - 1 hour", note: "Can be combined with Cusco city tour, plan half a day to visit multiple attractions." },
      tips: { title: "Recommended Items", items: ["Comfortable walking shoes (Cusco stone streets are slippery)",
        "Altitude sickness medication or coca leaves (Cusco altitude is approx. 3400m, please prevent Soroche)", "Sun protection & sunglasses (strong UV at altitude)", "Camera and spare batteries", "Hat and warm clothing", "Water and snacks", "Local map or guide APP"] },
      route: { title: "Exploration Routes", content: "We especially recommend the following Cusco city exploration route:\n\n1. Start from Plaza de Armas\n2. Walk to Hatunrumiyoc Street to see the Stone of the 12 Angles\n3. Continue to San Blas district to admire colonial architecture\n4. Visit Qorikancha site (Sun Temple)\n5. Return to Plaza de Armas to end the half-day tour" }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Lima or Other Cities", content: "All visitors must first arrive in Cusco—the ancient capital of the Inca Empire. Cusco has an international airport connecting Lima and major South American cities.", options: [
        { name: "Flight (Recommended)", price: "About $80 - $200 USD", time: "About 1 hour flight", steps: ["Fly from Lima to Cusco (about 1 hour)", "Get from Cusco airport to city center (about 20 minutes)", "Walk or take a taxi to Hatunrumiyoc Street"] },
        { name: "Long-distance Bus", price: "About $30 - $60 USD", time: "About 20-24 hours", steps: ["Take a long-distance bus from Lima to Cusco", "After arriving in Cusco, walk or take a taxi to the attraction"] }
      ]},
      city: { title: "Getting Around Cusco", content: "The Stone of the 12 Angles is located in downtown Cusco, with convenient transportation. It's about a 10-minute walk from Plaza de Armas.", steps: ["Walk from accommodation (most convenient)", "Take a taxi or ride-hailing service", "Navigation: Enter Piedra de los 12 ángulos in Google Maps", "Walk along Hatunrumiyoc Street to find it"] },
      selfDrive: { title: "Driving", content: "Driving in downtown Cusco is not recommended due to narrow streets and stone roads. Walking or taking a taxi is recommended.", steps: ["Park near Plaza de Armas", "Walk to Hatunrumiyoc Street", "Note: Cusco old town has traffic restrictions, non-local vehicles are prohibited"] }
    },
    tips: { title: "Travel Tips", items: [
      "Best light: 07:00-08:30 sunrise side light; after 19:30 ground lights turn on — ideal for photos",
      "Visit in early morning or evening for better lighting for photos",
      "Cusco altitude is 3400m, be aware of altitude sickness",
      "Take sun protection measures, UV is very strong at high altitude",
      "Stone streets are slippery, wear non-slip shoes",
      "⚠️ Protection rule: Do NOT touch the stone wall. Infrared alarms are installed; violators may be fined.",
      "Respect local culture, do not climb the wall",
      "Hire a local guide to learn more about historical stories",
      "Visit Qorikancha site to learn about Inca history",
      "Keep personal belongings safe, city center has many tourists",
      "Respect local culture and traditions",
      "Keep the attraction clean, do not litter"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Reviews", subtitle: "Voices from Cusco: Real Reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About the Stone of the 12 Angles", items: [
      { question: "What are the opening hours of the Stone of the 12 Angles?", answer: "The Stone of the 12 Angles is located on an outdoor wall, open 24 hours a day, every day of the year. However, as it is an outdoor attraction, daytime visits are recommended for better safety and lighting. Early morning or evening has fewer tourists, better for photos." },
      { question: "Is there an entrance fee to see the Stone of the 12 Angles?", answer: "No, the Stone of the 12 Angles is free and open to the public. It is located on a public wall on Hatunrumiyoc Street, and visitors can come at any time. If you want to learn more about the historical background, hiring a local guide is recommended." },
      { question: "What is special about the Stone of the 12 Angles?", answer: "The Stone of the 12 Angles is famous for its unique twelve-sided shape. It demonstrates the outstanding stonework techniques of the Inca Empire—the stone was precisely cut into a twelve-sided polygon and perfectly embedded in the wall without any mortar or cement. This technique remains a puzzle in architecture to this day, demonstrating the Incas' superb mathematical and geometric knowledge." },
      { question: "How to get to the Stone of the 12 Angles?", answer: "The Stone of the 12 Angles is located at Hatunrumiyoc Street 480, Cusco, Peru. It's about a 10-minute walk from Plaza de Armas in Cusco. For specific navigation, search for \"Piedra de los 12 ángulos, Cusco\" in Google Maps. Walking or taking a taxi is recommended." },
      { question: "What should I pay attention to when visiting? Any safety recommendations?", answer: "When visiting, please note:\n1. Altitude sickness: Cusco altitude is about 3400m, be aware of Soroche\n2. Sun protection: Strong UV at high altitude, take sun protection measures\n3. Slip prevention: Stone streets are slippery, wear non-slip shoes\n4. Cultural respect: Do not climb the wall, respect local culture\n5. Safety: Keep personal belongings safe, city center has many tourists" },
      { question: "What other attractions are worth visiting nearby?", answer: "The Stone of the 12 Angles is located in downtown Cusco, near many worth-visiting attractions, including:\n1. Plaza de Armas — the heart of Cusco\n2. Qorikancha — ruins of the Inca Sun Temple\n3. San Blas district — artist gathering area\n4. Cusco Cathedral — colonial architecture\n5. San Pedro Market — experience local life" }
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
    nav: { about: "Descripción", ecology: "Arquitectura", culture: "Cultura Inca", bestTime: "Mejor Época", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Cusco, Perú · Patrimonio Inca", title: "Piedra de los 12 Ángulos", subtitle: "Piedra de los 12 ángulos · Cusco", cta: "Explorar" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción",
      p1: "La Piedra de los 12 Ángulos (Piedra de los 12 ángulos) está en la calle Hatunrumiyoc en Cusco, Perú. Es la cima de la tecnología de piedra del Imperio Inca. Este famoso bloque de andesita es conocido mundialmente por su corte preciso de doce lados, demostrando las habilidades arquitectónicas inigualables de los artesanos incas.\n\nEsta piedra es la históricamente famosa Piedra de los 12 Ángulos, celebrada por su compleja forma de doce lados. Está en el muro exterior del antiguo Palacio Arzobispal (Antiguo Palacio Arzobispal)—este muro es en realidad la base del Palacio de Inca Roca (residencia del 6.° Sapan Inca), sobre la cual los colonizadores españoles construyeron su estructura colonial. La piedra encaja perfectamente en el muro, mostrando cómo los incas unieron bloques de piedra de formas irregulares sin mortero ni cemento.",
      p2: "La Piedra de los 12 Ángulos es una de las atracciones turísticas más populares de Cusco, abierta las 24 horas con entrada gratuita. Los visitantes pueden venir en cualquier momento para ver esta maravilla arquitectónica. El muro está compuesto por innumerables piedras poligonales, y esta piedra de doce lados se ha convertido en la más famosa debido a su forma geométrica única.",
      highlights: { title: "Puntos Destacados", items: ["Piedra de doce lados: Representante sobresaliente de la piedra inca", "Corte preciso: Las piedras encajan perfectamente sin mortero", "Valor histórico: Ubicada en el muro del antiguo Palacio Arzobispal", "Entrada gratuita: Abierto las 24 horas, no se requiere entrada", "Ubicación: Centro de Cusco, transporte conveniente"] },
      bestTime: { title: "Mejor Época para Visitar", content: "Abierto las 24 horas\nSe recomienda temprano en la mañana o al atardecer para mejor luz", tip: "💡 Consejo: Temprano en la mañana hay menos turistas, mejor para fotos" }
    },
    ecology: {
      subtitle: "Arquitectura | El Milagro Geométrico de la Piedra Inca",
      content: "¿Por qué la Piedra de los 12 Ángulos es una maravilla arquitectónica famosa mundialmente? No es solo por su forma única de doce lados, sino porque demuestra las increíbles técnicas de piedra del Imperio Inca.\n\n**Construcción sin mortero:**\nLa singularidad de la arquitectura inca radica en el hecho de que no hay mortero ni cemento entre las piedras. Los artesanos cortan enormes bloques de andesita en polígonos complejos, haciendo que encajen perfectamente. Esta técnica se llama \"Ashlar masonry\".\n\n**Diseño antisísmico:**\nCusco está ubicado en una zona sísmicamente activa, sin embargo, los muros de piedra inca han resistido siglos de terremotos. Esto se debe a que las formas irregulares y el ajuste apretado de las piedras crean una estructura flexible que puede moverse ligeramente durante los terremotos sin colapsar.\n\n**El misterio de la geometría:**\nEsta piedra tiene doce lados y doce ángulos, cada ángulo calculado con precisión. Los incas no usaron ruedas ni herramientas de hierro, sin embargo, pudieron cortar andesita dura en formas tan complejas—un rompecabezas que permanece en la arquitectura hasta el día de hoy.\n\n💡 **Conocimiento arquitectónico:** En la arquitectura inca, la precisión de ajuste de las piedras alcanza el nivel de milímetros. ¡Incluso después de más de seiscientos años (siglo XIV hasta hoy), todavía no puedes insertar una hoja entre las piedras! Esta técnica se llama \"Albañilería Poligonal de Piedra Seca\" y es un precioso legado dejado por el Imperio Inca al mundo. Nota: \"Sillar\" se refiere a la toba volcánica blanca en Arequipa, no a la piedra andesita/diorita de Cusco — no confundir."
    },
    culture: {
      subtitle: "Cultura | La Sabiduría Arquitectónica y Cosmovisión del Imperio Inca",
      content: "La Piedra de los 12 Ángulos no es solo una maravilla arquitectónica; es un testigo de la gloriosa civilización del Imperio Inca (Tawantinsuyu). Para entender su valor cultural, hay que entender la sagrada reverencia inca por la piedra (Rumi).\n\nEn quechua, la piedra se llama \"Rumi\". En el animismo indígena andino, la piedra no es solo material de construcción — es el hueso de la Madre Tierra (Pachamama), una entidad espiritual viva.\n\n**c. siglo XIV:**\nInca Roca, el 6.° Sapan Inca, ordenó la construcción de su residencia privada. Este magnífico muro exterior que contiene la Piedra de los 12 Ángulos fue la base sólida de este palacio real, simbolizando el poder supremo del gobernante.\n\n**1533 (Conquista española):**\nLos conquistadores españoles ocuparon Cusco y desmantelaron estructuras incas. Sin embargo, el cimiento de diorita y los muros del palacio de Inca Roca eran demasiado duros y estables para ser demolidos completamente.\n\n**Periodo Colonial:**\nLos arquitectos españoles adoptaron una estrategia de \"superposición\", construyendo directamente el estilo barroco del Palacio Arzobispal con muros blancos, balcones de madera tallada y un patio interior sobre el muro inca intacto.\n\n**Época Moderna:**\nHoy, el edificio alberga el Museo de Arte Religioso del Cusco. Los visitantes pueden ver claramente la capa inferior de exquisitos megalitos incas negro-verdes y la capa superior de muros blancos coloniales españoles, formando un paisaje de \"superposición cultural\" visualmente impactante.\n\n💡 **Conocimiento cultural:** Dos interpretaciones culturales profundas circulan entre académicos locales y comunidades quechua sobre por qué esta piedra tiene exactamente \"doce lados\":\n\n**Las Doce Panacas Reales:**\nAlgunos historiadores creen que los 12 ángulos representan las 12 familias de linaje real (Panacas) del Imperio Inca. Cada ángulo simboliza una rama familiar noble, estrechamente entrelazada para sostener colectivamente la base del imperio.\n\n**El Calendario Andino y el Orden del Tiempo:**\nOtra vista lo conecta con la astronomía altamente desarrollada de los incas. Los 12 ángulos corresponden a los 12 meses solares en el calendario inca, simbolizando el orden cíclico de las estaciones y la operación ordenada del universo."
    },
    saqsaywaman: {
      subtitle: "Extensión Macroscópica de la Artesanía de Megalitos: Ciudadela de Saqsaywaman",
      content: "Si está asombrado por esta exquisitamente detallada Piedra de los 12 Ángulos en los callejones de la calle Hatunrumiyoc, su viaje de exploración de la civilización andina apenas está comenzando.\n\nCamine a través de los callejones de la ciudad antigua y camine hacia arriba por los empinados escalones de piedra de la montaña trasera, y entrará en otro extremo de la artesanía de megalitos incas: la Ciudadela Militar Real de Saqsaywaman.\n\nSi la Piedra de los 12 Ángulos representa la búsqueda ultimate de los Incas de \"precisión geométrica micro\", entonces Saqsaywaman muestra el milagro violento de \"magnitud macro y líneas de defensa militar\". En esa enorme fortaleza commandante, los canteros incas escalaron la técnica de unión sin juntas a una magnitud asombrosa: los megalitos allí pesan no solo algunas toneladas, ¡sino de 100 a 128 toneladas! Esos enormes bloques de piedra caliza fueron cortados con múltiples ángulos, encajando precisamente como dientes de sierra, formando los \"Dientes del Jaguar\" que protegían Cusco.\n\nDesde la delicadeza del muro del palacio hasta la grandiosidad de la línea de defensa de la montaña trasera, los dos sitios se complementan entre sí y juntos constituyen el mito completo de la técnica de fabricación de piedra inca.\n\n💡 **Consejo de viaje:** Saqsaywaman está a aproximadamente 2 km de la Piedra de los 12 Ángulos. Se tardan unos 30 minutos caminando, o puede tomar un taxi. Se recomienda comprar el Boleto Turístico del Cusco para visitar Saqsaywaman y otros sitios incas juntos."
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "Abierto las 24 horas\nAbierto todos los días", note: "⚠️ Nota: Aunque es una atracción al aire libre, se recomienda visitar durante el día para mejor seguridad e iluminación." },
      price: { title: "Entrada", content: "Entrada gratuita\nNo se requiere entrada", note: "⚠️ Nota: Aunque la entrada es gratuita, se recomienda contratar un guía local si desea aprender más sobre la historia." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 30 minutos - 1 hora", note: "Puede combinarse con un tour por la ciudad de Cusco, planee medio día para visitar múltiples atracciones." },
      tips: { title: "Qué llevar", items: ["Zapatos cómodos para caminar (las calles de piedra de Cusco son resbaladizas)",
        "Medicamentos para el mal de altura u hojas de coca (Cusco está a aproximadamente 3400m, por favor prevenga el Soroche)", "Protección solar y gafas de sol (UV fuerte en altura)", "Cámara y baterías de repuesto", "Sombrero y ropa abrigadora", "Agua y snacks", "Mapa local o APP de guía"] },
      route: { title: "Ruta Recomendada", content: "Recomendamos especialmente la siguiente ruta de exploración por la ciudad de Cusco:\n\n1. Comience desde la Plaza de Armas\n2. Camine hasta la calle Hatunrumiyoc para ver la Piedra de los 12 Ángulos\n3. Continúe al barrio de San Blas para admirar la arquitectura colonial\n4. Visite el sitio de Qorikancha (Templo del Sol)\n5. Regrese a la Plaza de Armas para finalizar el tour de medio día" }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde Lima u Otras Ciudades", content: "Todos los visitantes deben llegar primero a Cusco—la antigua capital del Imperio Inca. Cusco tiene un aeropuerto internacional que conecta con Lima y las principales ciudades de Sudamérica.", options: [
        { name: "Vuelo (Recomendado)", price: "Aprox. $80 - $200 USD", time: "Aprox. 1 hora de vuelo", steps: ["Volar de Lima a Cusco (aprox. 1 hora)", "Ir del aeropuerto de Cusco al centro de la ciudad (aprox. 20 minutos)", "Caminar o tomar un taxi a la calle Hatunrumiyoc"] },
        { name: "Ómnibus de Larga Distancia", price: "Aprox. $30 - $60 USD", time: "Aprox. 20-24 horas", steps: ["Tomar un ómnibus de larga distancia de Lima a Cusco", "Después de llegar a Cusco, caminar o tomar un taxi a la atracción"] }
      ]},
      city: { title: "Transporte en Cusco", content: "La Piedra de los 12 Ángulos se encuentra en el centro de Cusco, con transporte conveniente. Está a aproximadamente 10 minutos a pie desde la Plaza de Armas.", steps: ["Caminar desde el alojamiento (más conveniente)", "Tomar un taxi o servicio de transporte", "Navegación: Ingresar Piedra de los 12 ángulos en Google Maps", "Caminar por la calle Hatunrumiyoc para encontrarla"] },
      selfDrive: { title: "Conduciendo", content: "No se recomienda conducir en el centro de Cusco debido a las calles estrechas y los caminos de piedra. Se recomienda caminar o tomar un taxi.", steps: ["Estacionar cerca de la Plaza de Armas", "Caminar a la calle Hatunrumiyoc", "Nota: El centro histórico de Cusco tiene restricciones de tráfico, los vehículos no locales están prohibidos"] }
    },
    tips: { title: "Consejos", items: [
      "Mejor luz: 07:00-08:30 luz lateral del amanecer; después de las 19:30 se encienden las luces de suelo — ideal para fotos",
      "Visite temprano en la mañana o al atardecer para mejor iluminación para fotos",
      "Cusco está a 3400m de altura, tenga cuidado con el mal de altura",
      "Tome medidas de protección solar, la UV es muy fuerte en altura",
      "Las calles de piedra son resbaladizas, use zapatos antideslizantes",
      "⚠️ Regla de protección: NO toque el muro de piedra. Hay alarmas infrarrojas; los infractores pueden ser multados.",
      "Respetar la cultura local, no escalar el muro",
      "Contratar un guía local para aprender más sobre historias históricas",
      "Visite el sitio de Qorikancha para aprender sobre la historia inca",
      "Mantenga sus pertenencias personales seguras, el centro de la ciudad tiene muchos turistas",
      "Respetar la cultura y tradiciones locales",
      "Mantenga la atracción limpia, no tire basura"
    ] },
    gallery: { title: "Galería", viewMore: "Ver Más Fotos en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Voces de Cusco: Reseñas Reales de Google Maps", viewMore: "Ver Más Reseñas en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda Más Sobre la Piedra de los 12 Ángulos", items: [
      { question: "¿Cuál es el horario de apertura de la Piedra de los 12 Ángulos?", answer: "La Piedra de los 12 Ángulos se encuentra en un muro al aire libre, abierta las 24 horas del día, todos los días del año. Sin embargo, como es una atracción al aire libre, se recomienda visitar durante el día para mejor seguridad e iluminación." },
      { question: "¿Hay una tarifa de entrada para ver la Piedra de los 12 Ángulos?", answer: "No, la Piedra de los 12 Ángulos es gratuita y está abierta al público. Se encuentra en un muro público en la calle Hatunrumiyoc, y los visitantes pueden venir en cualquier momento." },
      { question: "¿Qué tiene de especial la Piedra de los 12 Ángulos?", answer: "La Piedra de los 12 Ángulos es famosa por su forma única de doce lados. Demuestra las sobresalientes técnicas de piedra del Imperio Inca—la piedra fue cortada precisamente en un polígono de doce lados y perfectamente insertada en el muro sin ningún mortero o cemento." },
      { question: "Cómo llegar a la Piedra de los 12 Ángulos?", answer: "La Piedra de los 12 Ángulos está ubicada en la calle Hatunrumiyoc 480, Cusco, Perú. Está a aproximadamente 10 minutos a pie desde la Plaza de Armas en Cusco. Para navegación específica, busque \"Piedra de los 12 ángulos, Cusco\" en Google Maps." },
      { question: "¿Qué debe tener en cuenta al visitar?", answer: "Al visitar, tenga en cuenta:\n1. Mal de altura: Cusco está a aproximadamente 3400m de altura\n2. Protección solar: UV fuerte en altura\n3. Prevención de resbalones: Las calles de piedra son resbaladizas\n4. Respeto cultural: No escale el muro\n5. Seguridad: Mantenga sus pertenencias seguras" },
      { question: "¿Qué otras atracciones vale la pena visitar cerca?", answer: "La Piedra de los 12 Ángulos está ubicada en el centro de Cusco, cerca de muchas atracciones:\n1. Plaza de Armas\n2. Qorikancha\n3. Barrio de San Blas\n4. Catedral de Cusco\n5. Mercado de San Pedro" }
    ]},
    location: { title: "Ubicación", address: "C. Hatunrumiyoc 480, Cusco 08002\nPerú", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "Como un importante sitio de patrimonio cultural en Cusco, por favor únanse a nosotros para cuidar el monumento y proteger la historia.", text: "© 2026 Guía de la Piedra de los 12 Ángulos. Este sitio web es un proyecto independiente.", made: "Hecho para exploradores y aprendices.", linksTitle: "Enlaces", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "Peru Travel - Cusco", url: "https://www.peru.travel/es/destinos/cusco" },
      { name: "Gobierno Regional de Cusco", url: "https://www.gob.pe/regioncusco" },
      { name: "Cultura Cusco", url: "https://www.culturacusco.gob.pe/" }
    ]}
  },

  qu: {
    nav: { about: "Qhaway", ecology: "Yachay", culture: "Kultura", bestTime: "Allin Punchaw", visiting: "Puriy", transportation: "Chaykamuy", tips: "Yachay", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tagline: "Cusco, Piruw · Inka ñawpa", title: "12 K'uchuyuq Rumi", subtitle: "Piedra de los 12 ángulos · Cusco", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    about: {
      title: "Qhaway",
      p1: "12 K'uchuyuq Rumi (Piedra de los 12 ángulos) nisqa Cusco, Piruwpi Hatunrumiyoc ñanpi tiyan. Kayqa Inka Imperio rumi ruway kapupaq. Kay rumiqa 12 k'uchuyuq, Inka runakunaq ruwayta rikuchin.\n\nKay rumiqa Inka Qorikancha wasi pirqunpi tiyan. Inka runakuna rumikunata junt'achanku, mana ñawch'a icha cemento nisqawan.",
      p2: "Kay rumiqa Cuscopi riki qhawaypaq allin. Sapa p'unchay kachkan, mana qullqiwan yaqachikunchu. Runakunaqa haykamuq rikunku.",
      highlights: { title: "Rikuy", items: ["12 k'uchuyuq rumi: Inka rumi ruway", "Allin corte: Mana ñawch'a", "Historia: Inka Imperio", "Mana qullqi: Mana entrada", "Maypi: Cusco, chakin"] },
      bestTime: { title: "Allin Punchaw", content: "Sapa p'unchay\nPaqarina utaq ch'isin allin", tip: "💡 Yachay: Paqarina hamuy" }
    },
    ecology: {
      subtitle: "Yachay | Inka Rumimanta",
      content: "12 K'uchuyuq Rumi kanankupaq? Inka runakuna rumita junt'achanku, mana ñawch'awan. Inka pirqunqa jatun temblorpi mana urmachu."
    },
    culture: {
      subtitle: "Kultura | Inka Yachay",
      content: "Inka runakuna rumita yupaychanku. Kay rumiqa Inka Roca panpa wasi pirqunpi tiyan. Inka runakuna Quipu nisqawan yupaykunku."
    },
    saqsaywaman: {
      subtitle: "Hatun rumi ruway: Saqsaywaman",
      content: "12 K'uchuyuq Rumi rikusqaykiqa allin, ichaqa Inka rumi ruway mana chayllapi. Saqsaywaman-man rinki, hatun rumikuna 100-128 tonelada.\n\nSaqsaywaman nisqa Inka militar pirqun. Hatun rumikuna, jatun ruway. Cusco patapi.\n\n💡 Puriy yachay: Saqsaywaman 2 km karu, puriy utaq taxi."
    },
    visiting: {
      title: "Puriy",
      hours: { title: "Punchaw", content: "24 ura\nSapa punchaw", note: "⚠️ Punchaw rikuy." },
      price: { title: "Qullqi", content: "Mana qullqiyuqchu\nMana entrada", note: "⚠️ Guía apamuy." },
      duration: { title: "Unay", content: "30 minuto - 1 ura", note: "Cusco puriy." },
      tips: { title: "Apamuy", items: ["Bota (Cusco rumi ñan)", "Soroche pastilla", "Inti amachana", "Cámara"] },
      route: { title: "Puriy", content: "1. Plaza de Armas-manta\n2. Hatunrumiyoc ñan\n3. 12 K'uchuyuq Rumi rikuy" }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Lima-manta", content: "Cusco-man antawan hamuy. Cusco aeropuerto kan.", options: [
        { name: "Anta", price: "$80 - $200", time: "1 ura", steps: ["Lima-manta Cusco-man anta", "Aeropuerto-manta centro-man", "Hatunrumiyoc ñan-man puriy"] }
      ]},
      city: { title: "Cusco", content: "Plaza de Armas-manta 10 minuto puriy.", steps: ["Puriy", "Taxi", "Google Maps-mi maskuy"] },
      selfDrive: { title: "Auto", content: "Mana allin. Puriy.", steps: ["Plaza de Armas-pata parking", "Puriy"] }
    },
    tips: { title: "Yachay", items: [
      "Allin tuta: 07:00-08:30 inti lluqsiy; 19:30-manta lluqchikuna — allin rikuy",
      "Paqarina utaq ch'isin rikuy",
      "Cusco 3400m, Soroche",
      "Intita amachakuy",
      "Rumi ñan, botawan puriy",
      "Ama rumita llut'aychu — vigilancia kan",
      "Kultura respetay",
      "Guía apamuy"
    ] },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    reviews: { title: "Niykuna", subtitle: "Cusco niykuna", viewMore: "Astawan niykuna" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "24 ura. Sapa p'unchay." },
      { question: "Qullqi paganan chá?", answer: "Mana. Mana qullqiyuqchu." },
      { question: "Imapitachá 12 K'uchuyuq Rumi?", answer: "12 k'uchuyuq. Inka rumi." },
      { question: "Maymantá chayamuy atikun?", answer: "C. Hatunrumiyoc 480, Cusco. Plaza de Armas-manta 10 minuto." },
      { question: "Yachay munay?", answer: "Soroche, inti, rumi ñan, kultura." }
    ]},
    location: { title: "Maypipas", address: "C. Hatunrumiyoc 480, Cusco 08002\nPerú", openMaps: "Google Maps nisqapi maytapas rikuy" },
    footer: { callToAction: "Ñawpa ruwayta cuiday. Cultura respetay.", text: "© 2026 12 K'uchuyuq Rumi. Kayqa puriy yachay.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "Peru Travel - Cusco", url: "https://www.peru.travel/es/destinos/cusco" },
      { name: "Cusco Gobierno", url: "https://www.gob.pe/regioncusco" },
      { name: "Cultura Cusco", url: "https://www.culturacusco.gob.pe/" }
    ]}
  }
};
