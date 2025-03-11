function atualizarSaldo() {
    const saldoElement = document.getElementById('saldo');
    const saldoValue = saldoElement.getAttribute('value');
    saldoElement.textContent = saldoValue;
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
        imgElement.style.animation = 'spin 1s linear infinite'; // Inicia a animação

        setTimeout(() => {
            const numero = Math.floor(Math.random() * 6) + 1;
            imgElement.src = imagens[numero];
            imgElement.alt = `Imagem ${numero}`;
            imgElement.style.animation = ''; // Para a animação
        }, 1000); // Duração da animação em milissegundos
    });

    // Atualiza o saldo após o sorteio
    const saldoElement = document.getElementById('saldo');
    let saldoValue = parseInt(saldoElement.getAttribute('value'));
    saldoValue -= 100; // Exemplo de decremento do saldo
    saldoElement.setAttribute('value', saldoValue);
    saldoElement.textContent = saldoValue;
}

// Adiciona um evento de clique ao botão para sortear os números
document.getElementById('sortearBtn').addEventListener('click', sortearNumeros);

// Atualiza o saldo ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarSaldo);