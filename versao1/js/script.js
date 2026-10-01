// Selecionar todos os cards
let cards = document.querySelectorAll('.card-destino');

// Percorrer todos os cards selecionados e para cada um (separadamente) pegar os botões (botão curiosidade e o botão favoritos)
cards.forEach(function(card){
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');

    botaoCuriosidade.addEventListener('click', function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute('aria-expanded', 'true');
            botaoCuriosidade.textContent = "Ocultar curiosidade"
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute('aria-expanded', 'false');
            botaoCuriosidade.textContent = "Ver curiosidades";

        }
    }); // fechamento do codigo fo botaoCuriosidade

    botaoFavorito.addEventListener('click', function(){
        // Aplicar/Remover a classe 'favoritado'
        // Classe foi aplicada? true
        // Classe foi removida? false
        let favoritado = card.classList.toggle('favoritado');

        //Atualizar o estado do botao (aria-pressed)
        botaoFavorito.setAttribute('aria-pressed', favoritado);


        //atualizar o texto do botao (☆ favorito ou ★ favoritado)
        if(favoritado){
            botaoFavorito.textContent = "★ Favoritado";
        } else {
            botaoFavorito.textContent = "☆ Favorito";
        }
    });

}); // fechamento do foreach