const map = L.map('map').setView([39.5, -6.1], 7);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // var marker = L.marker([39.9183, -6.64637]).addTo(map);
    // var marker = L.marker([40.2245, -6.57621]).addTo(map);
    // var marker = L.marker([39.2194, -7.00132]).addTo(map);
    // var marker = L.marker([38.2466, -6.30923]).addTo(map);

    var markers = [
        [39.9183, -6.64637],
        [40.2245, -6.57621],
        [39.2194, -7.00132],
        [38.2466, -6.30923]
      ]
    var html = [
        '<p><a href="evento1.html">El festivalino</a></p><p>El Festivalino de Pescueza regresa un año más, y ya son 15, a la localidad del Valle del Alagón (Cáceres) que le da nombre. Este año el festival vuelve a sus fechas habituales en primavera y se celebrará el fin de semana del 1, 2 y 3 de abril, y como siempre aunará ruralismo con cultura, música y mucho arte.</p><p><img class="cartel-mapa" src="img/elfestivalino.webp" alt="Cartel del Festivalino en 2023"></p>',
        '<p><a href="evento2.html">Fiesta del Capazo</a></p><p>El rito de El Capazo es un rito ancestral de posible procedeencia Vetona que conserva todo el sabor mágico de los primeros tiempo. El Capazo celebra el final del invierno con la terminación de la molturación de las aceitunas en los molinos. Es una fiesta de la luz que refleja la esperanza de la primera.</p><p><img class="cartel-mapa" src="img/elcapazo.webp" alt="Cartel de la Fiesta del Capazo en 2023"></p>',
        '<p><a href="evento3.html">Media maratón de Alburquerque</a></p><p>La XVI Media y VII 11K “José Mª Pámpano” se celebrará el 16/04/2023 en la localidad de Alburquerque, estando organizado por A.D. Alburquerque (ADAL) con la colaboración de la Federación Extremeña de Atletismo, estando incluida dentro del Circuito Grandes Carreras de la Dirección General de Deportes de la Junta de Extremadura, así como financiada por la Diputación Provincial de Badajoz.</p><p><img class="cartel-mapa" src="img/mediamaraton.webp" alt="Cartel de la Media Maratón de Alburquerque"></p>',
        '<p><a href="evento4.html">Fiesta de La Chanfaina</a></p><p>En Fuente de Cantos, el último fin de semana de abril, en concreto el último domingo, se celebra un concurso de chanfainas, un plato típico de la localidad.</p><p><img class="cartel-mapa" src="img/chanfaina.webp" alt="Imagen promocional de la Fiesta de la Chanfaina"></p>'
    ]
      var ExtremaduraIcon = L.icon({
        iconUrl: 'img/markermap.webp',
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    for (var i = 0; i < markers.length; i++) {
        L.marker(markers[i], {icon: ExtremaduraIcon}).addTo(map).bindPopup(html[i], {autoPan: true});
    }