// définitions
const outputElement = document.querySelector("section.content");
const navElement = document.querySelector("nav.top");

// POUR COMMENCER JE CREE LES OBJETS
const exoList = [
    {
        titre:"Friendship is Magic",
        description:"Lister les noms des principaux personnages de la série.",
        fichier:'exo1.html',
        image:'exo1.jpg'
    },

    {
        titre:"L'horloge",
        description:"Créer une page qui affichera l'heure actuelle.",
        fichier:'exo2.html',
        image:'exo2.jpg'
    },
    
    {
        titre:"FizzBuzz",
        description:`
        Vous créerez une page qui affichera un champs de texte un compteur allant de 0 à 100. Il affichera :
        <br>Le nombre en question,
        <ul>
            <li>Fizz si c'est un multiple de 3,</li>
            <li>Buzz si c'est un multiple de 5</li>
            <li>FizzBuzz si c'est un multiple de 3 et de 5</li>
        <ul>`,
        fichier:'exo3.html',
        image:'exo34.png'
    },

    {
        titre:"FizzBuzz++",
        description:`
        <p>Vous créerez un nouveau FizzBuzz, sauf que :</p> 
        <ul>
            <li>Une case affichera le chiffre, Fizz, Buzz ou FizzBuzz s'afficheront au dessus du chiffre, en grand</li>
            <li>Les valeurs s'afficheront une à une.</li>
            <li>Un boutton next permettra de passer à la valeur suivante</li>
            <li>Un bouton "prev" permettra d'afficher la valeur précédente.</li>
        </ul>
        <p>Recyclage de script : 1 point de récup <span class="red">♥️</span></p>
        `,
        fichier:'exo4.html',
        image:'exo34.png'
    }
];

exoList.forEach(objet => {
    // JE CREE MON MENU
    navElement.innerHTML += `
        <a href='${objet.fichier}'>${objet.titre}</a>
    `;

    // J'AFFICHE MES CARTES
    outputElement.innerHTML += `
        <div class="carte" data-fichier="${objet.fichier}">
            <img src="assets/img/${objet.image}" alt="Illustration de la thématique de la carte" title="${objet.titre}">
            <p class="desc">${objet.description}</p>
            <a href='${objet.fichier}'>Voir l'exo</a>
        </div>
    `;
});