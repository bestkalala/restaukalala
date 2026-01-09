document.addEventListener('DOMContentLoaded', () => {

   const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // On cible tous les éléments avec la classe .reveal
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));


    // 2. Changement de style de la navigation au scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('py-2', 'shadow-md');
            nav.classList.remove('py-4', 'shadow-sm');
        } else {
            nav.classList.add('py-4', 'shadow-sm');
            nav.classList.remove('py-2', 'shadow-md');
        }
    });

    // 3. Petit effet fluide sur les boutons (optionnel)
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});