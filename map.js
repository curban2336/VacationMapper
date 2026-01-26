// import * as L from "leaflet";
// import { GeocodingControl } from "./node_modules/@maptiler/geocoding-control/leaflet.js";
// //import "./node_modules/@maptiler/geocoding-control/style.css";

// const geoKey = '9OPgXOKt7nnq7dXCmHus';
// var map = new L.Map('map');
// const gc = new GeocodingControl({ 
//     apiKey: geoKey, 
//     position: 'bottomleft',
//     placeholder: 'Search for a place...',
//     collapsed: true, 
// });

// var markerList = [];
// map.setView([51.505, -0.09], 13);
// var latitude = 51.505;
// var longitude = -0.09;

// new L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${geoKey}`,{ //style URL
//   tileSize: 512,
//   zoomOffset: -1,
//   minZoom: 1,
//   attribution: `\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e`,
//   crossOrigin: true
// }).addTo(map);

// map.addControl(gc);

// const AddMarker = (lat, lng) => {
//     var marker = L.marker([lat, lng]).addTo(map);
//     markerList.push(marker);
//     console.log(markerList);
// }

// AddMarker(latitude, longitude);
