// // Seleciona todos os itens <li> na lista
// let listItems = document.querySelectorAll("li");
// console.log(listItems);

// // Itera pelos itens da lista usando um ciclo for
// for (let i = 0; i < listItems.length; i++) {
//     let item = listItems[i]; // Armazena o item atual em uma variável
//     console.log(item); // Imprime o item atual no console
    
//     // Verifica se o item possui a classe "highlight"
//     if (item.classList.contains("highlight")) {
//         // Se a classe "highlight" está presente, remove-a
//         item.classList.remove("highlight");
//     } else {
//         // Se a classe "highlight" não está presente, adiciona-a
//         item.classList.add("highlight");
//     }
// }

let lis = document.querySelectorAll('li');

 for(item of lis){
    // Verifica se o item possui a classe "highlight"
    if (item.classList.contains("highlight")) {
    // Se a classe "highlight" está presente, remove-a
    item.classList.remove("highlight");
    } else {
    // Se a classe "highlight" não está presente, adiciona-a
    item.classList.add("highlight");
    }
 }