
let index = 0;
const imagens = document.querySelectorAll('.imagens img');
const totalImagens = imagens.length;
let intervalo;

function mostrarImagem() {
    imagens.forEach((img, i) => {
        img.classList.remove('ativo');
    });
    imagens[index].classList.add('ativo');
}

function proximo() {
    index = (index + 1) % totalImagens;
    mostrarImagem();
}

function iniciarCarrossel() {
    intervalo = setInterval(proximo, 3000); // Troca de imagem a cada 3 segundos
}

function pausarCarrossel() {
    clearInterval(intervalo);
}

// Inicia o carrossel
iniciarCarrossel();

// Pausa o carrossel ao passar o mouse
document.getElementById('carrossel').addEventListener('mouseenter', pausarCarrossel);
document.getElementById('carrossel').addEventListener('mouseleave', iniciarCarrossel);



