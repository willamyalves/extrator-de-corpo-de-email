document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email-input');
    const extractButton = document.getElementById('extract-button');
    const resultContainer = document.getElementById('result-container');
    const resultOutput = document.getElementById('result-output');
    const errorBox = document.getElementById('error-box');

    const extractUsername = () => {
        const email = emailInput.value.trim();

        // Esconde as caixas de resultado e erro antes de processar
        resultContainer.classList.add('hidden');
        errorBox.classList.add('hidden');

        if (email === '') {
            errorBox.textContent = 'Por favor, insira um endereço de e-mail.';
            errorBox.classList.remove('hidden');
            return;
        }

        const atIndex = email.indexOf('@');

        if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
            // Se não houver '@', se for o primeiro ou o último caractere
            errorBox.textContent = 'Formato de e-mail inválido. Verifique o e-mail digitado.';
            errorBox.classList.remove('hidden');
        } else {
            // Extrai a parte antes do '@'
            const username = email.substring(0, atIndex);
            resultOutput.value = username;
            resultContainer.classList.remove('hidden');
            resultOutput.focus();
            resultOutput.select();
        }
    };

    // Adiciona o evento de clique ao botão
    extractButton.addEventListener('click', extractUsername);

    // Opcional: permite que o usuário pressione Enter no campo de input
    emailInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            extractUsername();
        }
    });
});