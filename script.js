document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('August 30, 2024 23:59:59').getTime();
    const countdown = document.getElementById('countdown');
    const progressBar = document.getElementById('progressBar');
    const birthdayPopup = document.getElementById('birthdayPopup');
    const closeButton = document.querySelector('.btn-close');
    const sections = document.querySelectorAll('.section');

    closeButton.addEventListener('click', function() {
        birthdayPopup.classList.add('d-none');
    });

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            birthdayPopup.classList.remove('d-none');
            countdown.innerHTML = "¡Es hoy! ¡Felices 15 años, Úrsula!";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            countdown.innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;

            const totalTime = targetDate - new Date('July 30, 2024 00:00:00').getTime();
            const elapsedTime = now - new Date('July 30, 2024 00:00:00').getTime();
            const percent = Math.min(100, (elapsedTime / totalTime) * 100);
            progressBar.style.width = `${percent}%`;
            progressBar.setAttribute('aria-valuenow', percent);
        }
    }

    const interval = setInterval(updateCountdown, 1000);

    function checkSectionVisibility() {
        const scrollY = window.scrollY;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY > sectionTop - window.innerHeight + sectionHeight / 4) {
                section.classList.add('section-visible');
            }
        });
    }

    window.addEventListener('scroll', checkSectionVisibility);
    checkSectionVisibility();
});
