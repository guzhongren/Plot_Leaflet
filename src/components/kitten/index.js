import {TileLayer} from "leaflet";
let kitten = TileLayer.extend({

    getTileUrl: function (coords) {
        var i = Math.ceil(Math.random() * 4);
        return "http://placekitten.com/256/256?image=" + i;
    },
    getAttribution: function () {
        return "<a href='http://placekitten.com/attribution.html'>PlaceKitten</a>"
    }
});

export function Kitten() {
    return new kitten();
}