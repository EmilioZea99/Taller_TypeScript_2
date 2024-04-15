import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var avgSeasons = document.getElementById("avgSeasons");
var cardContainer = document.getElementById("cardContainer");
avgSeasons.innerHTML = "".concat(getAvgSeasons(dataSeries));
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.number, "</td>\n                           <td><a class=\"btn\" href=\"#\" role=\"button\" id=\"btn-").concat(c.name, "\">").concat(c.name, "</a></td>\n\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>\n                           \n                           ");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener("click", function () { return mostrarTarjeta(c); });
    });
}
;
function getAvgSeasons(series) {
    var sum = 0;
    var cont = series.length;
    series.forEach(function (serie) { return sum = sum + serie.seasons; });
    console.log("Valor sum: " + sum);
    console.log("Valor cont: " + cont);
    var avg = sum / cont;
    return avg;
}
function mostrarTarjeta(serie) {
    var tarjetaHTML = "\n    <div class=\"card\">\n      <div class=\"card-body\" >\n       <img src= \"".concat(serie.image, "\"; style=\"height: 200px; width: 300px; >  \n       <p class= \"card-text>   </p>\n        <h3 class=\"card-title\">").concat(serie.name, "</h3>\n        <p class=\"card-text\"> ").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\"> ").concat(serie.link, " </a>\n      </div>\n    </div>\n  ");
    cardContainer.innerHTML = tarjetaHTML;
}
