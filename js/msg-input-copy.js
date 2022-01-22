var btn_copia = document.querySelector('#btn_copia');

function copiaTexto() {
    let copia_texto = document.querySelector('#decodificar').value;

    if (!copia_texto == '') {
        navigator.clipboard.writeText(copia_texto)
        btn_copia.classList.remove('btn-primary')
        btn_copia.classList.add('btn-success')
        mensagemError()
    } else {
        mensagemError(true)
    }
};

function mensagemError(error) {
    msg = document.querySelector("#msg-error");

    if (error) {
        msg.classList.remove('d-none')
        msg.classList.add('d-block')
    } else {
        msg.classList.remove('d-block')
        msg.classList.add('d-none')
    }
}

function limpar() {
    let campo_texto = document.querySelector("#codificar");
    campo_texto.value = "";
    campo_texto.focus();

};

document.querySelector('#codificar').addEventListener('keyup', function () {

    this.value = this.value.replace(/([\u0300-\u036f]|[^a-zA-Z\s])/g, '');

});
