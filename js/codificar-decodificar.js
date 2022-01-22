var texto_codificado = document.querySelector('#decodificar');

function codificar() {
    let texto_input = document.querySelector('#codificar').value;
    let frase_codificada = []
    let texto_code = texto_input.toLowerCase()

    if (texto_code.replace(/\s+/g, '') == '') {
        mensagemError(true)

    } else {
        for (var x = 0; x < texto_code.length; x++) {
            var code = texto_code[x]

            if (texto_code[x] == "a") {
                code = texto_code[x].replace('a', 'ai')
            };

            if (texto_code[x] == "e") {
                code = texto_code[x].replace('e', 'enter')
            };

            if (texto_code[x] == "i") {
                code = texto_code[x].replace('i', 'imes')
            };

            if (texto_code[x] == "o") {
                code = texto_code[x].replace('o', 'ober')
            };

            if (texto_code[x] == "u") {
                code = texto_code[x].replace('u', 'ufat')
            };

            frase_codificada.push(code)
        };

        texto_codificado.value = frase_codificada.join('').replace(/^\s+|\s+$/g, '')

        btn_copia.classList.remove('btn-success')
        btn_copia.classList.add('btn-primary')

        mensagemError()
    };

};

function decodificar() {
    let texto = document.querySelector('#codificar').value;
    let achar = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let substituir = ['a', 'e', 'i', 'o', 'u'];

    if (!texto == '') {
        for (let x = 0; x < achar.length; x++) {
            if (texto.includes(achar[x])) {
                texto = texto.replaceAll(achar[x], substituir[x]);
            };
        };

        texto_codificado.value = texto;
        btn_copia.classList.remove('btn-success')
        btn_copia.classList.add('btn-primary')
        mensagemError()
    } else {
        mensagemError(true)
    };

};