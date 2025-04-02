$(document).ready(function() {
    // Seleciona o botão do menu hambúrguer e o menu mobile
    const navbarToggler = $('.navbar-toggler-custom');
    const navbarCollapseMobile = $('.navbar-collapse-mobile');
    const overlay = $('.overlay');

    // Adiciona um evento de clique ao botão do menu hambúrguer
    navbarToggler.on('click', function() {
        navbarCollapseMobile.toggleClass('show'); // Alterna a classe 'show' para exibir/ocultar o menu
        overlay.toggleClass('show'); // Mostra/oculta o overlay
    });

    // Adiciona um evento de clique ao overlay para fechar o menu
    overlay.on('click', function() {
        navbarCollapseMobile.removeClass('show'); // Remove a classe 'show' para ocultar o menu
        overlay.removeClass('show'); // Oculta o overlay
    });

    // Fecha o menu se um link for clicado (opcional)
    navbarCollapseMobile.find('.nav-link').on('click', function() {
        navbarCollapseMobile.removeClass('show');
        overlay.removeClass('show');
    });
});