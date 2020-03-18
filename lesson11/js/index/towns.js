const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns']; 

    for (let i = 0; i < 6; i++) {
      if (towns[i].name == "Franklin" || towns[i].name == "Greenville" || 
          towns[i].name == "Placerton" || towns[i].name == "Springfield") {
         continue
      } 
      let card = document.createElement('section');
      let info = document.createElement('div');
      let pic = document.createElement('div');
      let name = document.createElement('h2');
      let motto = document.createElement('h3');
      let year = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');
      let image = document.createElement('img');

      info.className = "town-info";
      pic.classname = "town-pic";
      name.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      year.textContent = "Year Founded: " + towns[i].yearFounded;
      pop.textContent = "Population: " + towns[i].currentPopulation;
      rain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
      image.setAttribute('src', "images/" + towns[i].photo);
      image.setAttribute('alt', towns[i].name);

      info.appendChild(name);
      info.appendChild(motto);
      info.appendChild(year);
      info.appendChild(pop);
      info.appendChild(rain);
      pic.appendChild(image);
      card.appendChild(info);
      card.appendChild(pic);
     
      
     document.querySelector('div.cards').appendChild(card);
    }
   });