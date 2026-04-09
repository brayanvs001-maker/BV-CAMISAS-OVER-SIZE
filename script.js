let carrito = [];
let total = 0;

/* CARRITO */
function agregarCarrito(nombre, precio, tallaId){
    let talla = document.getElementById(tallaId).value;

    if(talla===""){ alert("Selecciona talla"); return; }

    carrito.push({nombre,precio,talla});
    total+=precio;

    document.getElementById("contador").innerText = carrito.length;
    document.getElementById("total").innerText = total;

    let lista = document.getElementById("lista");
    lista.innerHTML="";

    carrito.forEach(p=>{
        let li=document.createElement("li");
        li.innerText=`${p.nombre} - ${p.talla} - $${p.precio}`;
        lista.appendChild(li);
    });
}

/* MOSTRAR CARRITO */
function toggleCarrito(){
    document.getElementById("carrito").classList.toggle("oculto");
}

/* WHATSAPP */
function comprarTodo(){
    let numero="50371029678";

    let msg="Hola, quiero comprar:\n\n";
    carrito.forEach(p=>{
        msg+=`- ${p.nombre} Talla:${p.talla} $${p.precio}\n`;
    });
    msg+=`\nTotal: $${total}`;

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`);
}

/* ZOOM */
function abrirImagen(src){
    document.getElementById("modal").style.display="flex";
    document.getElementById("imgGrande").src=src;
}

function cerrarImagen(){
    document.getElementById("modal").style.display="none";
}

/* CARRUSEL */
let index=0;
setInterval(()=>{
    let imgs=document.querySelectorAll(".carousel-global img");
    imgs[index].classList.remove("active");
    index=(index+1)%imgs.length;
    imgs[index].classList.add("active");
},3000);
