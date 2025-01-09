const darkModeButton = document.getElementById('dark-mode-toggle');

// Check if dark mode preference is saved in localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    darkModeButton.textContent = '🌞';  // Sun icon for light mode
} else {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    darkModeButton.textContent = '🌙';  // Moon icon for dark mode
}

// Toggle dark/light mode
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('light-mode')) {
        darkModeButton.textContent = '🌞';
        localStorage.setItem('theme', 'light');
    } else {
        darkModeButton.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

// Carousel functionality
const carousel = document.querySelector('.projects-carousel');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
    const cardWidth = document.querySelector('.project-card').offsetWidth;
    carousel.style.transform = `translateX(${-currentIndex * (cardWidth + 20)}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < carousel.childElementCount - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Initialize
updateCarousel();
