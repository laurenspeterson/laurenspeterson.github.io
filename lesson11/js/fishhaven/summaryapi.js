const currentAPI = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=c7841a054ca549ed8fb8e9246b43f93e&units=imperial';

fetch(currentAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let condition = jsObject.weather[0].main;
    document.getElementById('condition').textContent = condition;

    let temp = Math.round(jsObject.main.temp);
    document.getElementById('temp').textContent = temp;

    let humidity = jsObject.main.humidity;
    document.getElementById('humidity').textContent = humidity;

    let speed = Math.round(jsObject.wind.speed);
    document.getElementById('speed').textContent = speed;

    // Calculate and display the Wind Chill 
    if (temp > 50 || speed < 3.0) {
      document.getElementById('windchill').innerHTML = "N/A";
   } else {
      let chill = 35.74 + (0.6215 * temp) - (35.75 * speed**0.16) + 
      (0.4275 * (temp * speed**0.16));
      document.getElementById('windchill').innerHTML = chill.toFixed(0);
   }

  });