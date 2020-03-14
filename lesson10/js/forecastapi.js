/*compute days*/
let dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
const day = new Date();
const wDay = day.getDay();
let x;

for (x = 1; x < 6; x++){
  if ((wDay + x) < 7){
    document.getElementById('day' + x).innerHTML = dayNames[wDay + x];
  } else {
    document.getElementById('day' + x).innerHTML = dayNames[(wDay + x) - 7];
  }
}

/*compute temps*/
const forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c7841a054ca549ed8fb8e9246b43f93e&units=imperial';

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {
     console.log(jsObject);

     const forecastFive = jsObject.list.filter(x =>
     x.dt_txt.includes('18:00:00'));
     console.log(forecastFive);

     for (let i = 0; i < forecastFive.length; i++) {
       document.getElementById('temp' + [i+1]).innerHTML = Math.round(forecastFive[i].main.temp);
     }

     /*compute icons*/
     let imgSrc;
     let des;

     for (let y = 0; y < forecastFive.length; y++) {
       imgSrc = 'https://openweathermap.org/img/w/' + forecastFive[y].weather[0].icon + '.png';
       des = forecastFive[y].weather[0].description;

       document.getElementById('image' + [y + 1]).textContent = imgSrc;  
       document.getElementById('image' + [y + 1]).setAttribute('src', imgSrc);
       document.getElementById('image' + [y + 1]).setAttribute('alt', des);
     }
  });