// src/ChatRoom.js
import React, { useState } from 'react';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, user: 'User' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-auto p-4 bg-gray-100">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <div className="font-bold">{message.user}</div>
            <div>{message.text}</div>
          </div>
        ))}
      </div>
      <form className="flex p-4 bg-white border-t" onSubmit={handleSend}>
        <input
          type="text"
          className="flex-grow px-4 py-2 border rounded"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;
