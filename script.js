const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const btnConfirmar = document.getElementById('btnConfirmar');
const mensagemFeedback = document.getElementById('mensagemFeedback');

function exibirMensagem (texto, tipo){
    mensagemFeedback.textContent = texto;
    mensagemFeedback.className = 'mensagem' + tipo;
}

btnConfirmar.addEventListener('click', () => {
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if(!usuario || !senha){
        exibirMensagem('Preencha os campos de login e senha. ', 'erro');
        return;
    }

    exibirMensagem('Login confirmado com sucesso', 'sucesso');
});