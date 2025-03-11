function atualizarSaldo() {
    const saldoElement = document.getElementById('saldo');
    const apostaElement = document.getElementById('aposta');

    let saldoValue = parseInt(saldoElement.textContent);  // Pegando o valor do saldo correto
    let apostaValue = parseInt(apostaElement.textContent); // Pegando o valor da aposta correto

    saldoElement.textContent = saldoValue - apostaValue; // Atualiza o saldo corretamente
}

function verificarSaldo(){
    const saldoElement = document.getElementById('saldo');
    let saldoValue = parseInt(saldoElement.textContent);

    if(saldoValue < 0){
        saldoElement.textContent = 1000;
        alert('Você não tem saldo suficiente para continuar jogando! Seu saldo foi resetado para 1000.');
    }
}

function sortearNumeros() {
    const ids = ['sort1', 'sort2', 'sort3', 'sort4', 'sort5', 'sort6', 'sort7', 'sort8', 'sort9'];
    const imagens = {
        1: './assets/ouro.png',
        2: './assets/xerife.png',
        3: './assets/bandido.png',
        4: './assets/revolver.png',
        5: './assets/dinamite.png',
        6: './assets/cacto.png'
    };

    ids.forEach(id => {
        const imgElement = document.querySelector(`#${id} img`);
        imgElement.style.animation = 'spin 1s linear infinite';

        setTimeout(() => {
            const numero = Math.floor(Math.random() * 6) + 1;
            imgElement.src = imagens[numero];
            imgElement.alt = `Imagem ${numero}`;
            imgElement.style.animation = '';
        }, 500);
    });

    atualizarSaldo(); // Atualiza o saldo depois do sorteio
    verificarSaldo(); // Verifica saldo
}

// Função para aumentar a aposta corretamente
function aumentarAposta() {
    const apostaElement = document.getElementById('aposta');
    let apostaValue = parseInt(apostaElement.textContent);

    if (apostaValue === 1) apostaValue = 5;
    else if (apostaValue === 5) apostaValue = 10;
    else if (apostaValue === 10) apostaValue = 100;
    
    apostaElement.textContent = apostaValue;
}

// Função para diminuir a aposta corretamente
function diminuirAposta() {
    const apostaElement = document.getElementById('aposta');
    let apostaValue = parseInt(apostaElement.textContent);

    if (apostaValue === 100) apostaValue = 10;
    else if (apostaValue === 10) apostaValue = 5;
    else if (apostaValue === 5) apostaValue = 1;
    
    apostaElement.textContent = apostaValue;
}

document.getElementById('sortearBtn').addEventListener('click', sortearNumeros);
document.getElementById('aumentarBtn').addEventListener('click', aumentarAposta);
document.getElementById('diminuirBtn').addEventListener('click', diminuirAposta);