import type { Localized } from "./cusco-places";

type Kind = "landmark" | "square" | "street" | "viewpoint" | "market" | "church" | "museum" | "archaeology" | "performance" | "nature" | "workshop";
type Circuit = "I" | "II" | "III";
export type Detail = [kind: Kind, tagline: Localized, visit: Localized, circuit?: Circuit];

export const details: Record<string, Detail> = {
  "hatun-rumiyoc": ["landmark", ["An Inca masonry landmark in a working pedestrian street", "Cantería inca en una calle peatonal del Cusco", "藏在老城步行街上的印加石工地标"], ["Begin at the lower end of the street and find the stone by following the wall, rather than relying on a map pin in the narrow lane.", "Entra por el extremo bajo y sigue el muro para localizar la piedra en la calle estrecha.", "从街道较低的一端进入，沿着石墙找十二角石。巷道狭窄时，现场辨认比盯着地图定位更方便。"]],
  "plaza-de-armas": ["square", ["Cusco’s main square and the start of the walk to Hatun Rumiyoc", "La plaza mayor del Cusco y el inicio del paseo a Hatun Rumiyoc", "库斯科主广场，也是步行前往十二角石的起点"], ["Start with one circuit around the square before choosing which church or lane to visit.", "Da una vuelta a la plaza antes de elegir un templo o una calle.", "先沿广场外围走一圈，认清大教堂、耶稣会教堂和通往十二角石的街口，再决定先去哪一处。"]],
  "san-blas": ["square", ["A hillside square above the Inca walls of central Cusco", "Una plazoleta en la ladera sobre los muros incas del centro", "印加石墙上坡方向的街区小广场"], ["End the climb at the square before deciding whether to explore the higher lanes or turn downhill.", "Termina la subida en la plazoleta antes de elegir entre seguir por las calles altas o bajar.", "把小广场当作第一段上坡的终点。到这里再按体力决定往高处逛街巷，或下坡返回老城。"]],
  cathedral: ["church", ["Three adjoining temples on Cusco’s main square", "Tres templos contiguos en la plaza mayor del Cusco", "武器广场上的三座相连教堂"], ["Start from the public plaza and give the cathedral its own indoor visit window. Inside, compare the main nave with the adjoining temples instead of rushing straight through.", "Empieza en la plaza y reserva tiempo propio para el interior. Compara la nave principal con los templos contiguos.", "先从广场看三座相连教堂的整体格局，再给内部单独留时间，观察主堂与相邻教堂的空间差异。"]],
  compania: ["church", ["A carved Jesuit façade beside Calle Loreto", "Una portada jesuita tallada junto a la calle Loreto", "洛雷托街口的耶稣会巴洛克立面"], ["Use the façade as the starting point. If you arrive during the midday gap in visitor hours, walk Calle Loreto before returning.", "Empieza por la portada. Si llegas durante la pausa del mediodía, recorre la calle Loreto antes de volver.", "先看广场正面的石雕立面。若赶上午间暂停参观，可先走洛雷托街，再回教堂入口。"]],
  qorikancha: ["church", ["An Inca temple and a Dominican convent on the same site", "Un templo inca y un convento dominico en el mismo solar", "同一处场址上的印加神殿与道明会修道院"], ["See the wall from Avenida El Sol first, then use the entrance on the Santo Domingo side. Decide separately whether to visit the underground museum.", "Mira primero el muro desde la avenida El Sol y entra por el lado de Santo Domingo. Decide aparte si visitarás el museo subterráneo.", "先在太阳大道一侧看弧形石墙，再绕到圣多明各小广场入场。地下遗址博物馆另行安排。"]],
  merced: ["museum", ["A convent cloister and collection of liturgical art", "Un claustro conventual y una colección de arte litúrgico", "以回廊和礼仪藏品为看点的修道院"], ["Make the cloister the centre of the visit. Compare how the arcade looks at ground level and across the courtyard.", "Dedica la visita al claustro. Compara los arcos desde la galería baja y desde el otro lado del patio.", "以回廊为主要看点，分别从底层拱廊和庭院对面观察拱券排列。"]],
  "santa-catalina": ["museum", ["Devotional art within a colonial monastery", "Arte devocional en un monasterio virreinal", "殖民时期修道院内的宗教艺术"], ["Start at the small square and use the exhibition rooms to compare painting, carving and the architecture of the convent.", "Empieza en la plazoleta y compara pintura, talla y arquitectura conventual en las salas.", "由小广场进馆，把绘画、木雕和展室本身的修道院建筑一起看。"]],
  "san-cristobal": ["viewpoint", ["A church forecourt overlooking the old city", "Una explanada parroquial con vista al casco antiguo", "从教堂前庭俯瞰老城屋顶"], ["If the uphill lanes would take most of your visit, taxi to the forecourt and take the downhill route back.", "Si la subida ocuparía gran parte de la visita, toma un taxi a la explanada y vuelve cuesta abajo.", "若上坡会占去大部分游览时间，可乘车上到前庭，再步行下坡返城。"]],
  "mercado-san-pedro": ["market", ["A covered neighbourhood market on Calle Cascaparo", "Un mercado cubierto de barrio en la calle Cascaparo", "卡斯卡帕罗街的日常室内市场"], ["Choose a purpose before entering: browse produce, pick up bread or sit for a meal. Meet your group at the same entrance afterwards.", "Elige si vas por productos frescos, pan o comida preparada. Reúnete luego con tu grupo en la misma entrada.", "先决定是看果蔬、买面包还是坐下用餐，最后回到约好的入口会合。"]],
  "museo-inka": ["museum", ["Inca archaeology in the Casa del Almirante", "Arqueología inca en la Casa del Almirante", "在海军上将宅邸里看印加考古展"], ["Keep cash available for the box office. Start with the ceramics and textiles, then return to the courtyard to see the building as a separate subject.", "Lleva efectivo para la boletería. Empieza por la cerámica y los textiles y vuelve al patio para apreciar la casona.", "备好现金购票。先看陶器与织物，再回到庭院看宅邸的建筑结构。"]],
  precolombino: ["museum", ["Ancient Peruvian art beside Plaza de las Nazarenas", "Arte del antiguo Perú junto a la plaza de las Nazarenas", "纳萨雷纳斯广场旁的古代秘鲁艺术"], ["Pick two galleries with contrasting materials and compare how the works were shaped and finished.", "Elige dos salas con materiales distintos y compara la forma y el acabado de las piezas.", "挑两间材质不同的展室，对照器物的成形方式、表面处理和细节。"]],
  "casa-concha": ["museum", ["Machu Picchu collections in a colonial courtyard house", "Colecciones de Machu Picchu en una casona virreinal", "在殖民宅邸里认识马丘比丘出土文物"], ["Look at the exhibition before visiting the archaeological site if you want context for the everyday objects recovered there.", "Visita la exposición antes del sitio arqueológico si buscas contexto sobre los objetos cotidianos recuperados allí.", "若后来还要去马丘比丘遗址，可以先看这里的日常用品展，了解考古发现与遗址的关系。"]],
  "museo-regional": ["museum", ["Cusco’s regional history in the Garcilaso house", "Historia regional del Cusco en la Casa Garcilaso", "在加西拉索故居梳理库斯科地区历史"], ["Start with the introductory rooms on regional prehistory, then leave time for the house and its connection to Garcilaso.", "Empieza por la prehistoria regional y deja tiempo para la casa y su vínculo con Garcilaso.", "先看地区史前展室，再留出时间了解宅邸与编年史作者加西拉索的联系。"], "II"],
  "museo-contemporaneo": ["museum", ["Contemporary art inside Cusco’s municipal palace", "Arte contemporáneo dentro del Palacio Municipal del Cusco", "在市政宫内看库斯科当代艺术"], ["Check the exhibition programme if you are coming for one artist. Set aside time for Plaza Regocijo after the visit.", "Consulta la programación si buscas a un artista concreto. Reserva unos minutos para la plaza Regocijo.", "若为特定艺术家而来，先查展览安排，结束后可在雷戈西霍广场停留。"], "II"],
  "centro-qosqo": ["performance", ["Regional music and dance on Avenida El Sol", "Música y danza regional en la avenida El Sol", "太阳大道上的库斯科地区乐舞"], ["Plan dinner around the performance rather than assuming you can arrive any time. Check where the queue starts on Avenida El Sol.", "Organiza la cena según la función y localiza el inicio de la fila en la avenida El Sol.", "按开演时间安排晚餐，在太阳大道确认入场队伍从哪里开始。"], "II"],
  pachacutec: ["landmark", ["A modern stone tower honouring an Inca ruler", "Una torre moderna de piedra en homenaje a un gobernante inca", "纪念印加统治者的现代石塔"], ["View the tower from the pavement first. Confirm interior access if your main purpose is the upper viewpoint.", "Mira primero la torre desde la acera y confirma el acceso si quieres subir al mirador.", "先从人行道观察塔身与青铜像。若主要想登高观景，出发前确认塔内开放情况。"], "II"],
  saqsaywaman: ["archaeology", ["Zigzag Inca ramparts above Cusco", "Baluartes incas en zigzag sobre el Cusco", "俯瞰库斯科的印加巨石折墙"], ["Start at the monumental walls on your first visit. Confirm the short route at the entrance if you want to limit climbs or walking time.", "Empieza por los baluartes y pregunta por el circuito corto si quieres limitar las subidas o el tiempo a pie.", "首次到访先看巨石墙核心区。想减少爬坡或步行时间，就在入口确认当天的短线。"], "I"],
  qenqo: ["archaeology", ["Carved channels and passages around a rocky outcrop", "Canales y pasajes tallados en torno a un afloramiento", "天然岩体周围的凿刻沟槽与通道"], ["Walk the outside of the outcrop first. Check which areas are open before looking for the carved channels.", "Recorre primero el exterior del afloramiento y comprueba qué zonas están habilitadas para ver los canales.", "先沿岩体外围观察，再按开放范围寻找人工凿刻的沟槽。"], "I"],
  "puka-pukara": ["archaeology", ["Stone enclosures on a ridge along the Pisaq road", "Recintos de piedra en una cresta junto a la vía a Pisaq", "皮萨克公路旁山脊上的石砌围合区"], ["View the walls from below and then look out over the valley. Arrange the next drop-off separately if visiting Tambomachay.", "Observa los muros desde abajo y después mira hacia el valle. Si vas a Tambomachay, organiza la siguiente parada por separado.", "先从低处看墙体布局，再面向谷地观察地势。若接着去坦博马查伊，另确认下一处下车点。"], "I"],
  tambomachay: ["archaeology", ["Stone water outlets and stepped walls in the north hills", "Surtidores de piedra y muros escalonados en las laderas del norte", "北部山坡上的石质水口与台阶状墙体"], ["Follow the rising path to the viewing area and pause where you can trace the water between levels.", "Sube al área de observación y detente donde puedas seguir el agua entre niveles.", "沿缓升步道到指定观察区，从能看清上下层的位置追踪水流走向。"], "I"],
  "cristo-blanco": ["viewpoint", ["A hilltop statue and a wide view of the Cusco valley", "Una estatua en la cima y una vista amplia del valle del Cusco", "山脊白色雕像下的库斯科谷地全景"], ["Choose the dedicated viewpoint pin and find the main square in the panorama before visiting the statue itself.", "Usa la ubicación del mirador y localiza la plaza mayor en el panorama antes de acercarte a la estatua.", "导航到观景台后，先在全景中找武器广场，再走近看雕像。"]],
  sapantiana: ["landmark", ["A multi-arched aqueduct in a narrow ravine", "Un acueducto de varios arcos en una quebrada estrecha", "跨过老城沟谷的多层石拱引水渠"], ["Make this a short detour from the upper old town. If the access is closed, continue to San Blas without entering the channel.", "Haz un desvío corto desde la parte alta del centro. Si el acceso está cerrado, sigue a San Blas sin entrar al cauce.", "将引水渠作为老城高处的一段短绕行。遇到关闭时可改去圣布拉斯，避免进入沟渠。"]],
  loreto: ["street", ["An Inca masonry lane between colonial buildings", "Un callejón de cantería inca entre edificios virreinales", "殖民建筑之间的印加石墙巷道"], ["Walk the lane once in each direction and compare the joints on the two sides. Keep moving when the lane is crowded.", "Recorre el callejón en ambos sentidos y compara las juntas de los dos lados. Si hay mucha gente, evita detenerte en el paso.", "可沿巷道走一个来回，比较两侧接缝；人多时在宽处停下观察。"]],
  "templo-san-blas": ["church", ["A hillside parish church known for its carved pulpit", "Un templo de ladera conocido por su púlpito tallado", "以木雕讲坛著称的坡上堂区教堂"], ["Check the church’s opening before climbing for the pulpit. If it is closed, the small square still works as a short walking stop.", "Confirma la apertura antes de subir por el púlpito. Si el templo está cerrado, la plazoleta sigue siendo una buena parada.", "若专程看讲坛，先确认教堂开放。若无法入内，可以小广场作为步行停靠点。"]],
  "san-francisco": ["museum", ["A Franciscan church, convent museum and public square", "Templo franciscano, museo conventual y plaza pública", "广场旁的方济各会教堂与修道院博物馆"], ["Allow extra time if you want to view the convent collection. On a shorter walk, see the façade before continuing to the Santa Clara Arch.", "Reserva tiempo adicional para la colección. En un paseo corto, mira la fachada antes de continuar hacia el arco de Santa Clara.", "想看馆藏就单独留一段时间。若走短线，可先看广场一侧的立面，再走向圣克拉拉拱门。"]],
  "templo-san-pedro": ["church", ["A twin-towered parish church opposite a working market", "Un templo parroquial de dos torres frente al mercado", "与日常市场相对的双塔堂区教堂"], ["Visit the outside before you enter the market. The square allows a better comparison of the towers than the pavement directly below them.", "Mira el exterior antes de entrar al mercado. La plazoleta ofrece mejor perspectiva de las torres que la acera junto al templo.", "进市场前先看教堂。从小广场退远一些，比在塔楼正下方更容易比较两塔。"]],
  "arco-santa-clara": ["landmark", ["A masonry gateway on the walk to San Pedro", "Un arco de piedra en el paseo hacia San Pedro", "通往圣佩德罗街区的石砌拱门"], ["Visit on foot between Plaza San Francisco and the market, and look both ways along the street after passing under the arch.", "Visítalo a pie entre la plaza San Francisco y el mercado, y observa la calle en ambos sentidos.", "从圣弗朗西斯科广场往市场走，过拱洞后回头看两端街景。"]],
  "santa-teresa": ["church", ["A convent ensemble along the old Saphy street", "Un conjunto conventual junto a la calle Saphy", "萨菲街旁的教堂与修道院建筑组"], ["Plan this as an exterior visit. Use the corner to see the doorway and the longer convent wall from public space.", "Planea una visita exterior. Desde la esquina puedes ver la portada y el muro largo desde la vía pública.", "以外观游览为主，在街角公共空间观察入口和修道院长墙。"]],
  kusicancha: ["archaeology", ["Exposed Inca foundations within the modern city grid", "Cimientos incas visibles dentro de la trama urbana actual", "现代老城街网里的印加院落基址"], ["Compare the site’s low foundations with the high masonry at Qorikancha. Allow time to read the plan from several points along the visitor path.", "Compara los cimientos bajos con los muros altos del Qorikancha y observa la planta desde distintos puntos del sendero.", "把低矮墙基与太阳神殿的高墙放在同一趟行程里对照。沿开放步道换几个角度辨认院落布局。"]],
  tipon: ["archaeology", ["Inca terraces and running-water channels in the South Valley", "Andenes incas y canales de agua en el Valle Sur", "南谷山坡上的印加梯田与流水渠道"], ["Begin at the lower terraces and follow the channel uphill in sections. Confirm your driver’s return point before starting the circuit.", "Empieza por los andenes bajos y sigue el canal por tramos. Confirma el punto de recojo antes de iniciar el circuito.", "先看较低层梯田，再分段沿水渠上行。开始参观前与司机确认返程集合点。"], "II"],
  pikillacta: ["archaeology", ["The long stone corridors of a planned Wari settlement", "Corredores de piedra de un asentamiento wari planificado", "瓦里规划聚落留下的石墙长廊"], ["Use the entrance and one main corridor as landmarks. This makes it easier to navigate the similar-looking enclosures.", "Usa la entrada y un corredor principal como referencias entre recintos de aspecto similar.", "记住入口和一条主通道作为参照，穿过形态相似的围合空间时更不容易迷路。"], "II"],
  andahuaylillas: ["church", ["Andean Baroque painting inside a South Valley parish church", "Pintura barroca andina dentro de un templo del Valle Sur", "南谷堂区教堂里的安第斯巴洛克壁画"], ["Start at the town square, then allow time to examine the painted interior. The South Valley route pairs this stop with Huaro and Canincunca.", "Empieza en la plaza y reserva tiempo para la pintura interior. Puedes combinar la visita con Huaro y Canincunca.", "从镇广场先看外观，再留时间欣赏室内绘画；走南谷巴洛克线路时可搭配瓦罗与卡宁昆卡。"]],
  pisac: ["archaeology", ["Sacred Valley terraces and hillside ruins above Pisaq", "Andenes y recintos sobre el pueblo de Pisaq", "皮萨克镇上方的圣谷梯田与山坡遗址"], ["Choose a short or long circuit before starting. For a market-and-ruins day, plan two stops and a transfer between them.", "Elige un circuito corto o largo antes de empezar. Si vas al mercado y a las ruinas, cuenta con dos paradas y un traslado.", "入场前先选短线或长线。若同日逛镇上市场，要为遗址和市场各留时间，并安排两者之间的交通。"], "III"],
  chinchero: ["archaeology", ["Inca terraces beside a colonial church and living village", "Andenes incas junto a un templo colonial y un poblado vivo", "印加梯田、殖民教堂与当代村镇相邻"], ["Start at the village square and reserve a separate stop for weaving if it interests you. Keep the archaeological circuit distinct from shop visits.", "Empieza en la plaza y reserva una parada aparte si quieres ver el trabajo textil.", "先到村镇主广场，再进考古区；对纺织感兴趣，可另留时间看村里的展示。"], "III"],
  moray: ["archaeology", ["Concentric Inca terraces cut into the landscape near Maras", "Andenes incas concéntricos en el paisaje cercano a Maras", "马拉斯附近顺凹地展开的印加同心圆梯田"], ["Begin with the view from the upper path. Make a separate stop for the Maras salt pans if combining the two.", "Empieza por la vista del sendero superior. Si también vas a las salineras de Maras, organiza otra parada.", "先从上方步道看完整圆形梯田；同游马拉斯盐田时，应单独设导航与停留时间。"], "III"],
  ollantaytambo: ["archaeology", ["A terraced Inca hill above Plaza Araccama", "Un cerro inca aterrazado sobre la plaza Araccama", "阿拉卡马广场上方的印加梯田山坡"], ["Choose the lower circuit or the higher steps according to time and fitness. If you travel onward by train, keep the station transfer separate.", "Elige el circuito bajo o las escaleras altas según tu tiempo y condición. Si sigues en tren, deja aparte el traslado a la estación.", "按体力与时间选择下层线路或高处台阶。如需搭火车，把前往车站的转场时间另计。"], "III"],
};

export const kindLabels: Record<Kind, Localized> = {
  landmark: ["Historic landmark", "Monumento histórico", "历史地标"],
  square: ["Public square", "Plaza pública", "公共广场"],
  street: ["Historic pedestrian street", "Calle peatonal histórica", "历史步行街"],
  viewpoint: ["Viewpoint and heritage site", "Mirador y lugar patrimonial", "观景台与历史地标"],
  market: ["Municipal market", "Mercado municipal", "市政市场"],
  church: ["Historic religious site", "Patrimonio religioso", "历史宗教建筑"],
  museum: ["Museum and heritage building", "Museo y edificio patrimonial", "博物馆与历史建筑"],
  archaeology: ["Archaeological site or park", "Sitio o parque arqueológico", "考古遗址或公园"],
  nature: ["Wetland and nature site", "Humedal y espacio natural", "湿地与自然景观"],
  workshop: ["Textile and interpretation centre", "Centro textil y de interpretación", "纺织与文化展示中心"],
  performance: ["Traditional performance venue", "Recinto de espectáculos tradicionales", "传统表演场馆"],
};

type Admission = { source: string; hours?: Localized; price?: Localized };
const baroque = "https://rutadelbarrocoandino.com/info-util/";
const cultureParks = "https://www.culturacusco.gob.pe/parques";

export const admission: Partial<Record<string, Admission>> = {
  "mercado-san-pedro": {
    source: "https://www.peru.travel/es/atractivos/mercado-san-pedro",
    hours: ["06:00–17:00 (indicative market hours; stalls vary).", "06:00–17:00 (horario referencial; cada puesto puede variar).", "06:00–17:00（市场参考时段，各摊位营业时间可能不同）。"],
  },
  tipon: { source: `${cultureParks}/tipon2/`, hours: ["07:00–16:30", "07:00–16:30", "07:00–16:30"] },
  pikillacta: { source: `${cultureParks}/pikillaqta/`, hours: ["07:00–16:30", "07:00–16:30", "07:00–16:30"] },
  ollantaytambo: { source: `${cultureParks}/ollantaytambo/`, hours: ["07:00–16:30", "07:00–16:30", "07:00–16:30"] },
  "museo-contemporaneo": {
    source: "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=8213",
    hours: ["MINCETUR lists Mon–Sat 09:00–17:00.", "MINCETUR indica lun–sáb 09:00–17:00.", "秘鲁旅游资源名录列为周一至周六 09:00–17:00。"],
  },
  "santa-catalina": {
    source: "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=902",
    hours: ["MINCETUR lists the museum at 08:30–17:00 daily; worship has a separate schedule.", "MINCETUR indica 08:30–17:00 todos los días; el culto tiene otro horario.", "秘鲁旅游资源名录列出博物馆每日 08:30–17:00；教堂礼拜另有时段。"],
  },
  tambomachay: {
    source: "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=905",
    hours: ["MINCETUR lists 08:00–16:00.", "MINCETUR indica 08:00–16:00.", "秘鲁旅游资源名录列为 08:00–16:00。"],
  },
  "museo-sitio-qorikancha": {
    source: "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=13710",
    hours: ["MINCETUR lists 08:30–18:30.", "MINCETUR indica 08:30–18:30.", "秘鲁旅游资源名录列为 08:30–18:30。"],
  },
  "san-juan-huaro": {
    source: baroque,
    hours: ["Daily 08:30–16:30", "Todos los días de 08:30 a 16:30", "每日 08:30–16:30"],
    price: ["Three-church South Valley pass: S/18 general, or S/10 for students and Peruvian visitors.", "Boleto Valle Sur de tres templos: S/18 general o S/10 para estudiantes y turistas nacionales.", "南谷三教堂联票：普通票 S/18，学生及秘鲁国内游客 S/10。"],
  },
  canincunca: {
    source: baroque,
    hours: ["Daily 08:30–16:30", "Todos los días de 08:30 a 16:30", "每日 08:30–16:30"],
    price: ["Three-church South Valley pass: S/18 general, or S/10 for students and Peruvian visitors.", "Boleto Valle Sur de tres templos: S/18 general o S/10 para estudiantes y turistas nacionales.", "南谷三教堂联票：普通票 S/18，学生及秘鲁国内游客 S/10。"],
  },
  raqchi: {
    source: `${cultureParks}/raqchi/`,
    hours: ["07:00–17:00, as listed by DDC Cusco.", "07:00–17:00 según la DDC Cusco.", "库斯科地方文化局列为 07:00–17:00。"],
  },
  cathedral: {
    source: "https://www.ytuqueplanes.com/destinos/cusco/ciudad-de-cusco/catedral-de-la-ciudad-de-cusco",
    hours: ["10:00–18:00, including public holidays", "10:00–18:00, incluidos los feriados", "10:00–18:00，含节假日"],
  },
  "casa-concha": {
    source: "https://www.museomachupicchu.com/",
    hours: ["Mon–Sat 09:00–17:00; closed Sundays", "Lun–sáb 09:00–17:00; cerrado domingos", "周一至周六 09:00–17:00，周日闭馆"],
    price: ["General S/20; international students and Peruvian visitors with DNI S/10; Peruvian students S/5.", "General S/20; estudiantes extranjeros y visitantes peruanos con DNI S/10; estudiantes peruanos S/5.", "普通票 S/20；外国学生及持 DNI 的秘鲁游客 S/10；秘鲁学生 S/5。"],
  },
  qorikancha: {
    source: "https://target2.promperu.gob.pe/destinos/cusco/ciudad-de-cusco/-qorikancha-templo-y-convento-de-santo-domingo-",
    hours: ["Mon–Sat 08:30–17:30; Sundays and public holidays 14:00–17:00.", "Lun–sáb 08:30–17:30; domingos y feriados 14:00–17:00.", "周一至周六 08:30–17:30；周日及节假日 14:00–17:00。"],
    price: ["Separate convent admission. The COSITUC ticket to the underground site museum covers a different entrance.", "Entrada propia del convento. El boleto COSITUC del museo de sitio subterráneo corresponde a otro acceso.", "修道院单独售票。COSITUC 联票内的地下遗址博物馆是另一个入口。"],
  },
  pachacutec: {
    source: "https://target2.promperu.gob.pe/destinos/cusco/ciudad-de-cusco/monumento-al-inca-pachacuteq",
    hours: ["Mon–Sat 09:00–19:00; Sun 08:00–17:00.", "Lun–sáb 09:00–19:00; dom 08:00–17:00.", "周一至周六 09:00–19:00；周日 08:00–17:00。"],
  },
  compania: {
    source: baroque,
    hours: ["Daily 09:00–11:20 and 13:00–17:20", "Todos los días de 09:00 a 11:20 y de 13:00 a 17:20", "每日 09:00–11:20、13:00–17:20"],
    price: ["Church only: general S/12, students and Peruvian visitors S/6. The four-church pass is S/25 general.", "Solo este templo: general S/12, estudiantes y turistas nacionales S/6. El pase general de cuatro templos cuesta S/25.", "单教堂票 S/12，学生及秘鲁国内游客 S/6。四教堂通票普通价 S/25。"],
  },
  andahuaylillas: {
    source: baroque,
    hours: ["Daily 07:30–17:30", "Todos los días de 07:30 a 17:30", "每日 07:30–17:30"],
    price: ["The three-church South Valley pass is S/18 general or S/10 for students and Peruvian visitors.", "El boleto de los tres templos del Valle Sur cuesta S/18 general o S/10 para estudiantes y turistas nacionales.", "南谷三教堂联票普通价 S/18，学生及秘鲁国内游客 S/10。"],
  },
  "museo-inka": {
    source: "https://museoinka.unsaac.edu.pe/informacion.php",
    hours: ["Mon–Fri 09:15–16:00; Sat 08:45–13:45 from April to December; closed Sundays and public holidays.", "Lun–vie 09:15–16:00; sáb 08:45–13:45 de abril a diciembre; cerrado domingos y feriados.", "周一至周五 09:15–16:00；4–12 月的周六 08:45–13:45；周日及节假日闭馆。"],
    price: ["International visitors S/20; Peruvian visitors S/10; students S/10 international or S/5 Peruvian. Cash at the museum box office.", "Extranjeros S/20; nacionales S/10; estudiantes extranjeros S/10 y nacionales S/5. Pago en efectivo en boletería.", "外国游客 S/20、秘鲁游客 S/10；外国学生 S/10、秘鲁学生 S/5。现场售票处收现金。"],
  },
  "museo-regional": {
    source: "https://museogarcilaso.culturacusco.gob.pe/visita.php",
    hours: ["Daily 08:00–17:00, last admission 30 minutes before closing. Closed 1 January and 25 December; 08:00–13:00 on 24 and 31 December.", "Diario 08:00–17:00; último ingreso 30 minutos antes. Cerrado el 1 de enero y el 25 de diciembre; 08:00–13:00 el 24 y 31 de diciembre.", "每日 08:00–17:00，关门前 30 分钟停止入场。1 月 1 日及 12 月 25 日闭馆；12 月 24 日和 31 日 08:00–13:00。"],
  },
  saqsaywaman: { source: `${cultureParks}/saqsaywaman/`, hours: ["07:00–17:30", "07:00–17:30", "07:00–17:30"] },
  pisac: { source: `${cultureParks}/pisaq/`, hours: ["07:00–16:30", "07:00–16:30", "07:00–16:30"] },
  moray: { source: `${cultureParks}/moray/`, hours: ["07:00–17:00", "07:00–17:00", "07:00–17:00"] },
};

export const tariff = "https://cosituc.gob.pe/tarifario-2/";

export function circuitPrice(circuit: Circuit): Localized {
  const days = circuit === "I" ? 1 : 2;
  return [
    `International visitor tariff: partial Circuit ${circuit} S/70 (${days} ${days === 1 ? "day" : "days"}); full ticket S/130 (10 days). Check COSITUC for Peruvian visitor and student rates.`,
    `Tarifa para visitantes extranjeros: Circuito ${circuit} S/70 (${days} ${days === 1 ? "día" : "días"}); boleto integral S/130 (10 días). Consulta las tarifas para nacionales y estudiantes en COSITUC.`,
    `国际游客票价：线路 ${circuit} 分票 S/70（${days} 天有效）；全票 S/130（10 天有效）。国内游客和学生票价见 COSITUC。`,
  ];
}

export const stayAreas: Record<string, Localized> = {
  centre: ["Stay near Plaza de Armas if you want to walk between central sights. Confirm where a taxi can stop if your accommodation is on a pedestrian street.", "Alójate cerca de la Plaza de Armas para recorrer a pie el centro. Si eliges una calle peatonal, confirma dónde puede parar un taxi.", "希望步行串联老城景点，可住武器广场周边。若住宿位于步行街，先确认出租车能停在哪个街口。"],
  hills: ["San Blas suits a stay in the hillside lanes; compare the climb and vehicle access before booking. A base around Plaza de Armas makes it easier to arrange an uphill ride.", "San Blas permite alojarse en la ladera; revisa las cuestas y el acceso vehicular. Desde la Plaza de Armas es fácil organizar un traslado de subida.", "想住坡巷可选择圣布拉斯，订房前先确认坡度和车辆能否到门口。住武器广场附近则便于安排上坡接送。"],
  road: ["For a same-day return, stay in Cusco and confirm road travel times. For an early start, look for overnight options in the destination town first.", "Si vuelves el mismo día, alójate en Cusco y confirma el tiempo por carretera. Para salir temprano, revisa primero el alojamiento en el destino.", "当日往返可住库斯科，先确认公路车程。若要在当地一早游览，可先查目的地镇上的住宿。"],
  south: ["Central Cusco is a practical base for a South Valley day trip. Confirm a pickup point and leave enough time to travel back before evening plans.", "El centro del Cusco es una base práctica para el Valle Sur. Confirma dónde te recogerán y deja margen para volver antes de los planes de la noche.", "南谷一日游可住库斯科老城。订车时确认接人地点，给返城和晚间行程之间留出余量。"],
  valley: ["Stay in Cusco for a day trip, or consider Urubamba for several Sacred Valley stops. Confirm the road transfer to the archaeological entrance.", "Puedes salir por el día desde Cusco o considerar Urubamba para combinar varias paradas del Valle Sagrado. Confirma el traslado hasta el acceso arqueológico.", "当天往返可住库斯科，计划连游多个圣谷地点也可考虑乌鲁班巴。住宿订好前确认至考古入口的接送。"],
  ollantaytambo: ["Stay in Ollantaytambo if catching an early train. Confirm walking and luggage transfer time between the archaeological entrance, hotel and station.", "Alójate en Ollantaytambo si tomarás un tren temprano. Comprueba los tiempos a pie y con equipaje entre el parque, el hotel y la estación.", "若要搭早班火车，可住奥扬泰坦博镇上。请分别核对考古入口、住宿和车站之间的步行时间及行李转运。"],
};

export const sectionLabels = {
  en: { intro: "Discover the site", highlights: "Highlights", kind: "Type of attraction", name: "Place name", city: "Region and country", region: "Cusco, Peru", notice: "Visiting notes", stay: "Where to stay", location: "Address and map", operator: "Published visitor information", checked: "Confirm current hours with the operator before travelling.", reviewSnapshot: "Google Maps rating, updated 23 November 2026: 4.6/5 from 14,593 reviews." },
  es: { intro: "Descubre el lugar", highlights: "Qué destaca", kind: "Tipo de atractivo", name: "Nombre del lugar", city: "Región y país", region: "Cusco, Perú", notice: "Antes de la visita", stay: "Dónde alojarse", location: "Dirección y mapa", operator: "Información de visita publicada", checked: "Confirma el horario vigente con el operador antes de salir.", reviewSnapshot: "Valoración de Google Maps actualizada el 23 de noviembre de 2026: 4,6/5, con 14.593 opiniones." },
  zh: { intro: "探索景点", highlights: "景区特色", kind: "景点类型", name: "景点名称", city: "地区与国家", region: "秘鲁库斯科", notice: "游览须知", stay: "住宿建议", location: "交通指南与地图", operator: "官方参观信息", checked: "出发前请向管理单位核对开放时间，临时调整以公告为准。", reviewSnapshot: "Google Maps 评分 4.6/5，共 14,593 条评价（2026 年 11 月 23 日更新）。" },
};
