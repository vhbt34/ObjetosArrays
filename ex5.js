function criaLivro(titulo, autor, numeroDePaginas) {
  return {
    titulo: titulo,
    autor: autor,
    numeroDePaginas: numeroDePaginas
  };
}

function obterDescricao(livro) {
  return `${livro.titulo}, autor: ${livro.autor}, ${livro.numeroDePaginas} páginas`;
}

const livroCriado1 = criaLivro("A Revolução dos Bichos", "George Orwell", 112);
const livroCriado2 = criaLivro("Capitães da Areia", "Jorge Amado", 256);

console.log(obterDescricao(livroCriado1));
console.log(obterDescricao(livroCriado2));
