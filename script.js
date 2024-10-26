// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});

// Typewriter effect for greetings
const greetings = ["Hello 👋  ", "नमस्ते 🙏  "]; // Added spaces at the end
const delayBetweenWords = 1000; // Delay before deleting
const delayBetweenCharacters = 300; // Delay for each character
let currentGreetingIndex = 0;

function typeWriter(text, element, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, delayBetweenCharacters);
        } else {
            setTimeout(callback, delayBetweenWords);
        }
    }
    typing();
}

function deleteText(element, callback) {
    let i = element.textContent.length;
    function deleting() {
        if (i >= 0) {
            element.textContent = element.textContent.slice(0, i);
            i--;
            setTimeout(deleting, delayBetweenCharacters);
        } else {
            setTimeout(callback, delayBetweenWords);
        }
    }
    deleting();
}

function startTypingEffect() {
    const greetingElements = document.querySelectorAll('.greeting');
    const currentGreeting = greetings[currentGreetingIndex];
    typeWriter(currentGreeting, greetingElements[currentGreetingIndex], () => {
        deleteText(greetingElements[currentGreetingIndex], () => {
            currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
            startTypingEffect(); // Repeat the typing effect
        });
    });
}

startTypingEffect(); // Start the typing effect
