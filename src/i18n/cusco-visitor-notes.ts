import type { Localized } from "./cusco-places";

export const expandedGuideLabels = {
  en: { entrance: "Find the entrance", experience: "What to look for", access: "Planning your arrival", live: "Open the place listing to compare recent experiences, including comments about access, queues and visiting conditions." },
  es: { entrance: "Localiza el acceso", experience: "Qué observar", access: "Planifica la llegada", live: "Abre la ficha del lugar para comparar experiencias recientes sobre los accesos, las colas y las condiciones de visita." },
  zh: { entrance: "找准入口", experience: "现场观察重点", access: "出发前规划", live: "打开该景点的地图评价，优先查看近期游客对入口、排队和参观条件的反馈。" },
};

export const visitorNotes: Partial<Record<string, { experience: Localized; arrival: Localized }>> = {
  saqsaywaman: {
    experience: ["At the zigzag walls, look along the face from one end to see how the projecting corners change the line of the wall. From the permitted visitor circuit, compare the large lower blocks with the smaller courses above.", "Observa los muros en zigzag desde un extremo para ver cómo los salientes quiebran la línea. Desde el circuito permitido, compara los grandes bloques inferiores con las hiladas superiores.", "站在锯齿形石墙一端，沿墙面看突出转角如何改变墙线。再从开放线路对照下部巨石与上方石层。"],
    arrival: ["For the main site by road, use the Saphy approach via Llaullipata. Avenida Circunvalación is useful for a separate circuit through Q’enqo, Puka Pukara and Tambomachay.", "Para llegar por carretera al sector principal, usa la calle Saphy por Llaullipata. La avenida Circunvalación sirve para un recorrido aparte por Q’enqo, Puka Pukara y Tambomachay.", "乘车到主体遗址可走萨菲街，经 Llaullipata 入口。若还要去肯科、普卡普卡拉与坦博马查伊，可另走环城大道串联。"],
  },
  tipon: {
    experience: ["Follow one channel from a higher terrace to the outlets below. Viewing the same watercourse at two levels makes it easier to see how the terraces and drainage work together.", "Sigue un canal desde un andén alto hasta las salidas inferiores. Observa el mismo cauce desde dos niveles para entender la relación entre andenes y desagües.", "选一条水渠，从高层梯田一路看到下方出水口。换两个高度观察同一段水路，能看出梯田与排水的关系。"],
    arrival: ["The DDC Cusco road route reaches the Tipón stop on the Cusco–Sicuani road, about 17.5 km from Cusco. Continue to the archaeological park entrance before starting the terrace walk.", "La DDC Cusco indica unos 17,5 km desde Cusco hasta el paradero Tipón por la vía a Sicuani. Desde allí, continúa hasta la entrada del parque arqueológico.", "库斯科地方文化局的路线先沿库斯科至锡夸尼公路约 17.5 公里到蒂蓬站，再转往考古公园入口。步行看梯田从公园入口算起。"],
  },
  pikillacta: {
    experience: ["At a corridor junction, compare the straight enclosure walls with the surrounding hillside. The layout looks different when you pause at a junction and look down both axes.", "En un cruce de corredores, compara los muros rectos de los recintos con la ladera. Detente y mira en ambos ejes para apreciar la planta del asentamiento.", "在廊道交会处向两轴分别看过去，比较笔直围墙与外围坡地的关系。这个角度比只沿一条长廊走更容易读出聚落布局。"],
    arrival: ["Set the destination to the Pikillaqta archaeological park entrance. If you also plan to visit the Lucre wetland, save it as a separate stop and agree on a pickup point for each visit.", "Marca la entrada del parque arqueológico de Pikillaqta. Si también vas al humedal de Lucre, guárdalo como una parada aparte y acuerda dónde te recogerán en cada sitio.", "导航选皮基利亚克塔考古公园入口。若还去卢克雷湿地，另存一个停靠点，并分别约好两处的上车位置。"],
  },
  ollantaytambo: {
    experience: ["Look back toward Plaza Araccama from the lower terraces before deciding whether to climb higher. The view ties the terraces, town and valley into a single scene.", "Mira hacia la plaza Araccama desde los andenes bajos antes de decidir si subes más. Desde allí se entiende la relación entre los andenes, el pueblo y el valle.", "在较低的梯田回望阿拉卡马广场，再决定是否继续上行。这里能把山坡梯田、镇区与谷地放在同一个视野里。"],
    arrival: ["DDC Cusco lists road approaches via Chinchero and via Pisaq, both through Urubamba. For the archaeological visit, use Plaza Araccama as the local approach and keep the train station as a separate destination.", "La DDC Cusco indica rutas por Chinchero o Pisaq, ambas por Urubamba. Para la visita arqueológica, usa la plaza Araccama como referencia y marca la estación de tren por separado.", "库斯科地方文化局列出经钦切罗或皮萨克的两条公路路线，两者都经过乌鲁班巴。参观遗址可用阿拉卡马广场作镇上的参照，火车站另设导航。"],
  },
  "mercado-san-pedro": {
    experience: ["Compare the fresh produce and grain aisles with the prepared-food area. Each gives a different view of how ingredients from the region are bought and eaten in Cusco.", "Compara los pasillos de productos frescos y granos con la zona de comidas. Cada sector muestra una manera distinta de comprar y consumir ingredientes de la región.", "先逛果蔬与谷物摊，再转到熟食区。对照两边的摊位，能看到本地食材如何从日常采购走到餐桌。"],
    arrival: ["Perú Travel estimates about eight minutes on foot from Plaza de Armas. Use the entrance on Cascaparo as a meeting point if your group splits up inside.", "Perú Travel estima unos ocho minutos a pie desde la Plaza de Armas. Usa el acceso de Cascaparo como punto de encuentro si el grupo se separa.", "秘鲁国家旅游网站估算，从武器广场步行约 8 分钟。若同行者在市场内分开，可约在卡斯卡帕罗街入口会合。"],
  },
  qorikancha: {
    experience: ["Compare the curved Inca wall facing Avenida El Sol with the convent buildings above it. The street view makes the two building phases visible before you continue to the entrance at Santo Domingo.", "Compara el muro curvo inca hacia la avenida El Sol con las construcciones del convento. Desde la calle se aprecian ambas etapas antes de continuar hacia el acceso de Santo Domingo.", "从太阳大道对照弧形印加石墙与上方的修道院建筑。先在街上看清两层建筑的关系，再绕到圣多明各一侧入场。"],
    arrival: ["Choose the Santo Domingo convent entrance for the temple and cloister. The underground site museum on Avenida El Sol has a separate entrance and ticket arrangement.", "Usa el acceso del convento de Santo Domingo para el templo y el claustro. El museo de sitio subterráneo de la avenida El Sol tiene su propio acceso y boleto.", "看神殿和回廊请走圣多明各修道院入口。太阳大道一侧的地下遗址博物馆，入口和购票安排均独立。"],
  },
  cathedral: {
    experience: ["Stand back in Plaza de Armas to compare the central cathedral façade with the adjoining churches. Inside, use the main nave as a reference when moving between the altar, paintings and side spaces.", "Desde la plaza, compara la fachada de la catedral con los templos contiguos. Dentro, toma la nave principal como referencia para ubicar el altar, las pinturas y los espacios laterales.", "在武器广场退远，对照大教堂正面与相邻教堂。入内以主堂中轴为参照，再分开看祭坛、绘画与两侧空间。"],
    arrival: ["Approach from Plaza de Armas and confirm which door is handling visitor admission that day. Allow a separate visit window if you intend to see the interior.", "Acércate desde la Plaza de Armas y pregunta qué puerta recibe a los visitantes ese día. Reserva un horario aparte si piensas ver el interior.", "从武器广场正面到达后，先看当天游客入口设在哪一扇门。计划进内参观时，给教堂单独留一段时间。"],
  },
};
