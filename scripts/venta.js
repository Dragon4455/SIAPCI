let cliente = {
    nombre: "Neomar",
    direccion: "San Esteban",
    tlf: "12345",
    rif: "31.325.616",
};
let producto ={
        nombre: "Pega",
        cantidad:1,
        codigo: "12345",
        precio: 20,
}
function añadirProducto(nombre, cantidad,codigo,precio){
    productos.push({
        nombre: this.nombre,
        cantidad :this.cantidad,
        codigo: this.codigo,
        precio:this.precio,
    })
}

let nuevoCliente = []
let productos = [];


let $inputNomCli = document.querySelector("#nombreCliente"),
    $inputRif = document.querySelector("#rifCliente"),
    $inputDir = document.querySelector("#dirCliente"),
    $inputTel = document.querySelector("#telCliente"),
    $btnCliente = document.querySelector("#btnCliente");


$btnCliente.addEventListener("click", (e)=>{
    e.preventDefault();
    if($inputNomCli.value === cliente.nombre){
        $inputRif.value = cliente.rif;
        $inputDir.value = cliente.direccion;
        $inputTel.value = cliente.tlf;
        
    }
});

let $inputNomArt = document.querySelector("#nomArt"),
    $inputCod = document.querySelector("#codArt"),
    $inputCan = document.querySelector("#canArt"),
    $inputPrec = document.querySelector("#preArt"),
    $btnArt = document.querySelector("#btnArt");

    $btnArt.addEventListener("click", (e)=>{
    e.preventDefault();
    if($inputNomArt.value === producto.nombre){
         $inputCod.value = producto.codigo;
         $inputCan.value = producto.cantidad;
         $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);
        
    }
        
    }
);
$inputCan.addEventListener("submit", (e)=>{
    $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);
})
