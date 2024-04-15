import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; 
const avgSeasons: HTMLElement = document.getElementById("avgSeasons")!;
const cardContainer = document.getElementById("cardContainer")!;


avgSeasons.innerHTML = `${getAvgSeasons(dataSeries)}`
renderSeriesInTable(dataSeries)

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.number}</td>
                           <td><a class="btn" href="#" role="button" id="btn-${c.name}">${c.name}</a></td>

                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>
                           
                           `
                           
    seriesTbody.appendChild(trElement);

    trElement.addEventListener("click", () => mostrarTarjeta(c));
    })};

  function getAvgSeasons(series:Serie[]){
    let sum:number=0;
    let cont:number=series.length;
    series.forEach((serie)=>sum=sum+serie.seasons);
    console.log("Valor sum: "+sum)
    console.log("Valor cont: "+cont)
    let avg:number=sum/cont
    return avg
}

function mostrarTarjeta(serie: Serie) {
  const tarjetaHTML = `
    <div class="card">
      <div class="card-body" >
       <img src= "${serie.image}"; style="height: 200px; width: 300px; >  
       <p class= "card-text>   </p>
        <h3 class="card-title">${serie.name}</h3>
        <p class="card-text"> ${serie.description}</p>
        <a href="${serie.link}"> ${serie.link} </a>
      </div>
    </div>
  `;

  cardContainer.innerHTML = tarjetaHTML;
}
