function exer5() {
  // Obtém o valor digitado no campo de entrada
  const nome = document.querySelector("#entrada").value;

  // Cria um elemento <p>
  const elementoP = document.createElement("p");

   // Define o texto do elemento <p> diretamente com o valor do campo de entrada
   elementoP.innerText = nome;

  // Obtém o elemento <div> com id=saida
  const divSaida = document.querySelector("#saida");

  // Adiciona o elemento <p> como filho da <div>
  divSaida.appendChild(elementoP);
}