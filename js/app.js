document.addEventListener('DOMContentLoaded', () => {
    const enlacesNav = document.querySelectorAll('.nav-link');
    const enlacesSpa = document.querySelectorAll('[data-target]');
    const secciones = document.querySelectorAll('.seccion-spa');
    const botonesDetalles = document.querySelectorAll('[data-panel]');
    const formulario = document.querySelector('.formulario-contacto');

    enlacesSpa.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); // Evita recargar la página

            if (this.classList.contains('nav-link')) {
                enlacesNav.forEach(nav => nav.classList.remove('activo'));
                this.classList.add('activo');
            }

            const targetId = this.getAttribute('data-target');
            secciones.forEach(sec => sec.classList.remove('activa'));

            const seccionActiva = document.getElementById(targetId);
            if(seccionActiva) {
                seccionActiva.classList.add('activa');
            }
        });
    });

    botonesDetalles.forEach(boton => {
        boton.addEventListener('click', event => {
            const panelId = event.currentTarget.getAttribute('data-panel');
            toggleDetalles(panelId);
        });
    });

    if (formulario) {
        formulario.addEventListener('submit', prevenirEnvio);
    }
});

function toggleDetalles(idPanel) {
    const panel = document.getElementById(idPanel);
    if (!panel) return;

    if (window.getComputedStyle(panel).display === 'none') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}

function prevenirEnvio(event) {
    event.preventDefault(); // Evita el comportamiento por defecto (recarga)
    alert('¡Gracias! Te has suscrito exitosamente para recibir información del Mundial 2026.');
    event.target.reset(); // Limpia el formulario
}
