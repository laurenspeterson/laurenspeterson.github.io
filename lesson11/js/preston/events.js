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
  
        item.textContent = "Preston Events: " + towns[i].events;

        list.appendChild(item);
       
       document.querySelector('div.list').appendChild(list);
   } } );