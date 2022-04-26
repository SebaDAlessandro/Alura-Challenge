let btnDesencriptar = document.querySelector('#btn-desencriptar');

btnDesencriptar.addEventListener('click',(e)=>{

    e.preventDefault();

    document.getElementById("mostrar-imagenes-resultado").style.display = "none";

    let texto = document.querySelector('#mensaje')
    let codigo = (texto.value);
    let mensaje = []

    console.log(codigo);

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
    console.log(mensaje)
})