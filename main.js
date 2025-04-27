// Efecto de hover para productos
document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('mouseenter', () => {
        producto.style.transform = 'translateY(-5px)';
        producto.style.boxShadow = '0 10px 20px rgba(76, 201, 240, 0.3)';
    });
    
    producto.addEventListener('mouseleave', () => {
        producto.style.transform = 'translateY(0)';
        producto.style.boxShadow = 'none';
    });
});

// Validación de formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validación simple
        let isValid = true;
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#f72585';
                isValid = false;
            } else {
                input.style.borderColor = '#4cc9f0';
            }
        });
        
        if (isValid) {
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            contactForm.reset();
        } else {
            alert('Por favor completa todos los campos requeridos.');
        }
    });
}

// Cambiar color del título al hacer clic (efecto demostrativo)
const mainTitle = document.querySelector('header h1');
if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        mainTitle.style.color = '#f72585';
        setTimeout(() => {
            mainTitle.style.color = '';
        }, 1000);
    });
}

// Mostrar año actual en el footer
const yearSpan = document.querySelector('footer p');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2023', currentYear);
}