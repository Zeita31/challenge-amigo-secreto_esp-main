let nombres = [];
// función incluye nombres a una lista

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();

    if (amigo !== "") {
        nombres.push(amigo);
        input.value = "";
        mostrarLista();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    nombres.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres primero.");
        return;
    }

    let sorteado = nombres[Math.floor(Math.random() * nombres.length)];
    document.getElementById("resultado").textContent = "😃🎉 El amigo secreto sorteado es: " + sorteado + "😃🎉";

    // Vacia la lista y reinicia el proceso
    nombres = [];
    mostrarLista();
}

