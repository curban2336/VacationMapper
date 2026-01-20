import * as L from "leaflet";
import { GeocodingControl } from "./node_modules/@maptiler/geocoding-control/leaflet.js";
//import "./node_modules/@maptiler/geocoding-control/style.css";

const geoKey = '9OPgXOKt7nnq7dXCmHus';
var map = new L.Map('map');
const gc = new GeocodingControl({ 
    apiKey: geoKey, 
    position: 'bottomleft',
    placeholder: 'Search for a place...',
    collapsed: true, 
});

var markerList = [];
map.setView([51.505, -0.09], 13);
var latitude = 51.505;
var longitude = -0.09;

new L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${geoKey}`,{ //style URL
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  attribution: `&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>`,
  crossOrigin: true
}).addTo(map);

map.addControl(gc);

const AddMarker = (lat, lng) => {
    var marker = L.marker([lat, lng]).addTo(map);
    markerList.push(marker);
    console.log(markerList);
}

AddMarker(latitude, longitude);