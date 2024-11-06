const typewriter = document.getElementById("typewriter");
const words = [
    "Hello",          // English
    "नमस्ते",         // Hindi
    "ਨਮਸਤੇ",         // Punjabi
    "வணக்கம்",       // Tamil
    "ഹലോ",           // Malayalam
    "హలో",           // Telugu
    "ನಮಸ್ತೆ",         // Kannada
    "ନମସ୍କାର",       // Odia
    "नमस्कार",       // Marathi
    "স্বাগত",         // Bengali
    "હેલો",           // Gujarati (alternate)
];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    if (!isDeleting && currentCharIndex <= words[currentWordIndex].length) {
        typewriter.innerHTML = words[currentWordIndex].substring(0, currentCharIndex);
        currentCharIndex++;
        if (currentCharIndex === words[currentWordIndex].length + 1) {
            isDeleting = true; // Switch to deleting mode after typing
            setTimeout(type, 2000); // Wait a moment before starting to delete
        } else {
            setTimeout(type, 200); // Typing speed
        }
    } else if (isDeleting && currentCharIndex >= 0) {
        typewriter.innerHTML = words[currentWordIndex].substring(0, currentCharIndex);
        currentCharIndex--;
        if (currentCharIndex < 0) {
            isDeleting = false; // Switch back to typing mode
            currentWordIndex = (currentWordIndex + 1) % words.length; // Move to the next word
            setTimeout(type, 2000); // Wait a moment before typing the next word
        } else {
            setTimeout(type, 200); // Deleting speed
        }
    }
}

// Start the typewriter effect after a short delay
setTimeout(() => {
    type(); // Start typing
}, 1000); // 1 second delay before starting


// Function to toggle dark/light theme when button is clicked
document.getElementById('themeToggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // Toggle the dark mode class

    // Update the button icon based on the current theme
    const toggleIcon = document.getElementById('toggleIcon');
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '🌙'; // Set icon to moon when in dark mode
    } else {
        toggleIcon.textContent = '🌞'; // Set icon to sun when in light mode
    }
    
});

// Function to toggle the visibility of the nav links when the hamburger is clicked
document.getElementById('hamburgerButton').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); // Toggle the 'show' class to show/hide links
});

// Close button functionality
document.getElementById('closeButton').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('show'); // Remove 'show' class to hide links
});

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerButton = document.getElementById('hamburgerButton');

    // Check if the click was outside the nav links and hamburger button
    if (!navLinks.contains(event.target) && !hamburgerButton.contains(event.target)) {
        navLinks.classList.remove('show'); // Hide nav links
    }
});

// JavaScript to handle the loading effect and reveal the button
// JavaScript to handle the loading effect and reveal the button
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".resume-section").classList.add("loaded");
    }, 0); // Immediately add loaded class
});

// Array of random emojis to simulate the "Matrix" effect
const characters = [
    '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😜', '😝', '😛', '🤑', '🤗', '🤩', '🤔',
    '🤨', '😐', '😑', '😶', '🙄', '😌', '😔', '😪', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥳', '🥴', '😵', '🤯', '😳', '🥺',
    '😡', '😠', '🤬', '😤', '😈', '👿', '💀', '👻', '💩', '🧠', '💡', '🔌', '📱', '💻', '🖥', '💾', '📝', '📓', '📚', '📖'
];

// Create Matrix effect with random falling emojis
function createMatrixEffect() {
    const matrixEffectContainer = document.querySelector('.matrix-effect');
    let lineCount = 0;

    // Slow-start interval, gradually reducing the interval time for a speed-up effect
    let initialInterval = 500; // Start slow
    const intervalStep = 20; // Reduce interval time by 20ms each time, until faster rate is reached
    const maxLines = 20; // Stop after 20 lines

    const intervalID = setInterval(() => {
        const matrixLine = document.createElement('div');
        matrixLine.classList.add('matrix-line');
        matrixLine.style.left = `${Math.random() * 100}%`;  // Random start position
        matrixLine.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation speed
        matrixLine.style.animationDelay = `${Math.random() * 2}s`; // Random delay

        let lineText = '';
        for (let i = 0; i < 20; i++) {
            lineText += characters[Math.floor(Math.random() * characters.length)] + ' ';
        }

        matrixLine.textContent = lineText;
        matrixEffectContainer.appendChild(matrixLine);

        lineCount++;
        initialInterval = Math.max(initialInterval - intervalStep, 100); // Slow start, faster after reaching 100ms
        clearInterval(intervalID);

        if (lineCount < maxLines) {
            createMatrixEffect();
        }
    }, initialInterval);
}

// Trigger the Matrix effect on page load
window.onload = () => {
    createMatrixEffect();
    document.querySelector('.resume-button-container').style.opacity = 1;
    document.querySelector('.resume-button-container').style.animation = 'fallDown 2s ease-in-out 2s forwards';
};

// Download button functionality
document.getElementById('resumeButton').addEventListener('click', function () {
    window.location.href = "visuals/YashResume.pdf";  // Change path if needed
});

// comment jaruri hai