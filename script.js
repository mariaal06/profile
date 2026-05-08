// Efeito de escrita automática
const titulo = document.getElementById('typing');
const texto = "Bem-vindo ao meu site pessoal! ✨";
let i = 0;

function escrever() {
    if (i < texto.length) {
        titulo.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 100);
    }
}

// Botão que muda a cor de fundo (Interatividade)
const btn = document.getElementById('theme-btn');
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'rgb(255, 230, 240)' 
        ? '#fff5f8' 
        : '#ffe6f0';
});

// Inicia a animação ao carregar a página
window.onload = escrever;
