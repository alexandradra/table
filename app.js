const ready = function() {
    //Chargement du DOM
    const people = [
      { firstname: "Ryhad", surname: "Duchmol" },
      { firstname: "César", surname: "Guéridon" },
      { firstname: "Sylvain", surname: "Michu" },
      { firstname: "Jessica", surname: "De La Villardière" },
      { firstname: "Linda", surname: "Dupont" },
      { firstname: "Elise", surname: "Tiaré" },
    ];
    //
    const tbody = document.querySelector("tbody"); //Sélectionne uniquement data dans tbody
    for (let i=0; i < people.length; i++) { //Boucle pour aller tester chaque élément du tableau
      let tr = document.createElement("tr"); //Créée la balise tr ouverte et fermée dans DOM
      let td = document.createElement("td"); //IDEM pour td
      let td2 = document.createElement("td"); //IDEM pour td2 (deuxième colonne)
      let firstName = document.createTextNode(people[i].firstname); //Va récup les indexs de people
      let lastName = document.createTextNode(people[i].surname); //Va récup les indexs de people
      td.appendChild(firstName); //Permet de mettre firstName dans td
      tr.appendChild(td); //Met td dans tr
      td2.appendChild(lastName); //Permet de mettre lastName (surname) dans td
      tr.appendChild(td2); //Met td2 dans tr
      tbody.appendChild(tr); //Lie tr à tbody
    }


}
document.addEventListener("DOMContentLoaded", ready); //Lancer le script lorsque le DOM est chargé
