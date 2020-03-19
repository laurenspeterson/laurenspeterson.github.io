const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns']; 

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston")
      
        let card = document.createElement('section');
        let info = document.createElement('div');
        let name = document.createElement('h2');
        let events = document.createElement('ul');
  
        info.className = "town-info";
        name.textContent = towns[i].name;
        events.textContent = "Preston Events: " + towns[i].events;
  
        info.appendChild(name);
        info.appendChild(events);
       
        
       document.querySelector('div.cards').appendChild(card);
   } } );