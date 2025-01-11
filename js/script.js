// Script para manipular o envio do formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');

        // Limpar os campos após envio
        document.getElementById('form-contato').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Mostrar o MODAL

link-info.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}