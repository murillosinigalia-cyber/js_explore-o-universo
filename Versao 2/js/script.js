// Selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");
 
/* Percorrer todos os cards selecionados e para cada um (separadamente)
pegar os botões (botão curiosidade e o botão favoritos) e o paragrafo curiosidade */
cards.forEach(function(card){
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');
 
    botaoCuriosidade.addEventListener("click", function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidades";
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false");
            botaoCuriosidade.textContent = "Ver curiosidades";
        }
    }); // fechamento do código do botaoCuriosidade
 
    botaoFavorito.addEventListener("click", function(){
        // Aplicar/Remover a classe 'favoritado'
        // Classe foi aplicada? true
        // Classe foi removida? false
        let favoritado = card.classList.toggle('favoritado');
 
        // Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);
 
        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if(favoritado){
            botaoFavorito.textContent = "★ Favoritado";
        } else {
            botaoFavorito.textContent = "☆ Favorito";
        }
    }); // fechamento do botao favorito
}); // fechamento do forEach
 
 
/* V2: programação para o recurso de filtragem de destinos */
// Procurar e selecionar os botões de filtro
const botoesFiltro = document.querySelectorAll("[data-filtro]");
 
// Percorrer/acessar cada botão dentro do botoesFiltro
botoesFiltro.forEach(function(botaoFiltro){
   
    // Quando acontecer o clique no botão...
    botaoFiltro.addEventListener("click", function(){
        // ... acessamos e guardamos o filtro escolhido
        const filtro = botaoFiltro.dataset.filtro;
 
        // Percorrendo cada card...
        cards.forEach(function(card){
            // ... e guardando a categoria de cada um
            const categoria = card.dataset.categoria;
 
            // Se o valor de filtro for "todos" OU se a categoria for igual ao filtro
            if(filtro === "todos" || categoria === filtro){
                // Então mostramos o card
                card.hidden = false;
            } else {
                // Senão, escondemos o card
                card.hidden = true;
            }
 
        }); // fechamento do forEach dos cards
 
        // Para cada botão de filtro...
        botoesFiltro.forEach(function(botaoFiltro){
            // Verificamos se o botao atual que foi clicado é o mesmo do filtro
            if(botaoFiltro.dataset.filtro === filtro){
                // Se for, adicionamos a classe nele
                botaoFiltro.classList.add("filtro-ativo");
 
                // E mudamos o estado para pressionado/ativado (true)
                botaoFiltro.setAttribute("aria-pressed", "true");
            } else {
                // Senão, retiramos a classe dele
                botaoFiltro.classList.remove("filtro-ativo");
 
                // E mudamos o estado para não-pressionado/desativado (false)
                botaoFiltro.setAttribute("aria-pressed", "false");
            }
        }); // fechamento forEach botoesFiltro        
    }); // fechamento event listener
}); // fechamento forEach e dos botões