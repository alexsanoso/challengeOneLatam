//Función para copiar un texto
function copiarTexto(){

    var contenido = document.getElementById("texto-encriptado");

    $(contenido).select();
    document.execCommand("copy");
    console.log("COPIADO");
    $("#texto-encriptar").val("");
}
