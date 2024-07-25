// Selecciona los elementos del DOM por ID
const inputMensaje = document.getElementById('mensaje');
const outputResultado = document.getElementById('resultado');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopiar = document.getElementById('btn-copiar');

// Función para encriptar el mensaje
function encriptar(texto) {
    const reemplazos = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.replace(/[eioua]/g, match => reemplazos[match]);
}

// Función para desencriptar el mensaje
function desencriptar(texto) {
    const reemplazos = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return texto.replace(/enter|imes|ai|ober|ufat/g, match => reemplazos[match]);
}

// Agrega eventos a los botones
btnEncriptar.addEventListener('click', () => {
    const mensaje = inputMensaje.value;
    const mensajeEncriptado = encriptar(mensaje);
    outputResultado.value = mensajeEncriptado;
});

btnDesencriptar.addEventListener('click', () => {
    const mensaje = inputMensaje.value;
    const mensajeDesencriptado = desencriptar(mensaje);
    outputResultado.value = mensajeDesencriptado;
});

btnCopiar.addEventListener('click', () => {
    outputResultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
