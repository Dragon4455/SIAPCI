let codigoFactura = localStorage.getItem("facturaABuscar");

const facturas = localStorage.getItem("BDFactura");
const bdfacturas = JSON.parse(facturas);
console.log(bdfacturas[codigoFactura])

if(codigoFactura){
     let nombCli = document.querySelector("#nombCli"),
                    rifCli = document.querySelector("#rifCli"),
                    dirCli = document.querySelector("#dirCli"),
                    telCli = document.querySelector("#telCli"),
                    numFac = document.querySelector("#numFact"),
                    tipPago = document.querySelector("#tipPago"),
                    conPago = document.querySelector("#conPago")

                nombCli.textContent = bdfacturas[codigoFactura].nombre;
                rifCli.textContent = bdfacturas[codigoFactura].rif;
                dirCli.textContent =bdfacturas[codigoFactura].direccion;
               telCli.textContent = bdfacturas[codigoFactura].tlf;
               numFac.textContent = bdfacturas[codigoFactura].nroFactura;
               tipPago.textContent = bdfacturas[codigoFactura].metodo;
               conPago.textContent = bdfacturas[codigoFactura].condicion;

               let $cart = document.querySelector(".bill__products");
               cart = bdfacturas[codigoFactura].articulos;
                cart.forEach((item, index, )=>{
                
                let contenedor = document.createElement("div");
    
                contenedor.classList.add("bill__product");
                $cart.appendChild(contenedor)
                
                
                let itemCant = document.createElement("p");
                itemCant.textContent = item.cantidad;
                contenedor.appendChild(itemCant);
                
                let itemName = document.createElement("p");
                itemName.textContent = item.nombre;
                contenedor.appendChild(itemName);
               
                
                let itemUnitPrice = document.createElement("p");
                itemUnitPrice.textContent = item.precio + " Bs";
                contenedor.appendChild(itemUnitPrice);

                let itemPrice = document.createElement("p");
                itemPrice.textContent = item.precioTotal + " Bs";
                contenedor.appendChild(itemPrice);
                
                
              
            });
                let subtotal = document.querySelector("#subTotal");
                let iva = document.querySelector("#iva");
                let total = document.querySelector("#total");
                subtotal.textContent = cart.reduce((sum , actual) => sum + actual.precioTotal , 0);
                 iva.textContent = (subtotal.textContent * 0.16).toFixed(2);
                total.textContent = (+subtotal.textContent + +iva.textContent).toFixed(2);
                
        }
