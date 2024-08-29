const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

const responses = {
    "hi": "Hello! How can I help you today?",
    "how are you?": "I'm just a bunch of code, but I'm functioning as expected!",
    "what is your name?": "I'm a simple chatbot created.",
    "bye": "Goodbye! Have a great day!",
    "what can you do?": "I can chat with you and answer simple questions. Try asking me something!",
    "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "what is the weather like?": "I can't check real-time data, but you can look it up online!",
    "tell me something interesting": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
    "who created you?": "I was created by a developer using JavaScript.",
    "what is your favorite color?": "I don't have preferences, but blue is quite popular among humans!",
    "can you help me with coding?": "Sure! What coding question do you have?",
    "what time is it?": "I can't check the time, but you can look at your device's clock!",
    "where are you from?": "I'm just a program, so I exist wherever there's a computer running me!",
    "tell me about yourself": "I'm a chatbot designed to assist you with your queries. Ask me anything!",
};

function addMessageToChatbox(message, sender) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`; // Fixed template literal syntax
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || "I'm sorry, I don't understand that.";
}

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    
    if (userMessage) {
        addMessageToChatbox(userMessage, 'User');
        const botResponse = getBotResponse(userMessage);
        addMessageToChatbox(botResponse, 'Bot');
        userInput.value = ''; // Clear input field
    }
});

// Optional: Allow sending messages with Enter key
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});
