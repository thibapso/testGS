// Seleciona todos os headers
const headers = document.querySelectorAll(".header");

headers.forEach((header) => {
  header.addEventListener("click", function () {
    const icon = this.querySelector(".icon");
    icon.classList.toggle("rotated"); // Alterna a classe 'rotated'

    // Mostra ou esconde o conteúdo
    const content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Seleciona o botão
const backToTopButton = document.getElementById("backToTop");

// Exibe o botão quando o usuário rolar para baixo
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopButton.classList.add("show"); // Adiciona a classe para mostrar o botão
  } else {
    backToTopButton.classList.remove("show"); // Remove a classe para esconder o botão
  }
};

// Função para rolar para o topo ao clicar no botão
backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Animação suave
  });
};
