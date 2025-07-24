let BDCliente = [{
    nombre: "Neomar",
    direccion: "San Esteban",
    tlf: "12345",
    rif: "31325616",
},
{
    nombre: "Elías",
    direccion: "Vistamar",
    tlf: "12345",
    rif: "31779388",
}];

let BDPorCobrar = [{
      nombre: "Neomar",
    direccion: "San Esteban",
    tlf: "12345",
    rif: "31325616",
    condicion: "contado",
    articulos: [],
    iva: "",
    montoTotal: "30bs",
}]


let BDProducto = [{
        nombre: "Pega",
        disponible: 10,
        codigo: "002",
        precio: 20,
       precioTotal: this.precio,
},
{
        nombre: "Hoja",
        disponible: 100,
        codigo: "001",
        precio: 3,
       precioTotal: this.precio,
}];
let BDFactura = [{
    nombre: "Neomar",
    direccion: "San Esteban",
    tlf: "12345",
    rif: "31325616",
    metodo: "Pago movil",
    condicion: "contado",
    nroFactura: "001",
    articulos: [{
        nombre: "Hoja",
        cantidad: 2,
        precio: 3,
        precioTotal: 6,

},
{
        nombre: "Hoja",
        cantidad: 2,
        precio: 3,
        precioTotal: 6,

}
],
    iva: "",
    montoTotal: "6bs",
    fecha: "23/7/2025",

}];


localStorage.setItem("BDCliente", JSON.stringify(BDCliente));  
localStorage.setItem("BDPorCobrar", JSON.stringify(BDPorCobrar));
localStorage.setItem("BDProducto", JSON.stringify(BDProducto));
localStorage.setItem("BDFactura", JSON.stringify(BDFactura));



