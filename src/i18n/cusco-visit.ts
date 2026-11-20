import { cuscoPlaces, type Localized, type Place } from "./cusco-places";

const tourism = "https://www.peru.travel/experiences/city-tour-in-cusco-s-historic-center";

const originalPlaces: Place[] = [
  {
    slug: "hatun-rumiyoc",
    name: ["Twelve-Angled Stone", "Piedra de los Doce Ángulos", "十二角石"],
    address: "Calle Hatun Rumiyoc 480, Cusco",
    mapName: "Piedra de los Doce Ángulos",
    area: "centre",
    manager: "city",
    access: "public",
    history: ["The stone is set into a protected Inca wall beside the Archbishop’s Palace. The public visit is along the historic street.", "La piedra forma parte de un muro inca protegido junto al Palacio Arzobispal. Se observa desde la calle histórica.", "十二角石镶嵌在大主教宫旁受保护的印加石墙内，访客从历史街道上观察。"],
    walk: ["Set your walking destination to the stone. Vehicles may need to drop you near a wider adjoining street or the main square.", "Usa la piedra como destino a pie. Si vas en vehículo, baja en una calle próxima más ancha o cerca de la plaza principal.", "步行导航直接选十二角石。乘车可在邻近较宽的街道或武器广场一带下车，再步行进入。"],
    photoTip: ["", "", ""],
    faq: ["", "", ""],
    source: "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=2230",
  },
  {
    slug: "plaza-de-armas",
    name: ["Cusco Plaza de Armas", "Plaza de Armas del Cusco", "库斯科武器广场"],
    address: "Plaza de Armas, centro histórico, Cusco",
    mapName: "Plaza de Armas del Cusco",
    area: "centre",
    manager: "city",
    access: "public",
    history: ["This public square fronts several independently managed religious buildings. Their interior visits have separate arrangements.", "La plaza es un espacio público. Los templos que la rodean organizan sus propias visitas al interior.", "这里是老城公共广场。周边各教堂分别安排其室内参观。"],
    walk: ["Ask to be dropped at an accessible street near the square if traffic is restricted. Walk from the plaza to the stone.", "Si hay restricciones de tráfico, baja en una calle accesible cercana y sigue a pie hasta la piedra.", "如广场周边限行，可在邻近开放街道下车，再从广场步行到十二角石。"],
    photoTip: ["", "", ""],
    faq: ["", "", ""],
    source: tourism,
  },
  {
    slug: "san-blas",
    name: ["San Blas Square", "Plazoleta de San Blas", "圣布拉斯小广场"],
    address: "Plazoleta San Blas, barrio de San Blas, Cusco",
    mapName: "Plazoleta San Blas",
    area: "hills",
    manager: "city",
    access: "public",
    history: ["The square is a public space in the historic San Blas neighbourhood. The parish church has its own visitor arrangements.", "La plazoleta es un espacio público del barrio histórico de San Blas. El templo parroquial tiene su propio acceso de visita.", "小广场是圣布拉斯历史街区的公共空间。堂区教堂有独立的参观安排。"],
    walk: ["Walk uphill from the stone or take a taxi to a nearby permitted drop-off and explore the square on foot.", "Sube a pie desde la piedra o toma un taxi hasta un punto autorizado cercano y recorre la plazoleta a pie.", "可从十二角石步行上坡，也可搭出租车到附近允许下车的位置，再步行逛小广场。"],
    photoTip: ["", "", ""],
    faq: ["", "", ""],
    source: tourism,
  },
];

export const placeBySlug = new Map(
  [...originalPlaces, ...cuscoPlaces].map((place) => [place.slug, place]),
);

export const areaLabels: Record<Place["area"], Localized> = {
  centre: ["Historic centre", "Centro histórico", "库斯科历史中心"],
  hills: ["North hills and viewpoints", "Laderas y miradores del norte", "北部山坡与观景地"],
  day: ["Day trips and regional sites", "Excursiones y sitios de la región", "库斯科周边公路行程"],
};

export const accessLabels: Record<Place["access"], { hours: Localized; entry: Localized; advice: Localized }> = {
  public: {
    hours: ["Choose daylight and follow posted access notices.", "Prefiere las horas de luz y respeta los avisos de acceso.", "建议白天到访，通行以现场提示为准。"],
    entry: ["Public outdoor area. Any adjoining indoor attraction sets its own entry terms.", "Espacio público exterior. Los recintos vecinos tienen sus propias condiciones de ingreso.", "公共室外区域；相邻建筑的室内参观另按各自规定。"],
    advice: ["Leave room for people who use the street or square every day.", "Deja paso a quienes usan la calle o la plaza a diario.", "街巷和广场仍供居民日常使用，停留时给行人留出通道。"],
  },
  market: {
    hours: ["Visit earlier in the day for the widest choice of stalls.", "Ve temprano para encontrar más puestos abiertos.", "较早到访通常能遇到更多营业摊位。"],
    entry: ["The market has public access; pay vendors directly for purchases.", "El acceso al mercado es público y las compras se pagan a cada vendedor.", "市场向公众开放，商品与餐食各向摊主付费。"],
    advice: ["Pick a meeting point outside if your group will browse different aisles.", "Acuerda un punto de encuentro fuera si el grupo visita distintos pasillos.", "同行者若分头逛摊，可先约好市场外的集合点。"],
  },
  freeSite: {
    hours: ["MINCETUR lists 08:30–16:30. Confirm the day’s access with DDC Cusco.", "MINCETUR indica 08:30–16:30. Confirma el acceso del día con la DDC Cusco.", "秘鲁旅游资源名录列为 08:30–16:30，当天开放以库斯科地方文化局为准。"],
    entry: ["MINCETUR lists free entry.", "El inventario de MINCETUR indica ingreso libre.", "秘鲁旅游资源名录列为免费入场。"],
    advice: ["Stay on the paths between the exposed foundations.", "Mantente en los senderos entre los cimientos expuestos.", "沿墙基之间的开放步道参观。"],
  },
  church: {
    hours: ["Confirm visiting hours locally. Services and special events may change entry.", "Confirma el horario de visitas. Los oficios y actos especiales pueden limitar el acceso.", "参观时段请以现场公告为准；礼拜和活动可能调整入场。"],
    entry: ["Check any visitor ticket requirements at the church entrance.", "Consulta en la entrada los requisitos del boleto de visita.", "游客参观若需购票，请在教堂入口核对。"],
    advice: ["Give services priority and check the photography rules before entering.", "Da prioridad a los oficios y consulta las normas de fotografía antes de entrar.", "礼拜期间让出通道，入内前先了解摄影规则。"],
  },
  museum: {
    hours: ["Check with the museum for its opening days and last admission.", "Consulta los días de apertura y la última hora de ingreso del museo.", "出发前核对馆方开放日与最后入场时间。"],
    entry: ["Confirm the current admission price or ticket terms at the museum.", "Confirma el precio o las condiciones del boleto con el museo.", "以馆方当天公布的票价或购票条件为准。"],
    advice: ["Allow time for the galleries and check whether interior photography is permitted.", "Reserva tiempo para las salas y verifica las reglas de fotografía interior.", "预留看展时间，进入展厅前核对室内摄影规定。"],
  },
  ticket: {
    hours: ["Verify opening hours and final admission with the site before leaving.", "Verifica el horario y el último ingreso con el recinto antes de salir.", "出发前向景点核对开放时段与最后入场时间。"],
    entry: ["See COSITUC for the current Cusco Tourist Ticket circuit and prices.", "Consulta en COSITUC el circuito y las tarifas vigentes del Boleto Turístico del Cusco.", "在 COSITUC 核对当前库斯科旅游联票的适用线路和价格。"],
    advice: ["Keep your ticket ready and follow the permitted visitor circuit.", "Ten el boleto a mano y sigue el circuito habilitado.", "备好门票，按当天开放的参观线路游览。"],
  },
  outdoorHeritage: {
    hours: ["Confirm the open approach and visitor hours before setting out.", "Confirma el acceso habilitado y el horario antes de salir.", "出发前核对开放入口、步道及参观时段。"],
    entry: ["Ask the site authority whether a ticket or permission is required.", "Consulta con la autoridad si se exige entrada o autorización.", "是否需要门票或许可，请向遗址主管方核实。"],
    advice: ["Stay on the designated path and leave walls and carved stone untouched.", "Sigue el sendero habilitado y evita tocar muros y roca tallada.", "走开放步道，避免踏上墙体或触摸雕刻石面。"],
  },
  separate: {
    hours: ["Check the operator for visitor hours before planning an indoor visit.", "Consulta el horario de visitas con el operador antes de planificar el ingreso.", "计划进入室内前，先向参观运营方核对时段。"],
    entry: ["Confirm this site’s own ticket and current price.", "Confirma el boleto propio del recinto y su precio vigente.", "请核对这处景点的独立门票与当前价格。"],
    advice: ["Allow a separate visit for the interiors and follow the rules at the entrance.", "Dedica tiempo propio al interior y respeta las indicaciones de entrada.", "室内参观宜单独留时间，进入前按入口提示核对参观规定。"],
  },
  show: {
    hours: ["Check the advertised performance time and when seating begins.", "Consulta el horario anunciado de la función y la apertura de puertas.", "请核对当天演出开场及开始入座的时间。"],
    entry: ["Check the performance’s admission rules and current COSITUC circuit.", "Consulta el ingreso a la función y el circuito vigente de COSITUC.", "核对演出入场说明与 COSITUC 当前线路。"],
    advice: ["Leave time for the queue before the performance.", "Reserva tiempo para la fila antes de la función.", "演出开始前预留排队入场的时间。"],
  },
};

export const visitLabels = {
  en: { near: "Explore around the Twelve-Angled Stone", about: "About and management", management: "Management", address: "Location / access", area: "Area", basic: "Basic information", visit: "Visit planning", hours: "Opening and access", entry: "Admission", transport: "Getting there", rating: "Ratings and visitor reviews", liveReviews: "See current Google Maps ratings and reviews", photo: "Photo source", tickets: "Cusco Tourist Ticket", official: "Management information", related: "Nearby places" },
  es: { near: "Qué visitar cerca de la Piedra de los Doce Ángulos", about: "Sobre el lugar y su gestión", management: "Gestión", address: "Ubicación y acceso", area: "Zona", basic: "Datos básicos", visit: "Consejos para la visita", hours: "Horario y acceso", entry: "Ingreso", transport: "Cómo llegar", rating: "Valoraciones y opiniones", liveReviews: "Ver valoraciones y opiniones actuales en Google Maps", photo: "Fuente de la foto", tickets: "Boleto Turístico del Cusco", official: "Información de gestión", related: "Lugares cercanos" },
  zh: { near: "十二角石周边游览", about: "关于景点与管理主体", management: "管理或参观服务主体", address: "地点与入口", area: "所在区域", basic: "基本资料", visit: "游览建议", hours: "开放与通行", entry: "门票", transport: "交通方式", rating: "评分与游客评价", liveReviews: "查看 Google 地图当前评分、评价数量和评论", photo: "实景照片来源", tickets: "库斯科旅游联票", official: "管理资料", related: "周边景点" },
};

export const transportByArea: Record<Place["area"], Localized> = {
  centre: ["From the historic centre, walk to the address below. If arriving by taxi, allow for a short walk from the nearest vehicle access.", "Desde el centro histórico, sigue a pie hasta la dirección indicada. Si vas en taxi, cuenta con un tramo a pie desde el acceso vehicular más cercano.", "由历史中心可步行到下列地点。乘出租车时，若路段限行，请在最近的车辆通行处下车。"],
  hills: ["The approach is uphill from central Cusco. For a shorter climb, use a taxi to the named entrance or drop-off and continue along the visitor path.", "La aproximación desde el centro del Cusco es cuesta arriba. Para acortar la subida, toma un taxi al acceso indicado y continúa por el sendero habilitado.", "从库斯科市中心前往需要上坡。想少走坡路，可搭出租车到标示入口或下车点，再沿开放步道前进。"],
  day: ["Plan road transport from Cusco and agree on pickup for the return trip before entering the site.", "Organiza el traslado por carretera desde el Cusco y acuerda la recogida para el regreso antes de entrar.", "由库斯科市区安排公路交通，入场前约好返程车辆及上车地点。"],
};

export const roadRoute: Localized = ["Approach and visit route", "Ruta de acceso y visita", "到达与参观路线"];
export const tripMap: Localized = ["Directions from the Twelve-Angled Stone", "Cómo llegar desde la Piedra de los Doce Ángulos", "查看从十二角石出发的路线"];

export function placeMap(place: Place) {
  return "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${place.mapName}, ${place.address}, Perú`);
}

export function directionsMap(place: Place) {
  return "https://www.google.com/maps/dir/?api=1&travelmode=" +
    (place.area === "day" ? "driving" : "walking") +
    "&origin=" + encodeURIComponent("Piedra de los Doce Ángulos, Cusco, Perú") +
    "&destination=" + encodeURIComponent(`${place.mapName}, ${place.address}, Perú`);
}
