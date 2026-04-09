let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio, tallaId) {

    let select = document.getElementById(tallaId);

    if (!select) {
        alert("Error con la talla");
        return;
    }

    let talla = select.value;

    if (talla === "") {
        alert("Selecciona una talla");
        return;
    }

    carrito.push({nombre, precio, talla});
    total += precio;

    document.getElementById("total").innerText = total;
    document.getElementById("contador").innerText = carrito.length;

    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    carrito.forEach(p => {
        let item = document.createElement("li");
        item.innerText = `${p.nombre} - Talla ${p.talla} - $${p.precio}`;
        lista.appendChild(item);
    });
}

function comprarTodo() {

    let numero = "503XXXXXXXX"; // 🔴 TU NUMERO

    let mensaje = "Hola, quiero comprar:\n\n";

    carrito.forEach(p => {
        mensaje += `- ${p.nombre} | Talla: ${p.talla} | $${p.precio}\n`;
    });

    mensaje += `\nTotal: $${total}`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
