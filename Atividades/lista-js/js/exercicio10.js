function exer10() {
  // Obtém o valor digitado no campo de entrada
  const nome = document.querySelector("#entrada").value;

  // Verifica se o campo de entrada possui algum caractere
  if (nome.length > 0) {
    // Cria um elemento <li>
    const elementoLI = document.createElement("li");

    // Define o texto do elemento <li> como o valor do campo de entrada
    elementoLI.innerText = nome;

    // Adiciona o atributo title com o mesmo valor do nome
    elementoLI.setAttribute("title", nome);

    // Adiciona o atributo onclick chamando a função exibir
    elementoLI.setAttribute("onclick", `exibir('${nome}')`);


    // Obtém o elemento <ol> com id=saida
    const listaSaida = document.querySelector("#saida");

    // Adiciona o elemento <li> como filho do <ol>
    listaSaida.appendChild(elementoLI);

    // Limpa o campo de entrada
    document.querySelector("#entrada").value = "";

    // Exibe a quantidade de nomes
    exibirQuantidadeNomes();
  } else {
    // Caso o campo esteja vazio, opcionalmente, exibir um alerta ou mensagem
    alert("Por favor, insira um nome antes de adicionar.");
  }
}

// Função para exibir a quantidade de nomes
function exibirQuantidadeNomes() {
  // Obtém o número de elementos filhos do <ol> com id=saida
  const quantidadeNomes = document.querySelector("#saida").childElementCount;

  // Atualiza ou exibe a mensagem com a quantidade de nomes
  let contador = document.querySelector("#contador");
  if (!contador) {
    // Se o elemento #contador não existir, cria um novo
    contador = document.createElement("p");
    contador.id = "contador";
    document.body.appendChild(contador);
  }
  contador.innerText = `Total: ${quantidadeNomes}`;
}

// Função para exibir o alerta com o nome clicado
function exibir(nome) {
  alert(`Você clicou no nome: ${nome}`);
}