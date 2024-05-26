import React, { useState } from 'react';
const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Send the message to the Python server
    try {
      const response = await axios.post('/api/chat', { message: inputValue });
      const botResponse = response.data.message;

      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setMessages([...messages, { text: botResponse, sender: 'bot' }]);
      setInputValue('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="message-input-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;

