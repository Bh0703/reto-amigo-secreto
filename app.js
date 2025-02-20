// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();

    if (amigo === ""){
        alert("No se puede agregar un amigo vacío");
        return;
    } else {
        nombreAmigos.push(amigo);
        let ultimoAmigo = nombreAmigos[nombreAmigos.length - 1];
        console.log("Último amigo agregado:", ultimoAmigo); // Muestra el último amigo en consola
        
        listaAmigos();
        limpiarCaja();
    }
}



function limpiarCaja() {
    document.getElementById('amigo').value = "";
    return;
}

function listaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = " ";
    
    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombreAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    //Validar que haya amigos en la lista antes de sortear
    if (nombreAmigos.length === 0) {
        alert("No hay más amigos para sortear");
        return; // Sale de la función si no hay amigos
    }

    //Seleccionar un índice aleatorio dentro del array
    let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);
    let amigoSorteado = nombreAmigos[indiceAleatorio]; 
    //Eliminar el amigo sorteado de la lista para que no se repita
    nombreAmigos.splice(indiceAleatorio, 1);

    //Mostrar el amigo sorteado en la lista de resultados
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML += `<li>${amigoSorteado}</li>`; // Agrega el amigo sorteado a la lista

    //Actualizar la lista de amigos para reflejar la eliminación
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en pantalla después de un sorteo
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Borra la lista antes de actualizar

    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombreAmigos[i];
        lista.appendChild(li);
    }
}

