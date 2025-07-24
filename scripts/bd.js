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
    nroFactura: "001",
    direccion: "San Esteban",
    tlf: "12345",
    rif: "31325616",
    fecha: "23/7/2025",
    vencimiento: "08/8/2025",
    condicion: "15-dias",
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
    montoTotal: 12,
    estado: "Pendiente"
}]


let BDProducto = [{
    nombre: "Pega",
    disponible: 10,
    codigo: "002",
    precio: 20,
    costo: 10,
    precioTotal: this.precio,
    ultimaActualizacion: "23/7/2025",
},
{
    nombre: "Hoja",
    disponible: 100,
    codigo: "001",
    precio: 3,
    costo: 1.5,
    precioTotal: this.precio,
    ultimaActualizacion: "23/7/2025",
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
    montoTotal: "12bs",
    fecha: "23/7/2025",

}];


localStorage.setItem("BDCliente", JSON.stringify(BDCliente));
localStorage.setItem("BDPorCobrar", JSON.stringify(BDPorCobrar));
localStorage.setItem("BDProducto", JSON.stringify(BDProducto));
localStorage.setItem("BDFactura", JSON.stringify(BDFactura));



