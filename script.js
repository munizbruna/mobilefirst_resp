// Seleciona o botão e o menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Adiciona o evento de clique no botão
menuToggle.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' do menu
    navMenu.classList.toggle('active');
});