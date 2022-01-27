//Funcion para el botón encriptar
$("#btn-desencriptar").click(function () {
    decodificar();
})

//Función que desencripta un texto encriptado
function decodificar() {

    var textoEncriptado = $.trim(($("#texto-encriptar").val()));

    var uno = textoEncriptado.replace(/ai/g, "a");

    var dos = uno.replace(/enter/g, "e");

    var tres = dos.replace(/imes/g, "i");

    var cuatro = tres.replace(/ober/g, "o");

    var resul = cuatro.replace(/ufat/g, "u");

    $("#texto-encriptado").val(resul);
}