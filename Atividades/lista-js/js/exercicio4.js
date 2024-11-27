function exer4() {
  // Obtém o valor digitado no campo de entrada
  const nome = document.querySelector("#entrada").value;

  // Cria um elemento <p>
  const elementoP = document.createElement("p");

  // Cria um nó de texto com o nome do usuário
  const texto = document.createTextNode(nome);

  // Adiciona o texto ao elemento <p>
  elementoP.appendChild(texto);

  // Obtém o elemento <div> com id=saida
  const divSaida = document.querySelector("#saida");

  // Adiciona o elemento <p> como filho da <div>
  divSaida.appendChild(elementoP);
}
