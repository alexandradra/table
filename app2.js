//Construction du contrôleur : initialisation des données
const app = {}; //Initialise un hash vide (objet vide) afin de ne pa poluer le js --> Créée une variable globale

  app.people = [ //Ajoute une nouvelle clef à la const = app
  /*  { firstname: "Ryhad", surname: "Duchmol", age: 21, height: 176 },
    { firstname: "César", surname: "Guéridon", age: 35, height: 189 },
    { firstname: "Sylvain", surname: "Michu", age: 65, height: 165 },
    { firstname: "Linda", surname: "Dupont", age: 12, height: 145 },
    { firstname: "Elise", surname: "De la Villardière", age: 18, height: 160 }, */
];
  app.update = function() {
    //TODO Save app.people in localStorage
    //Remove tbody content
    const tbody = document.querySelector('tbody');
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    // Add new contents from app.people
    const trContainer = document.createDocumentFragment();
    for (let i = 0; i < app.people.length; i++) {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${app.people[i].firstname}</td><td>${app.people[i].surname}</td><td>${app.people[i].age}</td><td>${app.people[i].height}</td>`;
      trContainer.appendChild(tr);
  }
  tbody.appendChild(trContainer);
};
  //Permet d'effacer le tableau + insérer toutes les données ensuite
  app.onSubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(this);//Utilise l'objet FormData sur le tableau add-person (grâce à this) - Transforme un élément du DOM en objet JS
  const newPerson = {
    surname: formData.get("lastname"),
    firstname: formData.get("firstname"),
    age: formData.get("age"),
    height: formData.get("height")
  };
  app.people.push(newPerson);
  app.update();
};

// DOM bindings
const ready = function() {
  // Initial drawing
  app.update();
  // On form submit
  document.getElementById("add-person").addEventListener("submit", app.onSubmit);
}
document.addEventListener("DOMContentLoaded", ready);
