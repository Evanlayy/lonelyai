document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    // Basic responses dictionary
    const responses = {
        'hello': 'Hello! How can I assist you today?',
        'hi': 'Hi there! How are you?',
        'how are you': 'I\'m functioning perfectly! How about you?',
        'who are you': 'I\'m Lonely AI, your cyberpunk companion.',
        'bye': 'Goodbye! Stay safe in the neon streets!',
        'help': 'I can chat with you about various topics. What interests you?'
    };

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getResponse(input) {
        input = input.toLowerCase();
        for (let key in responses) {
            if (input.includes(key)) {
                return responses[key];
            }
        }
        return "Interesting... Tell me more about that.";
    }

    function handleUserInput() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';

            // Simulate AI thinking with a slight delay
            setTimeout(() => {
                const response = getResponse(message);
                addMessage(response, false);
            }, 1000);
        }
    }

    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // Initial greeting
    setTimeout(() => {
        addMessage('Welcome to Lonely AI. How can I assist you today?', false);
    }, 500);
}); 