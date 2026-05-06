// =========================
// arquivo: script.js
// =========================

const botao = document.getElementById("mostrarEmail");
const emailBox = document.getElementById("emailBox");

botao.addEventListener("click", () => {

  if(emailBox.style.display === "block"){
    emailBox.style.display = "none";
  } else {
    emailBox.style.display = "block";
  }

});