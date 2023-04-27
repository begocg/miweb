const map = L.map("map").setView([
    39.5,
    -6.1
], 7);
const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// var marker = L.marker([39.9183, -6.64637]).addTo(map);
// var marker = L.marker([40.2245, -6.57621]).addTo(map);
// var marker = L.marker([39.2194, -7.00132]).addTo(map);
// var marker = L.marker([38.2466, -6.30923]).addTo(map);
var markers = [
    [
        39.9183,
        -6.64637
    ],
    [
        40.2245,
        -6.57621
    ],
    [
        39.2194,
        -7.00132
    ],
    [
        38.2466,
        -6.30923
    ]
];
var html = [
    '<p><a href="evento1.html">El festivalino</a></p><p>El Festivalino de Pescueza regresa un a\xf1o m\xe1s, y ya son 15, a la localidad del Valle del Alag\xf3n (C\xe1ceres) que le da nombre. Este a\xf1o el festival vuelve a sus fechas habituales en primavera y se celebrar\xe1 el fin de semana del 1, 2 y 3 de abril, y como siempre aunar\xe1 ruralismo con cultura, m\xfasica y mucho arte.</p>',
    '<p><a href="evento2.html">Fiesta del Capazo</a></p><p>El rito de El Capazo es un rito ancestral de posible procedeencia Vetona que conserva todo el sabor m\xe1gico de los primeros tiempo. El Capazo celebra el final del invierno con la terminaci\xf3n de la molturaci\xf3n de las aceitunas en los molinos. Es una fiesta de la luz que refleja la esperanza de la primera.</p>',
    '<p><a href="evento3.html">Media marat\xf3n de Alburquerque</a></p><p>La XVI Media y VII 11K “Jos\xe9 M\xaa P\xe1mpano” se celebrar\xe1 el 16/04/2023 en la localidad de Alburquerque, estando organizado por A.D. Alburquerque (ADAL) con la colaboraci\xf3n de la Federaci\xf3n Extreme\xf1a de Atletismo, estando incluida dentro del Circuito Grandes Carreras de la Direcci\xf3n General de Deportes de la Junta de Extremadura, as\xed como financiada por la Diputaci\xf3n Provincial de Badajoz.</p>',
    '<p><a href="evento3.html">Fiesta de La Chanfaina</a></p><p>En Fuente de Cantos, el \xfaltimo fin de semana de abril, en concreto el \xfaltimo domingo, se celebra un concurso de chanfainas, un plato t\xedpico de la localidad.</p>'
];
var ExtremaduraIcon = L.icon({
    iconUrl: "img/markermap.png",
    iconSize: [
        30,
        30
    ],
    iconAnchor: [
        12,
        41
    ],
    popupAnchor: [
        1,
        -34
    ],
    shadowSize: [
        41,
        41
    ]
});
for(var i = 0; i < markers.length; i++)L.marker(markers[i], {
    icon: ExtremaduraIcon
}).addTo(map).bindPopup(html[i]);

//# sourceMappingURL=eventos.1e532f96.js.map
