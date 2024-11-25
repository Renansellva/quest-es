// function torredehanai(inicialA , intermediarioB , finalc,movimento, disco){

// if(disco = 1){
  
// }
// }
// Função recursiva para resolver a Torre de Hanói
function torreDeHanoi(n, origem, destino, auxiliar) {
    // Caso base: se houver apenas um disco, mova-o diretamente
    if (n === 1) {
        console.log(`Mover disco 1 da haste ${origem} para a haste ${destino}`);
        return;
    }
    
    // Passo 1: mover n-1 discos da origem para a auxiliar, usando a haste destino como auxiliar
    torreDeHanoi(n - 1, origem, auxiliar, destino);
    
    // Passo 2: mover o disco n da origem para a destino
    console.log(`Mover disco ${n} da haste ${origem} para a haste ${destino}`);
    
    // Passo 3: mover os n-1 discos da auxiliar para a destino, usando a haste origem como auxiliar
    torreDeHanoi(n - 1, auxiliar, destino, origem);
}

// Função para iniciar a resolução da Torre de Hanói
function resolverTorreDeHanoi(numDiscos) {
    // Chamando a função recursiva passando as 3 hastes: A (origem), C (destino) e B (auxiliar)
    torreDeHanoi(numDiscos, 'A', 'C', 'B');
}

// Exemplo de execução: resolver o problema para 3 discos
resolverTorreDeHanoi(3);

