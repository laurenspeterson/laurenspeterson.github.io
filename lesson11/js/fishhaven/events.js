const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns']; 
for (let e = 0; e < towns.length; e++ ) {
      if (towns[e].name == "Fish Haven") {
            let list = document.createElement('ul'); 
for (let y = 0; y < towns[e].events.length; y++) {
          let item = document.createElement('li');
          item.textContent = '- ' + towns[e].events[y];
          list.appendChild(item); } 
document.querySelector('div.list').appendChild(list); 
      } } });