// Função que recebe vários números como argumentos
function calcula(...numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  let media = numeros.length > 0 ? soma / numeros.length : 0;

  return {
    soma: soma,
    media: media
  };
}

// Teste da função
const resultado = calcula(4, 8, 20, 6);
console.log(resultado);
