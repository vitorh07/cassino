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
        const numero = Math.floor(Math.random() * 6) + 1;
        const imgElement = document.querySelector(`#${id} img`);
        imgElement.src = imagens[numero];
        imgElement.alt = `Imagem ${numero}`;
    });
}

// Chama a função para sortear e exibir os números
sortearNumeros();