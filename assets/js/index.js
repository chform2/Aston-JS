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
        description:"Lorem ipsum",
        fichier:'exo3.html',
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
            <a href='${objet.fichier}'>Go voir l'exo bro'</a>
        </div>
    `;
});