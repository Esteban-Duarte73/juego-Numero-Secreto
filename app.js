let numeroSecreto = 0;
let listaNumerosSoreteados = [];
let intentos = 0;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //cuando acierta
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");

    //Cuando no acierta    
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","Número secreto es menor");
        } else {
            asignarTextoElemento('p','Número secreto es mayor');
        }
        intentos++;
        limpiarCaja(); 
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSoreteados);
    //Vamos a informar si todos los numero fueron sorteados
    if(listaNumerosSoreteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya todos los números fueron sorteados');
        return reiniciarJuego();
    } else{
        //Vamos a hacer una conidcion si el numero generado ya esta en la lista
        if (listaNumerosSoreteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSoreteados.push(numeroGenerado);
            return numeroGenerado;
        }
        }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Coloca un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
    return;
}

function reiniciarJuego(){
    //limpia la caja
    limpiarCaja()
    //iundicar condiciones iniciales
    condicionesIniciales();
    //devolver a condicion inicial el boton "Nuevo juego"
    document.querySelector('#reiniciar').setAttribute("disabled", true);
    return;
}

condicionesIniciales();