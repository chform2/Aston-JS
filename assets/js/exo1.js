/* Définitions de mes éléments */
const body = document.querySelector("body");
const navElement = document.querySelector("nav.top");
const outputElement = document.querySelector("section.content");

/**
 * Function permettant de changer l'arriè plan de la page en arc en ciel
 */
function changeBgColor(){
    body.style.cssText = `
        background:linear-gradient(90deg, Red, Orange, Yellow, Green, Blue, Indigo,violet);
        width:100%;
        height:100% ;
        color:#fff;
    `;
}

window.onload = function(){
    changeBgColor(); // je change le fond du body au chargement

    navElement.innerHTML = `<a href="index.html">Accueil</a>`; // je mets un lien dans mon menu

    // je liste mes perso:
    const personnageList = ['Twilight Sparkle', 'Pinkie Pie', 'Applejack', 'Rainbow Dash', 'Rarity', 'Fluttershy'];
    
    // je parcours mon tableau et l'injecte 1 par 1
    // j'aurai pu aussi utiser la balise <ol>
    // j'aurai pu aussi utiliser la fonction native createElement
    // mais la solution suivante est plus courte à écrire
    for(i = 0; i<personnageList.length; i++){
        outputElement.innerHTML += `<p>${i+1}. ${personnageList[i]}<p>`;
    }
}