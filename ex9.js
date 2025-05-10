function exibirTabela(arrayBidimensional) {
  for (let i = 0; i < arrayBidimensional.length; i++) {
    for (let j = 0; j < arrayBidimensional[i].length; j++) {
      process.stdout.write(arrayBidimensional[i][j] + "\t");
    }
    process.stdout.write("\n"); // quebra de linha ao final de cada linha
  }
}

// Exemplo de teste (array do slide 15)
const nomes = [
  ["Fred", "Barney"],
  ["George", "Jane", "Elroy"],
  ["Homer", "Marge", "Bart"]
];

exibirTabela(nomes);
