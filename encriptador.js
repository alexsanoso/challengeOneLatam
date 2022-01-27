//Funcion para el botón encriptar
$("#btn-encriptar").click(function () {
    convertir();
})

//Función para encriptar un texto
function convertir() {

    var textoEncriptar = $.trim(($("#texto-encriptar").val()));
    var dividir = textoEncriptar.split("");

    var encriptado = [];
    let regexp = /[a-z]$/;

    if (!regexp.exec(textoEncriptar)) {
        alert("¡ERROR!, Solo se aceptan letras minúsculas.")
    } else {



        for (var i = 0; i < dividir.length; i++) {
            //console.log(dividir[i]);

            if (dividir[i] != "a" && dividir[i] != "e" && dividir[i] != "i" && dividir[i] != "o" && dividir[i] != "u") {
                encriptado.push(dividir[i]);
            }
            else if (dividir[i] == "a") {
                encriptado.push("ai");
            }
            else if (dividir[i] == "e") {
                encriptado.push("enter");
            }
            else if (dividir[i] == "i") {
                encriptado.push("imes");
            }
            else if (dividir[i] == "o") {
                encriptado.push("ober");
            }
            else if (dividir[i] == "u") {
                encriptado.push("ufat");
            }
            else if (dividir[i] == "") {
                encriptado.push("");
            }
        }
        console.log(encriptado);

        var resultado = encriptado.join("");

        $("#texto-encriptado").val(resultado);
    }

}
