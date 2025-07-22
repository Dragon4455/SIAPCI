 let JsonProductos = localStorage.getItem("BDProducto");
        let BDProducto = JSON.parse(JsonProductos);
        let JsonPorCobrar = localStorage.getItem("BDPorCobrar");
        let BDPorCobrar = JSON.parse(JsonPorCobrar);
        let JsonFacturas = localStorage.getItem("BDFactura");
        let BDFacturas = JSON.parse(JsonFacturas) ;
        console.log(BDPorCobrar)

        document.addEventListener('DOMContentLoaded', function() {
            const lista = document.getElementById('clientes-lista');
            const modal = document.getElementById('modal-factura');
            const closeBtn = document.querySelector('.close-btn');
            const detalleArticulos = document.getElementById('detalle-articulos');
            const ivaSpan = document.getElementById('iva');
            const totalSpan = document.getElementById('total');

            // Crear contenedor para condición de pago si no existe
            let condicionPagoDiv = document.createElement('div');
            condicionPagoDiv.className = 'condicion-pago';
            condicionPagoDiv.id = 'condicion-pago';
            // Insertar antes de .totales
            const modalContent = document.querySelector('.modal-content');
            const totalesDiv = modalContent.querySelector('.totales');
            modalContent.insertBefore(condicionPagoDiv, totalesDiv);

            // Crear botón de pagar
            let pagarBtn = document.createElement('button');
            pagarBtn.textContent = 'Pagar';
            pagarBtn.className = 'pagar-btn';
            pagarBtn.disabled = true;
            modalContent.appendChild(pagarBtn);

            let facturaActual = null;
            let clienteDivActual = null;

            if (Array.isArray(BDPorCobrar)) {
                BDPorCobrar.forEach((factura, idx) => {
                    const div = document.createElement('div');
                    div.className = 'cliente-item';
                    div.textContent = factura.nombre || `Cliente ${idx+1}`;
                    div.addEventListener('click', () => mostrarModal(factura, div));
                    lista.appendChild(div);
                });
            }

            function mostrarModal(factura, clienteDiv) {
                detalleArticulos.innerHTML = '';

                // --- NUEVO: Estructura de factura tipo bill__container ---
                const billContainer = document.createElement('main');
                billContainer.className = 'bill__container';

                // Título
                const billTitle = document.createElement('h2');
                billTitle.className = 'bill__title';
                billTitle.textContent = 'Factura de venta';
                billContainer.appendChild(billTitle);

                // Datos del cliente
                const billOutputs = document.createElement('div');
                billOutputs.className = 'bill__outputs';
                // Usar el length de BDFacturas como número de factura
                const numeroFactura =String(BDFacturas.length + 1).padStart(3, '0');
                billOutputs.innerHTML = `
                    <div class="bill__output">
                        <p>Nombre: <span id="nombCli">${factura.nombre || ''}</span></p>
                    </div>
                    <div class="bill__output">
                        <p>Rif: <span id="rifCli">${factura.rif || ''}</span></p>
                    </div>
                    <div class="bill__output">
                        <p>Dirección: <span id="dirCli">${factura.direccion || ''}</span></p>
                    </div>
                    <div class="bill__output">
                        <p>Teléfono: <span id="telCli">${factura.tlf || ''}</span></p>
                    </div>
                    <div class="bill__output">
                        <p>Número de Factura: <span id="numFact">${numeroFactura}</span></p>
                    </div>
                
                    <div class="bill__output">
                        <p>Condición de pago: <span id="conPago">${factura.condicionPago || factura.condicion_pago || factura.condicion || ''}</span></p>
                    </div>
                `;
                billContainer.appendChild(billOutputs);

                // Productos
                const billProducts = document.createElement('div');
                billProducts.className = 'bill__products';

                // Leyenda
                const legend = document.createElement('div');
                legend.className = 'bill__output__legend';
                legend.innerHTML = `
                    <p>Cantidad:</p>
                    <p>Nombre de articulo:</p>
                    <p>Precio Unitario:</p>
                    <p>Precio:</p>
                `;
                billProducts.appendChild(legend);

                // Productos
                let subtotal = 0;
                if (Array.isArray(factura.articulos)) {
                    factura.articulos.forEach(art => {
                        const prod = document.createElement('div');
                        prod.className = 'bill__product';
                        const cantidad = art.cantidad || 1;
                        const precioUnit = art.precioUnitario || art.precio || 0;
                        const precioTotal = art.precioTotal || (precioUnit * cantidad);
                        prod.innerHTML = `
                            <p>${cantidad}</p>
                            <p>${art.nombre || ''}</p>
                            <p>${precioUnit.toFixed(2)} Bs</p>
                            <p>${precioTotal.toFixed(2)} Bs</p>
                        `;
                        billProducts.appendChild(prod);
                        subtotal += precioTotal;
                    });
                }

                // Totales
                const iva = subtotal * 0.16;
                const total = subtotal + iva;
                const billTotal = document.createElement('div');
                billTotal.className = 'bill__total';
                billTotal.innerHTML = `
                    <p>IVA (16%): <span id="iva">${iva.toFixed(2)} Bs</span></p>
                    <p>Total a Pagar: <span id="total">${total.toFixed(2)} Bs</span></p>
                `;
                billContainer.appendChild(billProducts);
                billContainer.appendChild(billTotal);

                detalleArticulos.appendChild(billContainer);

                facturaActual = factura;
                clienteDivActual = clienteDiv;
               

                // Mostrar condición de pago si existe
                const condicion = factura.condicionPago || factura.condicion_pago || factura.condicion || '';
                condicionPagoDiv.textContent = condicion ? `Condición de pago: ${condicion}` : '';

                // Limpiar checkboxes
                document.querySelectorAll('.metodo-pago input[type=checkbox]').forEach(cb => cb.checked = false);

                // Deshabilitar botón pagar
                pagarBtn.disabled = true;
                pagarBtn.classList.remove('enabled');

                modal.style.display = 'flex';
            }

            // Habilitar botón pagar si hay algún método de pago seleccionado
            document.querySelectorAll('.metodo-pago input[type=checkbox]').forEach(cb => {
                cb.addEventListener('change', function() {
                    const checked = Array.from(document.querySelectorAll('.metodo-pago input[type=checkbox]')).some(c => c.checked);
                    pagarBtn.disabled = !checked;
                    if (checked) {
                        pagarBtn.classList.add('enabled');
                    } else {
                        pagarBtn.classList.remove('enabled');
                    }
                });
            });

            pagarBtn.addEventListener('click', function() {
                if (pagarBtn.disabled || !facturaActual || !clienteDivActual) return;
                // Eliminar del HTML
                clienteDivActual.remove();
                // Eliminar de BDPorCobrar
                if (Array.isArray(BDPorCobrar)) {
                    const idx = BDPorCobrar.indexOf(facturaActual);
                    if (idx !== -1) {
                        BDPorCobrar.splice(idx, 1);
                        localStorage.setItem('BDPorCobrar', JSON.stringify(BDPorCobrar));
                    }
                }
                modal.style.display = 'none';
            });

            closeBtn.onclick = () => { modal.style.display = 'none'; };
            window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
        });