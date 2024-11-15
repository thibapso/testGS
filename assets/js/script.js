// Seleciona todos os headers
const headers = document.querySelectorAll('.header');

headers.forEach(header => {
    header.addEventListener('click', function() {
        const icon = this.querySelector('.icon');
        icon.classList.toggle('rotated'); // Alterna a classe 'rotated'
        
        // Mostra ou esconde o conteúdo
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
