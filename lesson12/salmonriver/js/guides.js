const requestURL = 'https://laurenspeterson.github.io/lesson12/salmonriver/json/profiles.json';
fetch(requestURl)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const guides = jsonObject['guides']; 
    
       for (let i = 0; i < guides.length; i++ ) {
         let card = document.createElement('section');
         let name = document.createElement('h2');
         let certification = document.createElement('p');
         let age = document.createElement('p');
         let experience = document.createElement('p');
         let email = document.createElement('p');
         let description = document.createElement('p');
         let image = document.createElement('img');
    
         name.textContent = guides[i].name + ' ' + guides[i].lastname;
         certification.textContent = 'Certification Level: ' + guides[i].certification;
         age.textContent = 'Age: ' + guides[i].age;
         experience.textContent = 'Experience: ' + guides[i].experience;
         email.textContent = 'Email: ' + guides[i].email;
         description.textContent = 'Description: ' + guides[i].description;
         image.setAttribute('src', guides[i].imageurl);
         image.setAttribute('alt', guides[i].name + ' ' + guides[i].lastname + ' - ' + (i + 1));
    
         card.appendChild(name);
         card.appendChild(certification);
         card.appendChild(age);
         card.appendChild(experience);
         card.appendChild(email);
         card.appendChild(description);
         card.appendChild(image);
          
         document.querySelector('div.cards').appendChild(card);
        }
       });