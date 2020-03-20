const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns']; 

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston") {
        
        let list = document.createElement('ul'); 

        for (let y = 0; y < towns[i].events.length; y++) {
          let item = document.createElement('li');
          item.textContent = towns[i].events[y];
          list.appendChild(item);
        } 
document.querySelector('div.list').appendChild(list); 
      } } });