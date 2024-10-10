//Para procurar o elemento
// let banner -  o banner foi o nome que escolhi. posso identificar de outra forma como por exempo: myBannerId ou outro nome qualquer.
// let banner = document.getElementById('banner');

// console.log(banner);

// Seleciona a imagem pelo ID
// let image = document.getElementById ('unicorn');

// Seleciona o elemento h1 pelo ID
// let heading = document.getElementById('mainheading');

// Verifica se os elementos foram selecionados corretamente
// console.log(image);
// console.log(heading);

//Os métodos getElementsByTagNamee getElementsByClassNameretornam um colecçãode elementos. Depois, faz-se da mesma forma que o Id.

// 1. Seleciona todos os elementos com a classe 'done' e atribui a variável 'doneTodos'
// let doneTodos = document.querySelectorAll('.done');

// 2. Seleciona a checkbox com o atributo 'type' igual a 'checkbox' e guarda na variável 'checkbox'
// let checkbox = document.querySelector("input[type='checkbox']"); //Coloca-se primeiro "" por fora e '' por dentro porque as "" são mais fortes.

// 3. Faz um console.log() de ambas as variáveis
// console.log('Done Todos:', doneTodos);
// console.log('Checkbox:', checkbox);


//Sobre Manipular Elementos Inner Text:
// let myText = document.getElementById('History');
// let mySpan = document.getElementById('my-welcome-name');
// let myName = null;

// if(myName){
//     mySpan.innerText = myName;
// }

//Exercicio Pickles
// // Seleciona o span pelo ID
// let mySpan = document.getElementById('my-span');
// // Define uma variável com o novo texto
// let myText = 'Yack';

// // Verifica se a variável myText tem um valor
// if (myText) {
//     // Altera o texto do span
//     mySpan.innerText = myText;
// }



// let login = false;
// let myName=null;
// let userPhoto= null;

// let mySpan = document.getElementById ('my-welcome-name');

// let myPhoto = document.getElementById('my-photo');

// myName = prompt('Qual é o teu nome? ');


// if(myName){
//     login ==  true;
//     userPhoto = '../imagens/smile.jpg';

//     mySpan.innerText = myName;
//     myPhoto.scr = userPhoto;

//     if(userPhoto){
//         myPhoto.scr = userPhoto;
//     }

// }

// selecionar o Olá do index-html
// let myContainer = document.querySelector('#container');
// myBold.style.color = '##132fba';


// let myH2s = document.querySelectorAll('h2');
// console.log(myH2s);
// for(let myH2 of myH2s){
//     myH2.style.color = 'violet';
// }



//myH2s.style.color = 'green';
//mesma lógica
// let daysOfWeek = ['segunda','terça','quarta'];

// for(let element of daysOfWeek){
//     consle.log(weekDay.toUpperCase());

// function dangerLevel(){
//     if(myBtn.classList.contains('btn-danger')){
//         myBtn.classList.remove('btn-danger'); //remove classe do elemento
//         myBtn.classList.add('btn-warning'); // adiciona classe ao elemento
//     }else{
//         myBtn.classList.remove('btn-warning');
//         myBtn.classList.add('btn-danger')
//     }
 
// }