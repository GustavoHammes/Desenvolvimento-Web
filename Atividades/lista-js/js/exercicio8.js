function exer8() {
  // Obtém o valor do campo de entrada (texto digitado pelo usuário)
  const nome = document.querySelector("#entrada").value;

 // Verifica se o campo de entrada possui algum caractere
 if (nome.length > 0) {
  // Cria um elemento <li>
  const elementoLI = document.createElement("li");

  // Define o texto do elemento <li> como o valor do campo de entrada
  elementoLI.innerText = nome;

  // Adiciona o atributo title com o mesmo valor do nome
  elementoLI.setAttribute("title", nome);

  // Obtém o elemento <ol> com id=saida
  const listaSaida = document.querySelector("#saida");

  // Adiciona o elemento <li> como filho do <ol>
  listaSaida.appendChild(elementoLI);
} else {
  // Caso o campo esteja vazio, opcionalmente, exibir um alerta ou mensagem
  alert("Por favor, insira um nome antes de adicionar.");
}
}