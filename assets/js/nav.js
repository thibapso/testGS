function openPage() {
  const overlay = document.getElementById("overlay");
  overlay.classList.add("show");
  document.body.classList.add("hidden");

  // Redireciona para o arquivo "abrir.html"
  setTimeout(function () {
    window.location.href = "abrir.html";
  }, 600); // Aguarda o tempo da transição do overlay antes de redirecionar
}

function closePage() {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("show");
  document.body.classList.remove("hidden");
}
