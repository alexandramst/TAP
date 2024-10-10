// Seleciona a div com o id "container"
let container = document.getElementById("container");

// Loop para criar 100 botões
for (let i = 1; i <= 100; i++) {
    // Cria um botão
    let button = document.createElement("button");
    
    button.innerText = 'Button nº'+i;

    // Adiciona o botão dentro da div "container"
    container.appendChild(button);
}