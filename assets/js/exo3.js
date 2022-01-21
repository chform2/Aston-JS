// définitions
let outputElement = document.querySelector("section.content");

/**
 * Retourne si c'est un fizz, un buzz ou les 2
 * @param {number} n 
 */
function typeFB(n){
    if (n % 15 == 0){
        return `FizzBuzz<br>`;
    }else if (n % 3 == 0){
        return `Fizz<br>`;
    }else if (n % 5 == 0){
        return `Buzz`;
    }else{
        return `----`;
    }
}

/**
 * boucle qui appelle la fonction typeFB
 */
function fizzBuzz(){
    for (var i = 1; i <= 100; i++) {
        outputElement.innerHTML += `<p>${i}: ${typeFB(i)}</p>`;
    }
}

window.onload = function(){
    if(document.querySelector("section.exo3")){
        fizzBuzz();
    }
}