let content = document.querySelector('.js-generated.content');

let header = document.createElement('h1');
header.setAttribute('class', 'dog-name');
header.append('Rizzo')  ;               
content.append(header);

let divTag = document.createElement('div');
divTag.setAttribute('class', 'dog-content');             
content.append(divTag);

//dog-image
let imageTag = document.createElement('img');
imageTag.setAttribute('class', 'dog-image');
imageTag.setAttribute('src', './assets/rizzo.jpg');
divTag.append(imageTag);

let divTag2 = document.createElement('div');
divTag.setAttribute('class', 'dog-details');             
divTag.append(divTag2);

let headerDesc = document.createElement('h3');           
headerDesc.append('Description');
divTag.append(headerDesc);

let paraDesc = document.createElement('p');           
paraDesc.append("This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.");
divTag.append(paraDesc);

