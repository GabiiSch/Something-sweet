const messages = [
    "Heyyy JJ!❤️ ",
    "I just wanted to remind you how much you mean to me.",
    "You're my favorite person in the whole world!",
    "Thank you for being you and for all the joy you bring into my life.",
    "I appreciate you more than words can say.",
    "I love you so much! ",
    "Forever and always. ",
    "❤️❤️❤️🐧🐝🍄"
];

let currentMessageIndex = 0;

const messageElement = document.getElementById('message');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    messageElement.innerText = messages[currentMessageIndex];
    messageElement.style.transform = 'translateY(-20px)';
    messageElement.style.opacity = '0';

    setTimeout(() => {
        messageElement.style.transform = 'translateY(0)';
        messageElement.style.opacity = '1';
    }, 100);
});
