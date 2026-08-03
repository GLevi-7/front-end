const upload = document.getElementById("upload");
const imagem = document.getElementById("imagem");

const likeBtn = document.getElementById("likeBtn");
const likes = document.getElementById("likes");

let contador = 0;
let imagemCarregada = false;

upload.addEventListener("change", (e) => {
    const arquivo = e.target.files[0];

    if (!arquivo) return;

    imagem.src = URL.createObjectURL(arquivo);
    imagem.style.display = "block";

    imagemCarregada = true;
    contador = 0;
    likes.textContent = contador;
});

likeBtn.addEventListener("click", () => {
    if (!imagemCarregada) {
        alert("Escolha uma imagem primeiro.");
        return;
    }

    contador++;
    likes.textContent = contador;
});             