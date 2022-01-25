var btn_copia = document.querySelector('#btn_copia');

function copiaTexto() {
    let copia_texto = texto_codificado.value;

    if (!copia_texto == '') {
        navigator.clipboard.writeText(copia_texto)
        btnCopiaEfeito(true)
        mensagemError()
    } else {
        mensagemError(true)
    }
};

function mensagemError(error) {
    let msg = document.querySelector("#msg-error");

    if (error) {
        msg.classList.remove('d-none')
        msg.classList.add('d-block')
    } else {
        msg.classList.remove('d-block')
        msg.classList.add('d-none')
    }
}

function limparEntrada() {
    texto_entrada.value = "";
    texto_entrada.focus();

};

texto_entrada.addEventListener('keyup', function () {

    this.value = this.value.replace(/([\u0300-\u036f]|[^a-zA-Z\s])/g, '').toLowerCase();

});

function btnCopiaEfeito(efeito){
  if(efeito){
    btn_copia.classList.remove('btn-primary')
    btn_copia.classList.add('btn-success')
    
  }else{
    btn_copia.classList.remove('btn-success')
    btn_copia.classList.add('btn-primary')
  }
};
