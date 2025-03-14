// DOM Elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to add a message to the chat box
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Function to get the bot's response
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('hello') || userMessage.includes('hi')) {
        return 'Hi there! How can I help you?';
    } else if (userMessage.includes('how are you')) {
        return 'I\'m just a bot, but I\'m doing great! How about you?';
    } else if (userMessage.includes('your name')) {
        return 'I\'m a chatbot. You can call me Bob!';
    } else if (userMessage.includes('weather')) {
        return 'I\'m not sure about the weather. Maybe check a weather app?';
    } else if (userMessage.includes('bye') || userMessage.includes('exit')) {
        return 'Goodbye! Have a great day!';
    } else {
        return 'I\'m sorry, I didn\'t understand that. Can you rephrase?';
    }
}

// Event listener for the send button
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage('user', userMessage);
        const botResponse = getBotResponse(userMessage);
        setTimeout(() => addMessage('bot', botResponse), 500); // Simulate bot response delay
        userInput.value = ''; // Clear input field
    }
});

// Event listener for the Enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});