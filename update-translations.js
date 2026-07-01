const fs = require('fs');

let content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

// Update Translations type
content = content.replace(
  'nav: { about: string; bestTime: string; visiting: string;',
  'nav: { about: string; ecology: string; culture: string; bestTime: string; visiting: string;'
);

content = content.replace(
  'about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; bestTime: { title: string; content: string; tip: string } };',
  'about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; bestTime: { title: string; content: string; tip: string } };\n  ecology: EcologySection;\n  culture: CultureSection;'
);

// 1. Ticket Price Correction
content = content.replace(/20秘鲁索尔/g, '70秘鲁索尔');
content = content.replace(/20 PEN/g, '70 PEN');
content = content.replace(/20 soles/g, '70 soles');
content = content.replace(/20 PEN extranjero/g, '70 PEN extranjero');
content = content.replace(/Extranjero: 20 PEN/g, 'Extranjero: 70 PEN');

// Add "Boleto Turístico del Colca" to Chinese text
content = content.replace(
  '外国游客：70 PEN（秘鲁索尔）',
  '国际/外国游客：70 PEN（科尔卡旅游套票 Boleto Turístico del Colca）\\n南美洲国家游客：40 PEN'
);

content = content.replace(
  'Foreign visitors: 70 PEN (Peruvian soles)',
  'International/Foreign visitors: 70 PEN (Colca Tourist Ticket / Boleto Turístico)\\nSouth American visitors: 40 PEN'
);

content = content.replace(
  'Visitantes extranjeros: 70 PEN (soles peruanos)',
  'Visitantes extranjeros/internacionales: 70 PEN (Boleto Turístico del Colca)\\nVisitantes sudamericanos: 40 PEN'
);

// 2. Canyon depth correction
content = content.replace(
  '科尔卡峡谷是世界上最深的峡谷之一，深度达4160米。',
  '科尔卡峡谷的最大深度达4160米，这是从山谷最高峰（如安帕托火山）到谷底河流的垂直落差，其深度几乎是美国大峡谷（Grand Canyon）的两倍。'
);

content = content.replace(
  'Colca Canyon is one of the deepest canyons in the world, reaching a depth of 4,160 meters.',
  'Colca Canyon reaches a maximum depth of 4,160 meters, measured as the vertical drop from the highest peaks (like the Ampato volcano) to the river at the canyon floor, making it nearly twice as deep as the Grand Canyon.'
);

content = content.replace(
  'El Cañón del Colca es uno de los cañones más profundos del mundo, alcanzando una profundidad de 4,160 metros.',
  'El Cañón del Colca alcanza una profundidad máxima de 4,160 metros, medida como la caída vertical desde los picos más altos (como el volcán Ampato) hasta el río en el fondo del cañón, haciéndolo casi el doble de profundo que el Gran Cañón.'
);

// 3. Altitude Warning
content = content.replace(
  '"保暖衣物（清晨气温较低）"',
  '"保暖衣物（清晨气温较低）",\n        "预防高反药物或古柯叶（观景台海拔约3287米，请预防高山症 Soroche）"'
);

content = content.replace(
  '"Warm clothing (early morning temperatures are low)"',
  '"Warm clothing (early morning temperatures are low)",\n        "Altitude sickness medication or coca leaves (Viewpoint altitude is approx. 3,287m, please prevent Soroche)"'
);

content = content.replace(
  '"Ropa abrigadora (temperatura temprano en la mañana es baja)"',
  '"Ropa abrigadora (temperatura temprano en la mañana es baja)",\n        "Medicamentos para el mal de altura u hojas de coca (La altitud del mirador es de aprox. 3,287m, por favor prevenga el Soroche)"'
);

// 4. Ecology and Culture sections
const zhEcology = `ecology: {
      subtitle: "生态探秘 | 巨兽的飞行密码：热气流滑翔原理",
      content: "为什么神鹰十字观景台的最佳观赏时间极其精确地被限定在早上 7:30 到 9:00 之间？这绝非巧合，而是一场由太阳、峡谷与地球重力共同演绎的物理奇观。\\n\\n**不会“扇翅膀”的飞行巨兽：**\\n安第斯神鹰是西半球体型最大的飞行鸟类。一只成年神鹰的体重可以达到 15 公斤，翼展高达 3.2 米。由于体型过于庞大，如果像普通鸟类那样靠不断扇动翅膀来飞行，它们会迅速耗尽体能。因此，神鹰演化出了一套极度节能的生存策略——依靠“热气流”（Thermal Updrafts）进行滑翔。\\n\\n**科尔卡峡谷的“隐形电梯”：**\\n深达 4160 米的科尔卡峡谷完美地提供了神鹰所需的动力。它的运作原理如下：\\n\\n• **清晨蓄能：** 夜间峡谷底部积聚了大量冷空气，神鹰通常在悬崖峭壁的巢穴中沉睡或梳理羽毛，等待日出。\\n• **热力驱动：** 太阳升起后，阳光直射在深邃的峡谷底部和岩壁上。岩石迅速加热了周围的冷空气。\\n• **气流上升：** 暖空气比冷空气轻，于是形成了强大的、垂直上升的热气流柱。这就像是在峡谷中开启了无数部“隐形的电梯”。\\n• **乘风起飞（7:30 - 9:00 AM）：** 此时，神鹰只需从悬崖上一跃而下，展开巨大的双翼，就能毫不费力地乘着这些上升热气流盘旋而上，从谷底一直滑翔至数千米的高空去寻找动物的腐尸。\\n\\n一旦到了上午 9:30 以后，随着峡谷整体温度升高，集中的热气流会被打散，神鹰便会飞往更高、更远的高原觅食，直到傍晚才会返回。\\n\\n💡 **观察指南：** 当你在观景台看到神鹰时，注意观察它们的翅膀尖端。它们的主翼羽毛会像手指一样完全张开，以此来感知气流的微小变化，实现完美的空气动力学控制。由于它们在空中滑翔不需要消耗多余能量，即使飞越几百公里，神鹰的心跳也几乎与休息时保持一致！"
    },`;

const zhCulture = `culture: {
      subtitle: "文化科普 | 安第斯宇宙观与神鹰图腾 (Cosmovisión Andina)",
      content: "在科尔卡峡谷，安第斯神鹰不仅仅是一只罕见的巨型猛禽，它更是印加与前印加文明中神圣的图腾。要理解神鹰的地位，就必须走进古老的“安第斯三界宇宙观”（Chakana）。\\n\\n在原住民的信仰体系中，宇宙被划分为三个截然不同却又紧密相连的维度，并分别由三种神圣的动物代表：\\n\\n• **Uku Pacha（地下世界 / 过去）：** 由蛇（Amaru）代表。象征着死者的灵魂栖息地、大地的深处以及生命的孕育与轮回。\\n• **Kay Pacha（人类世界 / 现在）：** 由美洲狮（Puma）代表。象征着我们生存的大地、物质世界，代表着力量、勇气与俗世的智慧。\\n• **Hanan Pacha（神明世界 / 未来）：** 由安第斯神鹰（Cóndor）代表。象征着天空、神明（Apus，即山神）的居所和无限的未来。\\n\\n**天空的使者：**\\n因为神鹰飞跃在冰雪覆盖的安第斯群峰之上，原住民相信它是唯一能在“人类世界”与“神明世界”之间穿梭的生灵。神鹰被视为“神明的信使”，负责将人类的祈祷带给天空，并在每天清晨用巨大的双翼协助太阳升起。在当地传说中，神鹰也是灵魂的引路者，负责将逝者的灵魂驮在背上，飞向天国的安息之地。\\n\\n💡 **知识卡片：** 在观景台附近的村落里，你可能会看到一种十字形的阶梯状几何图案，这被称为“安第斯十字架”（Chakana）。它的顶端正中央，通常就象征着神鹰所统领的 Hanan Pacha。"
    },`;

const enEcology = `ecology: {
      subtitle: "Ecology | The Flight Secret of a Giant: Thermal Updrafts",
      content: "Why is the best time to see condors at the Cruz del Cóndor viewpoint so precisely limited to between 7:30 and 9:00 AM? It's no coincidence, but a physical marvel orchestrated by the sun, the canyon, and gravity.\\n\\n**A Flying Giant That Doesn't 'Flap':**\\nThe Andean condor is the largest flying bird in the Western Hemisphere. An adult can weigh up to 15 kg (33 lbs) with a wingspan of 3.2 meters (10.5 ft). Because of their massive size, continuously flapping their wings like normal birds would quickly exhaust their energy. Therefore, condors have evolved an extremely energy-efficient survival strategy—gliding on 'Thermal Updrafts'.\\n\\n**The 'Invisible Elevators' of Colca Canyon:**\\nThe 4,160-meter-deep Colca Canyon perfectly provides the power condors need. Here is how it works:\\n\\n• **Morning Energy Storage:** At night, cold air accumulates at the bottom of the canyon. Condors usually sleep or preen their feathers in their cliffside nests, waiting for sunrise.\\n• **Thermal Drive:** After the sun rises, direct sunlight hits the deep canyon floor and rock walls. The rocks rapidly heat the surrounding cold air.\\n• **Rising Currents:** Warm air is lighter than cold air, forming powerful, vertically rising columns of thermal currents. This is like turning on countless 'invisible elevators' in the canyon.\\n• **Taking Flight (7:30 - 9:00 AM):** At this time, a condor only needs to leap from the cliff and spread its huge wings to effortlessly ride these rising thermal currents, spiraling up from the canyon floor to thousands of meters high to search for animal carcasses.\\n\\nOnce it gets past 9:30 AM, as the canyon's overall temperature rises, the concentrated thermal currents dissipate, and the condors fly to higher, farther plateaus to forage until returning in the evening.\\n\\n💡 **Observation Guide:** When you see condors at the viewpoint, notice their wingtips. Their primary flight feathers spread completely open like fingers to sense minute changes in airflow, achieving perfect aerodynamic control. Because gliding in the air requires almost no extra energy, a condor's heart rate remains nearly identical to when it's resting, even while flying hundreds of kilometers!"
    },`;

const enCulture = `culture: {
      subtitle: "Culture | Andean Cosmology and the Condor Totem (Cosmovisión Andina)",
      content: "In the Colca Canyon, the Andean condor is not just a rare giant bird of prey; it is a sacred totem in Inca and pre-Inca civilizations. To understand the condor's status, one must look into the ancient 'Andean Three-World Cosmology' (Chakana).\\n\\nIn the indigenous belief system, the universe is divided into three distinct yet closely connected dimensions, represented by three sacred animals:\\n\\n• **Uku Pacha (Underworld / Past):** Represented by the Snake (Amaru). It symbolizes the resting place of the dead, the depths of the earth, and the cycle of life and rebirth.\\n• **Kay Pacha (Human World / Present):** Represented by the Puma. It symbolizes the earth we live on, the material world, representing strength, courage, and earthly wisdom.\\n• **Hanan Pacha (World of the Gods / Future):** Represented by the Andean Condor (Cóndor). It symbolizes the sky, the dwelling place of the gods (Apus, or mountain spirits), and the infinite future.\\n\\n**Messenger of the Sky:**\\nBecause the condor flies over the snow-capped Andean peaks, indigenous people believed it was the only creature capable of traveling between the 'Human World' and the 'World of the Gods'. The condor is seen as the 'messenger of the gods', responsible for carrying human prayers to the sky and using its massive wings to help the sun rise every morning. In local legends, the condor also guides the souls of the deceased, carrying them on its back to their resting place in the heavens.\\n\\n💡 **Did you know?** In the villages near the viewpoint, you might see a cross-shaped, stepped geometric pattern known as the 'Andean Cross' (Chakana). Its top center usually symbolizes the Hanan Pacha, ruled by the condor."
    },`;

const esEcology = `ecology: {
      subtitle: "Ecología | El Secreto de Vuelo del Gigante: Corrientes Térmicas",
      content: "¿Por qué el mejor momento para ver cóndores en el mirador Cruz del Cóndor está tan precisamente limitado entre las 7:30 y las 9:00 AM? No es coincidencia, sino una maravilla física orquestada por el sol, el cañón y la gravedad.\\n\\n**Un Gigante Volador que no 'Aletea':**\\nEl cóndor andino es el ave voladora más grande del hemisferio occidental. Un adulto puede pesar hasta 15 kg con una envergadura de 3.2 metros. Debido a su enorme tamaño, aletear continuamente como las aves normales agotaría rápidamente su energía. Por lo tanto, los cóndores han evolucionado una estrategia de supervivencia extremadamente eficiente en energía: planear en 'Corrientes Térmicas'.\\n\\n**Los 'Ascensores Invisibles' del Cañón del Colca:**\\nEl Cañón del Colca, de 4,160 metros de profundidad, proporciona perfectamente la energía que los cóndores necesitan. Así es como funciona:\\n\\n• **Almacenamiento de Energía Matutino:** Por la noche, el aire frío se acumula en el fondo del cañón. Los cóndores generalmente duermen o acicalan sus plumas en sus nidos en los acantilados, esperando el amanecer.\\n• **Impulso Térmico:** Después del amanecer, la luz solar directa golpea el profundo fondo del cañón y las paredes rocosas. Las rocas calientan rápidamente el aire frío circundante.\\n• **Corrientes Ascendentes:** El aire cálido es más ligero que el aire frío, formando poderosas columnas de corrientes térmicas que se elevan verticalmente. Esto es como encender innumerables 'ascensores invisibles' en el cañón.\\n• **Tomando Vuelo (7:30 - 9:00 AM):** En este momento, un cóndor solo necesita saltar del acantilado y extender sus enormes alas para montar sin esfuerzo estas corrientes térmicas ascendentes, girando en espiral desde el fondo del cañón hasta miles de metros de altura para buscar cadáveres de animales.\\n\\nUna vez pasadas las 9:30 AM, a medida que la temperatura general del cañón aumenta, las corrientes térmicas concentradas se disipan y los cóndores vuelan hacia mesetas más altas y lejanas para alimentarse hasta regresar por la noche.\\n\\n💡 **Guía de Observación:** Cuando vea cóndores en el mirador, note las puntas de sus alas. Sus plumas de vuelo primarias se abren completamente como dedos para detectar cambios diminutos en el flujo de aire, logrando un control aerodinámico perfecto. Debido a que planear en el aire casi no requiere energía adicional, ¡la frecuencia cardíaca de un cóndor permanece casi idéntica a cuando está descansando, incluso mientras vuela cientos de kilómetros!"
    },`;

const esCulture = `culture: {
      subtitle: "Cultura | La Cosmovisión Andina y el Tótem del Cóndor",
      content: "En el Cañón del Colca, el cóndor andino no es solo una rara ave de presa gigante; es un tótem sagrado en las civilizaciones incas y preincas. Para comprender el estatus del cóndor, uno debe mirar hacia la antigua 'Cosmovisión de los Tres Mundos Andinos' (Chakana).\\n\\nEn el sistema de creencias indígenas, el universo está dividido en tres dimensiones distintas pero estrechamente conectadas, representadas por tres animales sagrados:\\n\\n• **Uku Pacha (Mundo Subterráneo / Pasado):** Representado por la Serpiente (Amaru). Simboliza el lugar de descanso de los muertos, las profundidades de la tierra y el ciclo de vida y renacimiento.\\n• **Kay Pacha (Mundo Humano / Presente):** Representado por el Puma. Simboliza la tierra en la que vivimos, el mundo material, representando la fuerza, el coraje y la sabiduría terrenal.\\n• **Hanan Pacha (Mundo de los Dioses / Futuro):** Representado por el Cóndor Andino. Simboliza el cielo, la morada de los dioses (Apus, o espíritus de las montañas) y el futuro infinito.\\n\\n**Mensajero del Cielo:**\\nDebido a que el cóndor vuela sobre los picos nevados de los Andes, los pueblos indígenas creían que era la única criatura capaz de viajar entre el 'Mundo Humano' y el 'Mundo de los Dioses'. El cóndor es visto como el 'mensajero de los dioses', responsable de llevar las oraciones humanas al cielo y usar sus enormes alas para ayudar a que el sol salga cada mañana. En las leyendas locales, el cóndor también guía las almas de los difuntos, llevándolos en su espalda a su lugar de descanso en los cielos.\\n\\n💡 **¿Sabías que?** En los pueblos cercanos al mirador, es posible que vea un patrón geométrico escalonado en forma de cruz conocido como la 'Cruz Andina' (Chakana). Su centro superior generalmente simboliza el Hanan Pacha, gobernado por el cóndor."
    },`;

const quEcology = `ecology: {
      subtitle: "Yachay | Cóndor Phaway",
      content: "Cóndor phawayta munanki? 7:30 - 9:00 AM allinmi. Inti q'uñichin, wayra wichayman purin. Cóndorqa hatun p'isqu (15 kg), wayrawan phawan, mana kallpata usuchinchu.\\n💡 **Yachay:** Cóndor phawaspaqa samasqallam kachkan."
    },`;

const quCulture = `culture: {
      subtitle: "Yachay | Cóndor Yachay (Cosmovisión Andina)",
      content: "Inka yachaypi kinsa pacha kan:\\n• **Uku Pacha:** Amaru (Amaru)\\n• **Kay Pacha:** Puma (Puma)\\n• **Hanan Pacha:** Cóndor (Cóndor)\\nCóndorqa Hanan Pachamanta apamun, Apukunawan rimaspa. Runakunaq almantapas apan."
    },`;

// Insert the sections right after 'about' in each language block
content = content.replace('tip: "💡 建议: 提前到达，占据有利观景位置" }\n    },', 'tip: "💡 建议: 提前到达，占据有利观景位置" }\n    },\n    ' + zhEcology + '\n    ' + zhCulture);
content = content.replace('tip: "💡 Tip: Arrive early to get a good viewing spot" }\n    },', 'tip: "💡 Tip: Arrive early to get a good viewing spot" }\n    },\n    ' + enEcology + '\n    ' + enCulture);
content = content.replace('tip: "💡 Consejo: Llegue temprano para obtener un buen lugar de observación" }\n    },', 'tip: "💡 Consejo: Llegue temprano para obtener un buen lugar de observación" }\n    },\n    ' + esEcology + '\n    ' + esCulture);
content = content.replace('tip: "💡 Yachay: Paqarina hamuy" }\n    },', 'tip: "💡 Yachay: Paqarina hamuy" }\n    },\n    ' + quEcology + '\n    ' + quCulture);

// Update nav translations
content = content.replace(
  'nav: { about: "景点概览", bestTime: "最佳时间", visiting: "游览指南"',
  'nav: { about: "景点概览", ecology: "生态探秘", culture: "神鹰文化", bestTime: "最佳时间", visiting: "游览指南"'
);
content = content.replace(
  'nav: { about: "Overview", bestTime: "Best Time", visiting: "Visit Guide"',
  'nav: { about: "Overview", ecology: "Ecology", culture: "Culture", bestTime: "Best Time", visiting: "Visit Guide"'
);
content = content.replace(
  'nav: { about: "Descripción", bestTime: "Mejor Época", visiting: "Guía de Visita"',
  'nav: { about: "Descripción", ecology: "Ecología", culture: "Cultura", bestTime: "Mejor Época", visiting: "Guía de Visita"'
);
content = content.replace(
  'nav: { about: "Qhaway", bestTime: "Allin Punchaw", visiting: "Puriy"',
  'nav: { about: "Qhaway", ecology: "Yachay", culture: "Kultura", bestTime: "Allin Punchaw", visiting: "Puriy"'
);

fs.writeFileSync('src/i18n/translations.ts', content, 'utf8');
