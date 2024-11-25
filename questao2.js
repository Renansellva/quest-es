function hanoi(n, origem, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mova o disco 1 da torre ${origem} para a torre ${destino}`);
        return;
    }
    // Passo 1: Mover n-1 discos da torre de origem para a torre auxiliar
    hanoi(n - 1, origem, auxiliar, destino);
    
    // Passo 2: Mover o disco n da torre de origem para a torre destino
    console.log(`Mova o disco ${n} da torre ${origem} para a torre ${destino}`);
    
    // Passo 3: Mover os n-1 discos da torre auxiliar para a torre destino
    hanoi(n - 1, auxiliar, destino, origem);
}

// Resolver para 4 discos
const discos = 4;
hanoi(discos, 'A', 'C', 'B');
