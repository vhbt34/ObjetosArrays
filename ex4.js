function obterDescricao(livro) {
  return `${livro.titulo}, autor: ${livro.autor}, ${livro.numeroDePaginas} páginas`;
}

const livro1 = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  numeroDePaginas: 256
};

const livro2 = {
  titulo: "1984",
  autor: "George Orwell",
  numeroDePaginas: 328
};

// Testes da função
console.log(obterDescricao(livro1));
console.log(obterDescricao(livro2));
