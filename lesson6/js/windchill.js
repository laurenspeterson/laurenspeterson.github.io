let temp = parseFloat(document.getElementById('temp').innerHTML);
let wind = parseFloat(document.getElementById('wind').innerHTML);
if (temp > 50 || wind < 3.0) {
   document.getElementById('windchill').innerHTML = "N/A";
} else {
   let chill = 35.74 + (0.6215 * temp) - (35.75 * wind**0.16) + 
   (0.4275 * (temp * wind**0.16));
   document.getElementById('windchill').innerHTML = chill.toFixed(0);
}