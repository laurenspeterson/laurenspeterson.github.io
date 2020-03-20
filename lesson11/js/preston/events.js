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
      
        let list = document.createElement('ul');

    for (let x = 0; x < towns[i].events.length; x++) {
        let item = document.createElement('li');
        item.textContent = "Preston Events: " +towns[i].events[x];
        list.appendChild(item);
       
       document.querySelector('div.list').appendChild(list);
   } } );