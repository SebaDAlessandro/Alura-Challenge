<<<<<<< HEAD
let btnDesencriptar = document.querySelector('#btn-desencriptar');

btnDesencriptar.addEventListener('click',(e)=>{

    e.preventDefault();

    document.getElementById("mostrar-imagenes-resultado").style.display = "none";
    let pantallaResultado = document.getElementById("mostrar-texto")
    pantallaResultado.classList.remove('borrar')
    pantallaResultado.classList.add('resultadosTexto')
    let elementP = document.createElement('p')

    let texto = document.querySelector('#mensaje')
    let codigo = (texto.value);
    let mensaje = []

    for (let i = 0; i < codigo.length; i++) {
             
        switch (codigo[i]) {
            case 'a':
                mensaje = mensaje + 'a';
                i=i+1;
                break;
            case 'e':
                mensaje = mensaje+ 'e';
                i=i+4;
                break;
            case 'i':
                mensaje = mensaje + 'i';
                i=i+3;
                break;
            case 'o':
                mensaje = mensaje + 'o';
                i=i+3;
                break;
            case 'u':
                mensaje = mensaje + 'u';
                i=i+3;
                break;

            default:
                mensaje = mensaje + codigo[i];
                break;
        }
    }
    elementP.textContent = mensaje;
    pantallaResultado.appendChild(elementP)
    
    function copy(m) {
        let inputElement = document.createElement('input');
        inputElement.setAttribute('value',m)
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy')
        inputElement.parentNode.removeChild(inputElement);
    }
    
    document.querySelector('#btn-copiar').onclick = function(){
        copy(mensaje);
        elementP.textContent = '';
    }

    let form = document.querySelector('#formulario')
    form.reset()
=======
let btnDesencriptar = document.querySelector('#btn-desencriptar');

btnDesencriptar.addEventListener('click',(e)=>{

    e.preventDefault();

    document.getElementById("mostrar-imagenes-resultado").style.display = "none";
    let pantallaResultado = document.getElementById("mostrar-texto")
    pantallaResultado.classList.remove('borrar')
    pantallaResultado.classList.add('resultadosTexto')
    let elementP = document.createElement('p')

    let texto = document.querySelector('#mensaje')
    let codigo = (texto.value);
    let mensaje = []

    for (let i = 0; i < codigo.length; i++) {
             
        switch (codigo[i]) {
            case 'a':
                mensaje = mensaje + 'a';
                i=i+1;
                break;
            case 'e':
                mensaje = mensaje+ 'e';
                i=i+4;
                break;
            case 'i':
                mensaje = mensaje + 'i';
                i=i+3;
                break;
            case 'o':
                mensaje = mensaje + 'o';
                i=i+3;
                break;
            case 'u':
                mensaje = mensaje + 'u';
                i=i+3;
                break;

            default:
                mensaje = mensaje + codigo[i];
                break;
        }
    }
    elementP.textContent = mensaje;
    pantallaResultado.appendChild(elementP)
    
    function copy(m) {
        let inputElement = document.createElement('input');
        inputElement.setAttribute('value',m)
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy')
        inputElement.parentNode.removeChild(inputElement);
    }
    
    document.querySelector('#btn-copiar').onclick = function(){
        copy(mensaje);
        elementP.textContent = '';
    }

    let form = document.querySelector('#formulario')
    form.reset()
>>>>>>> 1a5a20e (programa funcional)
})