// ## Exo 01 
// > Créez un bouton en JS avec une valeur "Je suis un bouton"
// > Au clique la valeur du bouton devient "j'ai été cliqué"
let myBody = document.querySelector('body');
let btn = document.createElement('button');
btn.textContent = "Je suis un bouton";
myBody.appendChild(btn);

btn.addEventListener("click", () =>{
    btn.textContent = "J'ai été cliqué";
});
// ## Exo 02
// > Créer un 2eme button
// > Au clique la valeur du button devient 
// "j'ai été cliqué x fois" le x est le nombre de clique effectué.

let btn2 = document.createElement('button');
btn2.textContent = "Je suis un bouton";
myBody.appendChild(btn2);
let x = 0;

btn2.addEventListener("click", () => {
    x += 1;
    btn2.textContent = `J'ai été cliqué ${x} fois`
});