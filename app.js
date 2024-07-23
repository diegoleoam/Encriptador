document.addEventListener("DOMContentLoaded", () => {
    
    const inputTexto = document.getElementById("inputTexto");
    const imgResultado = document.getElementById("imgResultado");
    const btnEncriptar = document.getElementById("btnEncriptar");
    const btnDesencriptar = document.getElementById("btnDesencriptar");
    const btnCopiarTexto = document.querySelector(".botonCopiarEstilo");


    // Reglas de encriptación
    
    const encriptarTexto = (texto) => {
        document.getElementById("parrafoResultado").style.display = "none";
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    };

    // Reglas de desencriptación
    
    const desencriptarTexto = (texto) => {
        document.getElementById("parrafoResultado").style.display = "none";
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    };

    // Función para actualizar la imagen con el texto encriptado/desencriptado
    
    const actualizarResultado = (texto) => {
        const textoResultado = document.getElementById("textoResultado");
        textoResultado.textContent = texto;
    };    

    // Evento click para encriptar
    
    btnEncriptar.addEventListener("click", () => {
        const texto = inputTexto.value;
        const textoEncriptado = encriptarTexto(texto);
        actualizarResultado(textoEncriptado);
    });

    // Evento click para desencriptar
    
    btnDesencriptar.addEventListener("click", () => {
        const texto = inputTexto.value;
        const textoDesencriptado = desencriptarTexto(texto);
        actualizarResultado(textoDesencriptado);
    });

    //Evento Copar Texto

    btnCopiarTexto.addEventListener("click", () => {
        const textoResultado = document.getElementById("textoResultado").textContent;
        navigator.clipboard.writeText(textoResultado)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch((error) => {
                console.error("Error al copiar el texto: ", error);
            });
    });    
})
