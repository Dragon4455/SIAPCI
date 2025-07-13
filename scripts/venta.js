let BDCliente = [{
    nombre: "Neomar",
    direccion: "San Esteban",
    tlf: "12345",
    rif: "31325616",
},
{
    nombre: "Juan",
    direccion: "San Esteban",
    tlf: "12345",
    rif: "0123456",
}];
let BDProducto = [{
        nombre: "Pega",
        disponible:1,
        codigo: "12345",
        precio: 20,
}];


// let cliente = {
//     nombre: "Neomar",
//     direccion: "San Esteban",
//     tlf: "12345",
//     rif: "31.325.616",
// };
let producto ={
        nombre: "Pega",
        cantidad:1,
        codigo: "12345",
        precio: 20,
}
function añadirProducto(nombre, cantidad,codigo,precio){
   BDProducto.push({
        nombre: this.nombre,
        cantidad :this.cantidad,
        codigo: this.codigo,
        precio:this.precio,
    })
}

function buscarCliente(){
    
    let cliente = BDCliente.filter(item => $inputRif.value === item.rif);
    if(cliente.length){
        $inputNomCli.value = cliente[0].nombre;
        $inputDir.value = cliente[0].direccion;
        $inputTel.value = cliente[0].tlf;
        
    } else{
        alert("No encontrado")
    }
}

let $inputNomCli = document.querySelector("#nombreCliente"),
    $inputRif = document.querySelector("#rifCliente"),
    $inputDir = document.querySelector("#dirCliente"),
    $inputTel = document.querySelector("#telCliente"),
    $btnCliente = document.querySelector("#btnCliente");


$btnCliente.addEventListener("click", (e)=>{
    e.preventDefault();
    buscarCliente()
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
         $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);
        
    }
        
    }
);
$inputCan.addEventListener("submit", (e)=>{
    $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);
})
