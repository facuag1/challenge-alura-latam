// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigoSorteado = 0;

function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value;
    if (amigoNuevo == '') {
        alert('Debes ingresar un nombre que sea correcto');
    } else {
        listaAmigos.push(amigoNuevo);
        actualizarLista(listaAmigos);
        limpiarCaja()
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').placeholder = "Escribe un nombre";
}

function actualizarLista(amigos) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista de amigos esta vacía, por favor agregar amigos');
    } else {
        amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
        console.log(amigoSorteado);
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = `<li>El amigo secreto sorteado es: ${listaAmigos[amigoSorteado]}</li>`;  
    }
}