document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Animação de Fade-in com Intersection Observer ---
    // Seleciona todos os elementos que devem ter a animação
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // relativo ao viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento visível
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    };

    // Cria o observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa cada elemento
    fadeElements.forEach(el => {
        observer.observe(el);
    });


    // --- 2. Simulação de Envio de Formulário de Contato ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Exibe mensagem de sucesso (usando classes do Bootstrap)
        formMessage.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Obrigado! Sua mensagem foi enviada com sucesso.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        // Limpa o formulário
        contactForm.reset();

        // Remove a mensagem após 5 segundos (opcional)
        setTimeout(() => {
            const alert = formMessage.querySelector('.alert');
            if (alert) {
                // Usa a API do Bootstrap para fechar o alerta
                new bootstrap.Alert(alert).close();
            }
        }, 5000);
    });


    // --- 3. Fechar o Menu Mobile ao Clicar em um Link ---
    // (Melhoria de usabilidade para o menu do Bootstrap)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navMenu = document.getElementById('navMenu');
    
    // Cria uma instância do Collapse do Bootstrap
    const bsCollapse = new bootstrap.Collapse(navMenu, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se o menu está aberto (visível em telas pequenas)
            if (navMenu.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

});