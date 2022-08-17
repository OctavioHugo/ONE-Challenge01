
const encryptButton = document.querySelector('.encrypt');
encryptButton.addEventListener('click', encrypt);

const decryptButton = document.querySelector('.decrypt');
decryptButton.addEventListener('click', decrypt);

const copyButton = document.querySelector('.copy');
copyButton.addEventListener('click', copy);

const inputTextArea = document.querySelector('.input-text');
inputTextArea.addEventListener('focus', clear);


function encrypt(){
    const textArea = document.querySelector('.input-text');
    var text = textArea.value;
    if (isValid(text)){
        text = text.replace(/e/g, 'enter')
          .replace(/i/g, 'imes')
          .replace(/a/g, 'ai')
          .replace(/o/g, 'ober')
          .replace(/u/g, 'ufat');
        show(text);
    } 
};

function decrypt(){
    const textArea = document.querySelector('.input-text');
    var text = textArea.value;
    if (isValid(text)){
        text = text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
        show(text);
    }    
};

function show(text){
    const textOutput = document.querySelector('.output-text-textarea');
    textOutput.value = text;
    const boxImg = document.querySelector('.output-img');
    const boxMessage = document.querySelector('.output-p');
    const boxOutputText = document.querySelector('.output-text');
    const boxOutputButton = document.querySelector('.output-button');
    if(screen.width >= 1024){
        boxImg.style.display = 'none';
        }
    boxMessage.style.display = 'none';
    boxOutputText.style.display = 'flex';
    boxOutputButton.style.display = 'flex';
};

function notShow(){
    const boxImg = document.querySelector('.output-img');
    const boxMessage = document.querySelector('.output-p');
    const boxOutputText = document.querySelector('.output-text');
    const boxOutputButton = document.querySelector('.output-button');
    if(screen.width >= 1024){
    boxImg.style.display = 'block';
    }
    boxMessage.style.display = 'block';
    boxOutputText.style.display = 'none';
    boxOutputButton.style.display = 'none'; 
}

function isValid(text) {
    var isValid = true;
    if (/[A-Z]/.test(text)){
        isValid = false;
    }

    if (/[áéíóú]/i.test(text)) {
        isValid = false;
    }

    if (/[0-9]/.test(text)) {
        isValid = false;   
    }
    if(!isValid){
        alert("Caracter invalido ingresado, solo son permitidas letras minusculas sin acento");
    }
    if(text.length == 0){
      isValid = false;  
    }
 
    return isValid;

};

function clear(){
    const inputText = document.querySelector('.input-text');
    inputText.value = '';
    notShow();
}

function copy(){
    const textOutput = document.querySelector('.output-text-textarea'); 
    navigator.clipboard.writeText(textOutput.value);
}


