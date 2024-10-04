// // Inicializa variáveis com as URLs das imagens
// let chicken = 'https://devsprouthosting.com/images/chicken.jpg';
// let egg = 'https://devsprouthosting.com/images/egg.jpg';

// // Seleciona a imagem pelo ID
// let myImage = document.getElementById('my-image');

// // Variável de controlo para verificar o estado atual (ovo ou galinha)
// let isEgg = true; // Começamos com o ovo (egg)

// // Função para alternar entre ovo e galinha
// function ovoOuGalinha() {
//     // Verifica se a imagem atual é o ovo
//     if (isEgg) {
//         // Se for ovo, muda para galinha
//         myImage.src = chicken;
//     } else {
//         // Se for galinha, muda para ovo
//         myImage.src = egg;
//     }
    
//     // Alterna o estado (ovo para galinha ou galinha para ovo)
//     isEgg = !isEgg;
// }

//Outra solução

//Seleciona o Elemento
let myEggOrChickenImg = document.querySelector('img');


function eggOrChicken(){
    if(myEggOrChickenImg.src == 'https://devsprouthosting.com/images/chicken.jpg'){
        myEggOrChickenImg.src = 'https://devsprouthosting.com/images/egg.jpg'; 
    } else {
    //Muda o atributo src do atributo seleccionado
    myEggOrChickenImg.src = 'https://devsprouthosting.com/images/chicken.jpg';
    }
}

