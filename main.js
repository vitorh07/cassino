function atualizarSaldo(premio) {
    const saldoElement = document.getElementById('saldo');
    const apostaElement = document.getElementById('aposta');

    let saldoValue = parseFloat(saldoElement.textContent.replace('R$', '').replace(',', '.'));  // Obtém o saldo como número
    let apostaValue = parseInt(apostaElement.textContent);  // Obtém o valor da aposta

    // Se o prêmio for maior que 0, somamos ao saldo
    saldoValue = saldoValue - apostaValue + premio;

    // Se o saldo for negativo, reseta para 1000
    if (saldoValue < 0) {
        saldoValue = 1000;
        alert('Você não tem saldo suficiente para continuar jogando! Seu saldo foi resetado para 1000.');
    }

    // Atualiza o saldo no HTML com o novo valor
    saldoElement.textContent = `${saldoValue.toFixed(2).replace('.', ',')}`;
}

function verificarSaldo() {
    const saldoElement = document.getElementById('saldo');
    let saldoValue = parseFloat(saldoElement.textContent.replace('R$', '').replace(',', '.'));

    if (saldoValue < 0) {
        saldoElement.textContent = "R$ 1000,00";
        alert('Você não tem saldo suficiente para continuar jogando! Seu saldo foi resetado para R$ 1000.');
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
        imgElement.style.animation = 'spin 1s linear infinite'; // Adiciona animação para girar

        setTimeout(() => {
            const numero = Math.floor(Math.random() * 6) + 1;
            imgElement.src = imagens[numero];
            imgElement.alt = `Imagem ${numero}`;
            imgElement.style.animation = ''; // Remove animação após a mudança de imagem
        }, 500);
    });

    setTimeout(() => {
        verificarSaldo(); // Verifica se há saldo suficiente
        verificarPremio(); // Verifica o prêmio
    }, 1000); // Atraso para esperar a animação terminar
}

function aumentarAposta() {
    const apostaElement = document.getElementById('aposta');
    let apostaValue = parseInt(apostaElement.textContent);

    if (apostaValue === 1) apostaValue = 5;
    else if (apostaValue === 5) apostaValue = 10;
    else if (apostaValue === 10) apostaValue = 100;

    apostaElement.textContent = apostaValue;
}

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

function verificarPremio() {
    const prizeElement = document.getElementById("prize"); // Pega o elemento onde a mensagem será exibida
    const valoresImagens = {
        'ouro.png': 25,
        'xerife.png': 15,
        'bandido.png': 10,
        'revolver.png': 5,
        'dinamite.png': 2.50,
        'cacto.png': 1
    };

    const img1 = document.querySelector(`#sort1 img`).src.split('/').pop();
    const img2 = document.querySelector(`#sort2 img`).src.split('/').pop();
    const img3 = document.querySelector(`#sort3 img`).src.split('/').pop();
    const img4 = document.querySelector(`#sort4 img`).src.split('/').pop();
    const img5 = document.querySelector(`#sort5 img`).src.split('/').pop();
    const img6 = document.querySelector(`#sort6 img`).src.split('/').pop();
    const img7 = document.querySelector(`#sort7 img`).src.split('/').pop();
    const img8 = document.querySelector(`#sort8 img`).src.split('/').pop();
    const img9 = document.querySelector(`#sort9 img`).src.split('/').pop();

    let premio = 0; // Inicializa o prêmio como 0
    const apostaValue = parseInt(document.getElementById('aposta').textContent); // Pega o valor da aposta

    const Linha1 = [img1, img2, img3];
    const Linha2 = [img4, img5, img6];
    const Linha3 = [img7, img8, img9];
    const Diagonal1 = [img1, img5, img9];
    const Diagonal2 = [img3, img5, img7];

    // Função que verifica se todas as imagens na linha/diagonal são iguais
    function verificarLinhaOuDiagonal(linhaOuDiagonal) {
        return linhaOuDiagonal.every((img, _, arr) => img === arr[0]); // Verifica se todas as imagens são iguais
    }

    // Função que calcula o prêmio para uma linha/diagonal
    function calcularPremio(linhaOuDiagonal) {
        const valorImagem = valoresImagens[linhaOuDiagonal[0]]; // Pega o valor da imagem
        return apostaValue * valorImagem; // Multiplica pela aposta
    }

    // Verifica as linhas e diagonais e calcula o prêmio
    if (verificarLinhaOuDiagonal(Linha1)) {
        premio = calcularPremio(Linha1);
        mensagem = `🔥 Ganhou na Linha 1!`;
    }

    if (verificarLinhaOuDiagonal(Linha2)) {
        premio = calcularPremio(Linha2);
        mensagem = `🔥 Ganhou na Linha 2!`;
    }

    if (verificarLinhaOuDiagonal(Linha3)) {
        premio = calcularPremio(Linha3);
        mensagem = `🔥 Ganhou na Linha 3!`;
    }

    if (verificarLinhaOuDiagonal(Diagonal1)) {
        premio = calcularPremio(Diagonal1);
        mensagem = `💎 Ganhou na Diagonal 1!`;
    }

    if (verificarLinhaOuDiagonal(Diagonal2)) {
        premio = calcularPremio(Diagonal2);
        mensagem = `💎 Ganhou na Diagonal 2!`;
    }

    prizeElement.textContent = premio > 0 ? `${premio.toFixed(2).replace('.', ',')}` : "0,00";

    if (premio === 0) {
        prizeElement.textContent = "0,00"; 
    }

    // Chama a função para atualizar o saldo com o prêmio
    atualizarSaldo(premio); // Passa o prêmio para atualizar o saldo
}
