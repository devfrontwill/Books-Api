

async function buscaEndereco (cep) {
    try {
    const consultaCep = await fetch( `https://viacep.com.br/ws/${cep}/json` );
    const consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
        throw Error('CEP não existente!');
    }

    let cidade = document.getElementById('cidade');
    let logradouro = document.getElementById('endereco');
    let estado = document.getElementById('estado');

    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro;
    estado.value = consultaCepConvertida.uf;

    console.log(consultaCepConvertida);
    
    return consultaCepConvertida;
    
    } catch (erro) {
        console.log(erro)
    }
    

}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));