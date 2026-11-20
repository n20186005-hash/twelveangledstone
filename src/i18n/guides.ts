export const guideLocales = ["en", "es", "zh"] as const;
export type GuideLocale = typeof guideLocales[number];

type GuideText = {
  title: string;
  description: string;
  history: string;
  steps: [string, string, string];
  photo: string;
  question: string;
  answer: string;
};

type Guide = {
  slug: string;
  map: string;
  source: string;
  content: Record<GuideLocale, GuideText>;
};

export const guides: Guide[] = [
  {
    slug: "hatun-rumiyoc",
    map: "https://maps.app.goo.gl/79MfxrTMHU53c33J6",
    source: "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=2230",
    content: {
      en: {
        title: "Hatun Rumiyoc and the Twelve-Angled Stone",
        description: "Find the Twelve-Angled Stone on Hatun Rumiyoc in Cusco, identify its twelve corners and see how the block fits into the Inca wall.",
        history: "Hatun Rumiyoc means a place of large stones. The Twelve-Angled Stone sits in the wall along the pedestrian street beside the Archbishop’s Palace. Peru’s tourism inventory dates this surviving wall to the 14th century and associates it with the reign of Inca Roca. Follow the joints around the block and compare them with those of its neighbours. The visible outlines show how the irregular faces fit together across the wall.",
        steps: ["Start at Plaza de Armas and take the pedestrian approach northeast toward Hatun Rumiyoc.", "Find the stone in the wall by the Archbishop’s Palace. Trace its perimeter with your eyes and count the changes in direction.", "Walk a little farther to compare the block with the rest of the wall. Continue uphill if you are heading to San Blas."],
        photo: "Take a straight-on photograph to show the outline, then photograph a wider section of the wall to give the stone context. Keep the passage clear and avoid touching the masonry.",
        question: "Do I need a palace ticket to see the stone?",
        answer: "You can see it from the public pedestrian street. A visit inside the palace is a separate stop.",
      },
      es: {
        title: "Hatun Rumiyoc y la Piedra de los Doce Ángulos",
        description: "Ubica la Piedra de los Doce Ángulos en la calle Hatun Rumiyoc del Cusco y aprende a distinguir sus esquinas en el muro inca.",
        history: "Hatun Rumiyoc significa «lugar de piedras grandes». La piedra está en el muro que da a la calle peatonal, junto al Palacio Arzobispal. El inventario turístico peruano sitúa el muro conservado en el siglo XIV, durante el gobierno de Inca Roca. Sigue con la vista sus juntas y compáralas con las de los bloques vecinos. Los contornos muestran cómo encajan las piezas de formas irregulares.",
        steps: ["Desde la Plaza de Armas, toma el camino peatonal hacia el noreste en dirección a Hatun Rumiyoc.", "Busca la piedra en el muro del Palacio Arzobispal. Recorre el perímetro con la mirada y cuenta los cambios de dirección.", "Avanza unos pasos para comparar el bloque con el resto del muro. Si vas a San Blas, sigue cuesta arriba."],
        photo: "Haz una foto de frente para distinguir el contorno y otra más abierta que incluya varios bloques. Deja libre el paso y evita tocar el muro.",
        question: "¿Se necesita entrada al palacio para ver la piedra?",
        answer: "La piedra se ve desde la calle peatonal. La visita al interior del palacio es una parada aparte.",
      },
      zh: {
        title: "哈通鲁米约克街与十二角石",
        description: "从库斯科武器广场找到十二角石，沿哈通鲁米约克街观察石块轮廓和印加石墙的接缝。",
        history: "哈通鲁米约克意为「有大石头的地方」。十二角石嵌在大主教宫旁的临街石墙上。秘鲁旅游资源名录将这段保存至今的墙追溯至 14 世纪的印加罗卡统治时期。先沿石块轮廓观察接缝，再和相邻石块对照，就能看出形状不规则的石材如何彼此嵌合。",
        steps: ["从武器广场往东北侧步行，进入哈通鲁米约克街。", "在大主教宫旁找到十二角石，沿接缝用目光数出轮廓的每一次转折。", "向前多走几步，把十二角石和整面石墙对照。去圣布拉斯可沿坡道继续上行。"],
        photo: "先正对石块拍下完整轮廓，再退到行人通行允许的位置拍一张包含相邻石块的广角照片。留出通道，避免触摸石墙。",
        question: "看十二角石需要买大主教宫门票吗？",
        answer: "从公共步行街即可看到十二角石。参观大主教宫内部可另行安排。",
      },
    },
  },
  {
    slug: "plaza-de-armas",
    map: "https://www.google.com/maps/search/?api=1&query=Plaza%20de%20Armas%20de%20Cusco%2C%20Peru",
    source: "https://www.peru.travel/experiences/city-tour-in-cusco-s-historic-center",
    content: {
      en: {
        title: "Cusco Plaza de Armas to the Twelve-Angled Stone",
        description: "Plan a short walk from Cusco’s main square to Hatun Rumiyoc, with stops to compare the cathedral, the Jesuit church and the Inca wall.",
        history: "Plaza de Armas is the starting point for historic-centre tours. The cathedral and the Jesuit church of La Compañía de Jesús face the square. Their broad façades frame an open civic space, while Hatun Rumiyoc gives you a close view of Inca masonry inside a narrow pedestrian street.",
        steps: ["Start in Plaza de Armas and find the cathedral façade and La Compañía de Jesús.", "Leave the square toward Hatun Rumiyoc, northeast of the plaza. Check the street name as the lanes narrow.", "Stop at the Archbishop’s Palace wall for the Twelve-Angled Stone, then return to the square or continue to San Blas."],
        photo: "Stand back in the square for a full façade, then look for a close view of the stone joints on Hatun Rumiyoc. The two frames show the contrast in scale.",
        question: "Can I do this walk without entering the churches?",
        answer: "Yes. The square, the church façades and the stone are visible from public space. Allow extra time if you plan to visit church interiors.",
      },
      es: {
        title: "De la Plaza de Armas del Cusco a la Piedra de los Doce Ángulos",
        description: "Organiza un paseo desde la Plaza de Armas hasta Hatun Rumiyoc y compara las fachadas de la Catedral y la Compañía de Jesús con el muro inca.",
        history: "La Plaza de Armas es un punto de partida para recorrer el centro histórico. La Catedral y el templo jesuita de la Compañía de Jesús miran hacia la plaza. Sus fachadas abren la vista sobre un espacio amplio, mientras Hatun Rumiyoc permite observar de cerca la cantería inca en una calle estrecha.",
        steps: ["Empieza en la Plaza de Armas e identifica la Catedral y la Compañía de Jesús.", "Sal de la plaza hacia el noreste en dirección a Hatun Rumiyoc. Comprueba el nombre de la calle cuando se estreche el paso.", "Detente ante el muro del Palacio Arzobispal para ver la piedra. Desde allí puedes volver a la plaza o seguir hasta San Blas."],
        photo: "Toma distancia en la plaza para encuadrar una fachada completa; en Hatun Rumiyoc, acerca el encuadre a las juntas de los bloques para mostrar la diferencia de escala.",
        question: "¿Puedo hacer el paseo sin entrar a los templos?",
        answer: "Sí. La plaza, las fachadas y la piedra se ven desde el espacio público. Reserva tiempo adicional si quieres visitar los interiores.",
      },
      zh: {
        title: "库斯科武器广场到十二角石步行路线",
        description: "从库斯科武器广场步行到十二角石，沿途比较大教堂、耶稣会教堂和印加石墙，了解如何接续圣布拉斯街区。",
        history: "武器广场是库斯科历史中心步行游览的起点之一。库斯科大教堂与耶稣会教堂都面向广场，适合退后看完整立面。走进狭窄的哈通鲁米约克街后，观察重点变成近处的印加石墙和石块接缝。",
        steps: ["在武器广场先辨认大教堂和耶稣会教堂的立面。", "沿广场东北方向步行，街巷变窄时留意哈通鲁米约克的街牌。", "在大主教宫旁的石墙前找到十二角石，再按体力选择返回广场或继续往圣布拉斯上坡。"],
        photo: "广场适合从远处拍完整教堂立面，哈通鲁米约克街适合拍石墙接缝特写。把两张照片放在一起，可看到两处建筑尺度的差异。",
        question: "这条路线需要进入教堂吗？",
        answer: "广场、教堂外观和十二角石都能从公共空间观看。想参观教堂内部，可另外预留时间。",
      },
    },
  },
  {
    slug: "san-blas",
    map: "https://www.google.com/maps/search/?api=1&query=Plaza%20San%20Blas%2C%20Cusco%2C%20Peru",
    source: "https://www.peru.travel/experiences/city-tour-in-cusco-s-historic-center",
    content: {
      en: {
        title: "San Blas from the Twelve-Angled Stone",
        description: "Follow the uphill route from Hatun Rumiyoc to Plaza San Blas and plan a flexible walk through Cusco’s hillside neighbourhood.",
        history: "San Blas is a traditional neighbourhood uphill from the historic centre. The shift from the stone wall of Hatun Rumiyoc to sloping residential streets changes what you see. At Plaza San Blas, pause to orient yourself before visiting the church area or exploring the surrounding lanes.",
        steps: ["From the Twelve-Angled Stone, keep walking uphill toward San Blas.", "Use Plaza San Blas as your destination. Take breaks along the climb and watch your footing if the paving is wet.", "Look around the square and choose a nearby lane for a short detour, or retrace the route downhill to the historic centre."],
        photo: "From a place where you can step aside safely, photograph a sloping lane with foreground paving and buildings farther uphill. Use the open square for a wider shot.",
        question: "Which direction is easier on foot?",
        answer: "Starting in San Blas and walking toward the stone is the downhill option. Allow time for breaks and check that the route suits everyone in your group.",
      },
      es: {
        title: "De la Piedra de los Doce Ángulos a San Blas",
        description: "Sube desde Hatun Rumiyoc hasta la plazoleta de San Blas y organiza un paseo flexible por las calles en pendiente del barrio.",
        history: "San Blas es un barrio tradicional situado cuesta arriba del centro histórico. Al dejar atrás el muro de Hatun Rumiyoc, el recorrido pasa por calles residenciales en pendiente. La plazoleta sirve para orientarse antes de acercarse al templo o elegir un desvío por las calles del barrio.",
        steps: ["Desde la Piedra de los Doce Ángulos, continúa cuesta arriba hacia San Blas.", "Toma la plazoleta de San Blas como destino. Haz pausas durante la subida y presta atención al pavimento si está mojado.", "Recorre la plazoleta y elige una calle cercana para un desvío corto, o vuelve cuesta abajo al centro histórico."],
        photo: "Busca un punto lateral que deje libre el paso para fotografiar una calle en pendiente, con el pavimento en primer plano. Desde la plazoleta puedes conseguir una toma más abierta.",
        question: "¿En qué sentido es más fácil caminar?",
        answer: "Desde San Blas hacia la piedra se camina cuesta abajo. Considera el estado del pavimento y el ritmo de tu grupo al elegir el recorrido.",
      },
      zh: {
        title: "从十二角石上坡到圣布拉斯街区",
        description: "从哈通鲁米约克街步行到圣布拉斯小广场，了解上坡路况、折返选择和街巷拍摄位置。",
        history: "圣布拉斯是库斯科历史中心上方的传统街区。离开哈通鲁米约克的印加石墙后，沿途逐渐转为坡地居民街巷。圣布拉斯小广场适合作为步行终点，也可以在这里辨认教堂方向，再决定是否继续逛周围小巷。",
        steps: ["从十二角石所在的街道继续往圣布拉斯方向上坡。", "以圣布拉斯小广场作为导航终点。按体力安排停顿，雨后留意湿滑的石铺路面。", "到广场稍作停留，选一条邻近街巷短距离散步，或沿原路下坡返回历史中心。"],
        photo: "找一处能侧身让行的位置，以坡路和石铺路面作前景，拍出街巷的纵深。想拍开阔场景可到小广场取景。",
        question: "想少走上坡，应该从哪里出发？",
        answer: "可以从圣布拉斯出发，沿下坡方向走到十二角石。按同行者的体力和当天路况安排停留。",
      },
    },
  },
];

export function isGuideLocale(locale: string): locale is GuideLocale {
  return guideLocales.some((language) => language === locale);
}

export function guidePath(locale: GuideLocale, slug: string) {
  return `/${locale}/guide/${slug}`;
}

export const guideLabels = {
  en: { collection: "Cusco walking guides", home: "Twelve-Angled Stone", map: "Open in Google Maps", history: "History and what to look for", route: "Walking route", photo: "Photo tips", faq: "Frequently asked question", source: "Official visitor information" },
  es: { collection: "Paseos por el Cusco", home: "Piedra de los Doce Ángulos", map: "Abrir en Google Maps", history: "Historia y detalles para observar", route: "Ruta a pie", photo: "Consejos para fotografiar", faq: "Pregunta frecuente", source: "Información turística oficial" },
  zh: { collection: "库斯科周边步行指南", home: "十二角石", map: "在 Google 地图查看", history: "历史与观察重点", route: "步行路线", photo: "拍照建议", faq: "常见问题", source: "官方旅游资料" },
};
