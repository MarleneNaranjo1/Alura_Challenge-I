document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
    updateResult(encryptedText);
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
    updateResult(decryptedText);
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles!');
});

function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
    
}

function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}

function updateResult(text) {
    const resultDiv = document.querySelector('.result');
    const outputTextarea = document.getElementById('outputText');
    if (text) {
        resultDiv.style.display = 'none';
        outputTextarea.style.display = 'block';
    } else {
        resultDiv.style.display = 'block';
        outputTextarea.style.display = 'none';
    }
}

function updateResult(text) {
    const resultDiv = document.querySelector('.result');
    const outputTextarea = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

    if (text) {
        resultDiv.style.display = 'none';
        outputTextarea.style.display = 'block';
        copyButton.style.display = 'block'; // Mostrar el botón de copiar
    } else {
        resultDiv.style.display = 'block';
        outputTextarea.style.display = 'none';
        copyButton.style.display = 'none'; // Ocultar el botón de copiar
    }
}
