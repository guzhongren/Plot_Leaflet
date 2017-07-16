import * as L from "leaflet";

import { Kitten } from "./components/kitten"
var map = L.map('map', {
  crs: L.CRS.Simple,
  center: [0, 0],
  zoom: 5
});



map.addLayer(Kitten());