// Declara o array de cores
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Seleciona todos os elementos <span>
const spans = document.querySelectorAll('h1 span');

// Loop simples para iterar sobre os spans
for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = colors[i]; // Aplica a cor do array ao span
}


// //Outra forma de solucionar

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const spans = document.querySelectorAll('h1 span');
// console.log(spans);

// let counter = 0;

// for (let span of spans) {
//     span.style.color = colors[counter];
//     counter++;
// }