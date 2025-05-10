// Função para exibir os dados de cada objeto de forma organizada
function exibirObjetos(arrayObjetos) {
  for (let i = 0; i < arrayObjetos.length; i++) {
    const objeto = arrayObjetos[i];
    console.log(`Objeto ${i + 1}:`);
    for (let chave in objeto) {
      console.log(`  ${chave}: ${objeto[chave]}`);
    }
    console.log(); // linha em branco entre os objetos
  }
}

// Exemplo de array de objetos (adaptado do contexto do slide 16)
const pessoas = [
  { nome: "Fred", idade: 35, cidade: "Springfield" },
  { nome: "Barney", idade: 32, cidade: "Bedrock" },
  { nome: "Homer", idade: 39, cidade: "Springfield" }
];

exibirObjetos(pessoas);
