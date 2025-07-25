// Modal logic
        const btnUsuario = document.getElementById('btnUsuario');
        const btnRespaldo = document.getElementById('btnRespaldo');
        const modalUsuario = document.getElementById('modalUsuario');
        const modalRespaldo = document.getElementById('modalRespaldo');
        const closeUsuario = document.getElementById('closeUsuario');
        const closeRespaldo = document.getElementById('closeRespaldo');

        btnUsuario.onclick = () => modalUsuario.style.display = 'flex';
        btnRespaldo.onclick = () => modalRespaldo.style.display = 'flex';
        closeUsuario.onclick = () => modalUsuario.style.display = 'none';
        closeRespaldo.onclick = () => modalRespaldo.style.display = 'none';

        window.onclick = function(event) {
            if (event.target == modalUsuario) modalUsuario.style.display = "none";
            if (event.target == modalRespaldo) modalRespaldo.style.display = "none";
        }

        document.getElementById('confirmarUsuario').onclick = function() {
            const usuario = document.getElementById('nuevoUsuario').value;
            const contrasena = document.getElementById('nuevaContrasena').value;
            if (!usuario || !contrasena) {
                alert('Por favor, complete ambos campos.');
                return;
            }
            if (confirm('¿Está seguro de agregar este usuario?')) {
                // Aquí iría la lógica para guardar el usuario
                alert('Usuario agregado correctamente.');
                modalUsuario.style.display = 'none';
            }
        };

        document.getElementById('confirmarRespaldo').onclick = function() {
            const dias = document.getElementById('diasRespaldo').value;
            if (confirm(`¿Está seguro de establecer el respaldo cada ${dias} días?`)) {
                // Aquí iría la lógica para establecer el respaldo
                alert('Respaldo configurado correctamente.');
                modalRespaldo.style.display = 'none';
            }
        };