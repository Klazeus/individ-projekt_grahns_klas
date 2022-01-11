var map = L.map('map').setView([60.60723, 15.63294], 15);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ugsBnK00iYFCSKkRKe3j', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

var marker = L.marker([60.60570, 15.63333]).addTo(map);