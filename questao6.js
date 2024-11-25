function fatorial(n) {
    // Se o número for 0 ou 1, o fatorial é 1
    if (n === 0 || n === 1) {
      return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  // Exemplo de uso
  let numero = 5; // Pode-se substituir por outro número
  console.log("O fatorial de " + numero + " é: " + fatorial(numero));
  