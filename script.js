function comprar(nombre, precio) {

    let numero = "50371029678"; // 🔴 CAMBIA ESTO POR TU NUMERO REAL

    let mensaje = `Hola, quiero comprar: ${nombre} - $${precio}`;

    let url = `https://wa.me/${71029678}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
