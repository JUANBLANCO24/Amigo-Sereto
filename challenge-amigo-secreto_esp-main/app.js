let NombresDeAmigos = [];

function agregarAmigo() {
    let elementoHTML = document.querySelector('#nombreInput'); // Asegúrate de que el selector sea el correcto
    let nombre = elementoHTML.value;

    if (nombre !== "") { // Verifica que el nombre no esté vacío
        NombresDeAmigos.push(nombre); // Agrega el nombre al array
        elementoHTML.value = ""; // Limpia la caja de texto después de agregar
        MostrarAmigos(); 
    } else {

        alert("Por favor, inserte un nombre.");
    }

}

function MostrarAmigos() {
    let lista = document.getElementById('listaAmigos'); // Asegúrate de que el ID sea el correcto
    lista.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < NombresDeAmigos.length; i++) {
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = NombresDeAmigos[i]; // Asignar el nombre al contenido del <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}


function sortearAmigo() {
    if (NombresDeAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear."); // Validar que haya amigos
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * NombresDeAmigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = NombresDeAmigos[indiceAleatorio];

    // Mostrar el resultado
    let resultadoElemento = document.getElementById('resultado'); // Asegúrate de que el ID sea el correcto
    resultadoElemento.innerHTML = "Amigo sorteado: " + amigoSorteado;
}
