const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns']; 

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston") {
      let list = document.createElement('ul');

      name.textContent = towns[i].name;
      events.textContent = towns[i].events;
  
      list.appendChild(name);
      list.appendChild(events);
      }
     document.querySelector('div.list').appendChild(list);
    }
   });