let btnEncriptar = document.querySelector('#btn-encriptar');

btnEncriptar.addEventListener('click',(e)=>{

    e.preventDefault();

    document.getElementById("mostrar-imagenes-resultado").style.display = "none";
    let pantallaResultado = document.getElementById("mostrar-texto")
    pantallaResultado.classList.remove('borrar')
    pantallaResultado.classList.add('resultadosTexto')
    let elementP = document.createElement('p')
    
    let texto = document.querySelector('#mensaje')
    let mensaje = (texto.value);
    let codificado = [];
    
    /*
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */

    for (let i = 0; i < mensaje.length; i++) {
             
        switch (mensaje[i]) {
            case 'a':
                codificado = codificado + 'ai';
                break;
            case 'e':
                codificado = codificado+ 'enter';
                break;
            case 'i':
                codificado = codificado + 'imes';
                break;
            case 'o':
                codificado = codificado + 'ober';
                break;
            case 'u':
                codificado = codificado + 'ufat';
                break;

            default:
                codificado = codificado + mensaje[i];
                break;
        }
    }

    elementP.textContent = codificado;
    pantallaResultado.appendChild(elementP)

    function copy(c) {
        let inputElement = document.createElement('input');
        inputElement.setAttribute('value',c)
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy')
        inputElement.parentNode.removeChild(inputElement);
    }
    
    document.querySelector('#btn-copiar').onclick = function(){
        copy(codificado);
        elementP.textContent = '';
    }

    let form = document.querySelector('#formulario')
    form.reset()
})

