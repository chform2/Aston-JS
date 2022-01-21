/**
 * Défintions
 */
const counterElement = document.querySelector(".counter");
const textElement = document.querySelector(".text");
const downElement = document.querySelector("button.down");
const upElement = document.querySelector("button.up");

/**
 * Ajout +1 au compteur
 */
function increment(){
    let currentNumber = parseInt(counterElement.innerHTML);
    counterElement.innerHTML = currentNumber + 1;
    textElement.innerHTML = typeFB(currentNumber + 1);
}

/**
 * Décrémente de 1 le compteur
 */
function decrement(){
    let currentNumber = parseInt(counterElement.innerHTML);
    counterElement.innerHTML = currentNumber - 1;
    textElement.innerHTML = typeFB(currentNumber - 1);

    if(currentNumber == 0){
        alert("😭 Du descends dans mon estime bro'.")
    }
    if(currentNumber < 0){
        alert("😭 Tu va toucher le fond.")
    }
}

downElement.addEventListener("click", function(){
    decrement();
});

upElement.addEventListener("click", function(){
    increment();
});

