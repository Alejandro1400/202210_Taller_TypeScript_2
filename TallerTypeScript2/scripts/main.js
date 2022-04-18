import { series } from "./data.js";
var seriesTabla = document.getElementById("series");
infoSeries(series);
promedioTemporadas(series);
function infoSeries(listaSeries) {
    var tBodyElement = document.createElement("tBody");
    var _loop_1 = function (actual) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("id", actual.id.toString());
        trElement.onclick = function (event) {
            var serieId = event.path[1].id;
            var serieAct = listaSeries[Number(serieId) - 1];
            var cardSerie = document.getElementById("cardSerie");
            var imagen = document.getElementById("imgSerie");
            imagen.setAttribute("src", serieAct.imagen);
            var nombre = document.getElementById("nombreSerie");
            nombre.innerHTML = "".concat(actual.nombre);
            var descripcion = document.getElementById("descripcionSerie");
            descripcion.innerHTML = "".concat(actual.descripcion);
            var link = document.getElementById("linkSerie");
            imagen.setAttribute("href", serieAct.link);
            cardSerie.style["display"] = "unset";
        };
        trElement.innerHTML =
            "<td>".concat(actual.id, "</td>\n        <td class = \"nombre\">").concat(actual.nombre, "</td>\n        <td>").concat(actual.canal, "</td>  \n        <td>").concat(actual.temporadas, "</td>");
        tBodyElement.appendChild(trElement);
    };
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var actual = listaSeries_1[_i];
        _loop_1(actual);
    }
    seriesTabla.appendChild(tBodyElement);
}
function promedioTemporadas(listaSeries) {
    var tBodyElement = document.createElement("tBody");
    var totalTemporadas = 0;
    var tamanio = 0;
    for (var _i = 0, listaSeries_2 = listaSeries; _i < listaSeries_2.length; _i++) {
        var actual = listaSeries_2[_i];
        var numTemporadas = actual.temporadas;
        totalTemporadas = totalTemporadas + numTemporadas;
        tamanio = tamanio + 1;
    }
    var promedioTemporadas = totalTemporadas / tamanio;
    var textoProm = "Numero Promedio Temporadas: " + promedioTemporadas;
    var trElement = document.createElement("tr");
    trElement.innerHTML =
        "<td>".concat(textoProm, "</td>");
    tBodyElement.appendChild(trElement);
    seriesTabla.appendChild(tBodyElement);
}
