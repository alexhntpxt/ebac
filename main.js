const form = document.getElementById('form-numerico');
let formEValido = false;

function validaNumero(a, b) {
    const aComoNumero = Number(a);
    const bComoNumero = Number(b);
    return !isNaN(aComoNumero) && !isNaN(bComoNumero);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoNumericoA = document.getElementById('campo-a').value;
    const campoNumericoB = document.getElementById('campo-b').value;
    const mensagemSucesso = `Correto. O número B (${campoNumericoB}) é maior que o número A (${campoNumericoA}), seus núemros foram enviados.`;
    const mensagemErro = `Erro. O número B (${campoNumericoB}) não é maior que o número A (${campoNumericoA}), não será possível enviar.`;

    formEValido = validaNumero(campoNumericoA, campoNumericoB);
    if (formEValido) {
        const aComoNumero = Number(campoNumericoA);
        const bComoNumero = Number(campoNumericoB);
        const containerMensagem = document.querySelector('.message');

        if (bComoNumero > aComoNumero) {
            containerMensagem.innerHTML = mensagemSucesso;
            containerMensagem.classList.add('success');
            containerMensagem.classList.remove('error');
        } else {
            containerMensagem.innerHTML = mensagemErro;
            containerMensagem.classList.add('error');
            containerMensagem.classList.remove('success');
        }

        containerMensagem.style.display = 'block';
        document.getElementById('campo-a').value = '';
        document.getElementById('campo-b').value = '';
    } else {
        alert('Por favor, insira apenas números nos campos A e B.');
    }
});
