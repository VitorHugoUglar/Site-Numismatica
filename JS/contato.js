// Função para validar o formulário
function validateForm(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se os campos estão preenchidos
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Validação de email simples
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }

    // Se tudo estiver correto, exibe uma mensagem de confirmação
    alert('Obrigado pelo seu contato, ' + nome + '! Sua mensagem foi enviada com sucesso.');
    
    // Aqui você pode adicionar o código para enviar o formulário para o servidor, se necessário

    // Limpa os campos após o envio
    document.querySelector('form').reset();
}

// Adiciona o evento de submissão ao formulário
document.querySelector('form').addEventListener('submit', validateForm);



