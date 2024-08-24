function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3;  // Desplazamiento fijo
    document.getElementById('outputText').value = caesarCipher(inputText, shift);
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = -3;  // Desplazamiento fijo
    document.getElementById('outputText').value = caesarCipher(inputText, shift);
}

function caesarCipher(text, shift) {
    if (!text) return '';

    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            const code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
            }
        }
        result += char;
    }
    return result;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();  
    document.execCommand('copy');  
    alert('Texto copiado al portapapeles');  
}
