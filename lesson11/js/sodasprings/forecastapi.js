let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const day = new Date();
const whatDay= day.getDay();
let x;

for (x = 1; x < 6; x++){
  if ((whatDay + x) < 7){
    document.getElementById('day' + x).innerHTML = days[whatDay + x];
  } else {
    document.getElementById('day' + x).innerHTML = days[(whatDay + x) - 7];
  }
}
const fAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=117b7f64ed1dc97009b2e9dcf0623b82';

fetch(fAPI)
  .then((response) => response.json())
  .then((jsObject) => {
     console.log(jsObject);

     const fiveForecast = jsObject.list.filter(x =>
     x.dt_txt.includes('18:00:00'));
     console.log(fiveForecast);

     for (let s = 0; s < fiveForecast.length; s++) {
       document.getElementById('temp' + [s+1]).innerHTML = Math.round(fiveForecast[s].main.temp);
     }
     let imgSrc;
     let des;

     for (let w = 0; w < fiveForecast.length; w++) {
       imgSrc = 'https://openweathermap.org/img/w/' + fiveForecast[w].weather[0].icon + '.png';
       des = fiveForecast[w].weather[0].description;

       document.getElementById('image' + [w + 1]).textContent = imgSrc;  
       document.getElementById('image' + [w + 1]).setAttribute('src', imgSrc);
       document.getElementById('image' + [w + 1]).setAttribute('alt', des);
     }
  });