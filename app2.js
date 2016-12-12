
const ready = function() {
  // Loading
  const people = [
    { firstname: "Ryhad", surname: "Duchmol", age: 21, height: 176 },
    { firstname: "César", surname: "Guéridon", age: 35, height: 189 },
    { firstname: "Sylvain", surname: "Michu", age: 65, height: 165 },
    { firstname: "Linda", surname: "Dupont", age: 12, height: 145 },
    { firstname: "Elise", surname: "De la Villardière", age: 18, height: 160 },
  ];
  //
  const tbody = document.querySelector("tbody");
  //Le script va s'exécuter dans tbody
  let trContainer = document.createDocumentFragment();
  //.createDocumentFragment permet de créer un "bloc" de données et d'éviter d'appeler une boucle plusieurs fois
  for(let i = 0; i < people.length; i++) {
    let tr = document.createElement("tr"); //Créée l'élément <tr>
    tr.innerHTML =  `<td>${people[i].surname}</td><td>${people[i].firstname}</td><td>${people[i].age}</td><td>${people[i].height}</td>`;
      trContainer.appendChild(tr); //Ajoute un enfant au trContainer
  }

  tbody.appendChild(trContainer); //S'ajoute au tbody

}

document.addEventListener("DOMContentLoaded", ready);
