// Scroll smooth to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth Scroll to Sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Scroll Animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 1.2;

    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
            section.classList.add('visible');
        }
    });
});

// Chatbox Animation
const chatInput = document.querySelector('#chat-input');
const chatMessages = document.querySelector('.chat-messages');

function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        const userMessageHTML = `<p class="user-message"><strong>You:</strong> ${userMessage}</p>`;
        chatMessages.innerHTML += userMessageHTML;
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate bot response
        setTimeout(() => {
            const botResponseHTML = `<p class="bot-message"><strong>Bot:</strong> I'm here to help. Ask me anything!</p>`;
            chatMessages.innerHTML += botResponseHTML;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        chatInput.value = '';
    }
}