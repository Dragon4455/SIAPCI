const $btnAnular = document.querySelector("#del");
const $btnEditar = document.querySelector("#edit");
const $btnPrint = document.querySelector("#print");
const billContainer = document.querySelector(".bill__container");

 const clienteActual = localStorage.getItem("cliente");
 const productos = localStorage.getItem("productos");
 const facturas = localStorage.getItem("BDFactura");

 const cliente = JSON.parse(clienteActual);
 const cart = JSON.parse(productos);
 const bdfacturas = JSON.parse(facturas);


 console.log(cliente);
console.log(bdfacturas)
$btnAnular.addEventListener("click", (e)=>{
    bdfacturas.forEach((element, idx) => {
        console.log(element);
        if(element.nroFactura === cliente.nroFactura){
            
            bdfacturas.splice(idx, 1);
            
            console.log(bdfacturas)
            
            $btnEditar.disabled = true;
            $btnPrint.disabled = true;
            $btnAnular.disabled = true;
            billContainer.style.opacity = "0.6";
            localStorage.setItem('BDFactura', JSON.stringify(bdfacturas))
        }
    });

    // BDFactura.splice(idx, 1);
    // localStorage.setItem('BDPorCobrar', JSON.stringify(BDPorCobrar));
})
