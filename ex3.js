const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  numeroDePaginas: 1216
};

for (let propriedade in livro) {
  console.log(`${propriedade}: ${livro[propriedade]}`);
}
