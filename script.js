function criptografar(){
    let texto = document.getElementById('texto').value;

    const textoModificado = texto.replace(/[a\á\à\â\ã]/gi, '01').replace(/[e\é\è\ê]/gi, '05').replace(/[i\í\ì\î]/gi, '09').replace(/[o\ó\ò\ô\õ]/gi, '15').replace(/[u\ú\ù\û]/gi, '21');

    let textoResultado = textoModificado;

    document.querySelector('#msg').value = textoResultado;

};

function verificar(){

    let texto = document.getElementById('texto').value;

    var palavraChave = ['01', '05', '09', '15', '21'];

    var verificar = palavraChave.some(elementoArray => texto.includes(elementoArray));

    if (verificar == true){
        alert('realmente está criptografado!')
        descriptografar();

    } else {
        alert('A mensagem não está criptografada!!');
    }
}

function  descriptografar(){

    let texto = document.getElementById('texto').value;

    const textoModificado = texto.replace(/01/gi, 'a').replace(/05/gi, 'e').replace(/09/gi, 'i').replace(/15/gi, 'o').replace(/21/gi, 'u');

    let textoResultado = textoModificado;

    document.querySelector('#msg').value = textoResultado;
}
const textInput = document.getElementById('msg');
const copyButton = document.getElementById('copy');

copyButton.addEventListener('click', ()=> {
  textInput.select();
  document.execCommand('copy');
});