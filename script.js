function comprar(nombre, precio) {

    let numero = "503XXXXXXXX"; // 🔴 CAMBIA ESTO POR TU NUMERO REAL

    let mensaje = `Hola, quiero comprar: ${nombre} - $${precio}`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
