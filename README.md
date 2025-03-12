# Projeto Cassino Velho Oeste

Bem-vindo ao meu projeto de cassino com temática de Velho Oeste! Este repositório contém informações sobre o jogo de cassino desenvolvido em HTML, CSS e JavaScript.

[**Acesse o site do cassino aqui!**](https://vitorh07.github.io/cassino/)

![Gif da página](./assets/cassino.gif)

## Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Responsividade](#responsividade)
- [Prêmios e Valores das Imagens](#prêmios-e-valores-das-imagens)
- [Contato](#contato)
- [Licença](#licença)

## Sobre

Este é um projeto de um jogo de cassino simples, desenvolvido em HTML, CSS e JavaScript. O objetivo do jogo é sortear números e atualizar o saldo do jogador com base nos resultados.

## Funcionalidades

- Sortear imagens aleatórias
- Atualizar o saldo do jogador com base nos resultados
- Ajustar a aposta do jogador
- Verificar se o jogador ganhou algum prêmio

## Tecnologias Utilizadas

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## Estrutura do Projeto

- `index.html`: Contém a estrutura HTML do projeto.
- `style.css`: Contém os estilos CSS para o projeto.
- `main.js`: Contém a lógica JavaScript para o projeto.

## Como Executar o Projeto

1. Clone o repositório para o seu computador:
    ```bash
    git clone https://github.com/vitorh07/cassino.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd cassino
    ```

3. Abra o arquivo `index.html` em seu navegador preferido.

## Responsividade

O projeto é responsivo e se adapta a diferentes tamanhos de tela, incluindo dispositivos móveis.

## Prêmios e Valores das Imagens

No jogo de cassino, os prêmios são calculados com base nas combinações de imagens que aparecem nas linhas e diagonais de uma grade 3x3. Cada imagem possui um valor específico que é multiplicado pelo valor da aposta para calcular o prêmio.

### Valores das Imagens

- **Ouro**: 25
- **Xerife**: 15
- **Bandido**: 10
- **Revólver**: 5
- **Dinamite**: 2.50
- **Cacto**: 1

### Combinações Vencedoras

Os prêmios são concedidos quando três imagens iguais aparecem em uma das seguintes combinações na grade 3x3:

- Linha 1: Imagens nas posições 1, 2 e 3
- Linha 2: Imagens nas posições 4, 5 e 6
- Linha 3: Imagens nas posições 7, 8 e 9
- Diagonal 1: Imagens nas posições 1, 5 e 9
- Diagonal 2: Imagens nas posições 3, 5 e 7

Se uma dessas combinações for formada, o valor da imagem é multiplicado pelo valor da aposta para calcular o prêmio.

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato:

- **Email:** [vitorfogaca0227@gmail.com](mailto:vitorfogaca0227@gmail.com)
- **GitHub:** [vitorh07](https://github.com/vitorh07)

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.