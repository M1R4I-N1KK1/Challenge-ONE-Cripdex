var texto_entrada = document.querySelector('#codificar');
var texto_codificado = document.querySelector('#decodificar');

function codificar() {
    let texto_code = texto_entrada.value.toLowerCase();

    let achar = ['e', 'i', 'a', 'o', 'u'];
    let substituir = ['enter', 'imes', 'ai', 'ober', 'ufat'];
  
    if (texto_code.replace(/\s+/g, '') == '') {
        mensagemError(true)

    } else {
        for (let x = 0; x < achar.length; x++) {
          
            texto_code = texto_code.replaceAll(achar[x], substituir[x]);
          
        };

        texto_codificado.value = texto_code;
        btnCopiaEfeito()
        mensagemError()
    };

};

function decodificar() {
    let texto = texto_entrada.value;
    let achar = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let substituir = ['a', 'e', 'i', 'o', 'u'];

    if (!texto == '') {
        for (let x = 0; x < achar.length; x++) {
            if (texto.includes(achar[x])) {
                texto = texto.replaceAll(achar[x], substituir[x]);
            };
        };

        texto_codificado.value = texto;
        btnCopiaEfeito()
        mensagemError()
    } else {
        mensagemError(true)
    };

};