document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const categoriaLinks = document.querySelectorAll('.categoria-link');
    const eventoContents = document.querySelectorAll('.evento-content');
    const voltarBtn = document.querySelector('.voltar-btn');
    const eventCards = document.querySelectorAll('.event-card');
    
    // Função para mostrar conteúdo e destacar card
    function mostrarConteudo(categoria, card = null) {
        // Remove seleção de todos os cards
        eventCards.forEach(c => c.classList.remove('selecionado'));
        
        // Destaca o card selecionado, se fornecido
        if (card) {
            card.classList.add('selecionado');
        }
        
        // Esconde todos os conteúdos
        eventoContents.forEach(content => {
            content.style.display = 'none';
        });
        
        // Mostra o conteúdo correto
        const conteudo = document.getElementById(`${categoria}-content`);
        if (conteudo) {
            conteudo.style.display = 'block';
        }
        
        // Scroll para a seção de detalhes
        document.querySelector('.evento-detalhes-container').scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    // Evento para cards de evento
    eventCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Não faz nada se clicar em um botão
            if (e.target.classList.contains('button') || e.target.closest('.button')) {
                return;
            }
            
            const titulo = card.querySelector('h3').textContent;
            if (titulo.includes("Empreendendorismo")) {
                mostrarConteudo('empreendedorismo', card);
            } else {
                mostrarConteudo('negocios', card);
            }
        });
    });
    
    // Evento para botões "Ver detalhes"
    document.querySelectorAll('.button.orange').forEach(botao => {
        if (botao.textContent.includes("Ver detalhes")) {
            botao.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.event-card');
                const titulo = card.querySelector('h3').textContent;
                
                if (titulo.includes("Empreendendorismo")) {
                    mostrarConteudo('empreendedorismo', card);
                } else {
                    mostrarConteudo('negocios', card);
                }
            });
        }
    });
    
    // Evento para links de categoria
    categoriaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoria = this.getAttribute('data-categoria');
            // Remove seleção de cards quando clica em categoria
            eventCards.forEach(c => c.classList.remove('selecionado'));
            mostrarConteudo(categoria);
        });
    });
    
    // Evento para botão voltar
    if (voltarBtn) {
        voltarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove seleção de cards quando volta
            eventCards.forEach(c => c.classList.remove('selecionado'));
            mostrarConteudo('negocios');
        });
    }
    
    // Inicializa mostrando o conteúdo de negócios
    mostrarConteudo('negocios');
});










// Adicione ao seu script.js
document.querySelectorAll('.arrow-tag').forEach(tag => {
    tag.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.event-card');
        const titulo = card.querySelector('h3').textContent;
        
        if (titulo.includes("Empreendendorismo")) {
            mostrarConteudo('empreendedorismo', card);
        } else {
            mostrarConteudo('negocios', card);
        }
    });
});