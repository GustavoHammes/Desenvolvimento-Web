function exer6() {
  // Obtém o valor do campo de entrada (texto digitado pelo usuário)
  const valorEntrada = document.querySelector("#entrada").value;

  // Cria um elemento <p>
  const elementoP = document.createElement("p");

  // Define o texto do elemento <p> com o valor do campo de entrada
  elementoP.innerText = valorEntrada;

  // Define o atributo 'title' com o valor "Nome fornecido"
  elementoP.setAttribute("title", "Nome fornecido");

  // Obtém o elemento <div> com id=saida
  const divSaida = document.querySelector("#saida");

  // Adiciona o elemento <p> como filho da <div>
  divSaida.appendChild(elementoP);
}
