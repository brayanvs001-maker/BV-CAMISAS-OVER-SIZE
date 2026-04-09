let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio, tallaId) {

    let talla = document.getElementById(tallaId).value;

    if (talla === "") {
        alert("Selecciona una talla");
        return;
    }

    carrito.push({nombre, precio, talla});
    total += precio;

    document.getElementById("total").innerText = total;
    document.getElementById("contador").innerText = carrito.length;

    let lista = document.getElementById("lista");
    let item = document.createElement("li");
    item.innerText = `${nombre} - Talla ${talla} - $${precio}`;
    lista.appendChild(item);
}

function comprarTodo() {

    let numero = "50371029678"; // 🔴 CAMBIA TU NUMERO

    let mensaje = "Hola, quiero comprar:\n\n";

    carrito.forEach(p => {
        mensaje += `- ${p.nombre} | Talla: ${p.talla} | $${p.precio}\n`;
    });

    mensaje += `\nTotal: $${total}`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
