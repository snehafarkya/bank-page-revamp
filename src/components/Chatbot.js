import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Chat window visibility
  const [messages, setMessages] = useState([]); // Store chat messages
  const [inputMessage, setInputMessage] = useState(''); // Input box value

  // Function to handle sending message
  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: inputMessage }]); // Add user message to the chat
      setInputMessage(''); // Clear the input box

      // Simulate a bot response after a delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'I am a chatbot. How can I help you?' },
        ]);
      }, 1000); // 1 second delay for bot response
    }
  };

  // Function to handle form submission (on "Enter" key press)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Chat icon */}
      <button
        className="text-4xl text-blue-500 hover:text-blue-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaUserCircle color='#97144d'/>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-bold text-lg">Chatbot</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              &#10005;
            </button>
          </div>

          {/* Chat messages area */}
          <div className="flex-1 overflow-y-auto mt-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                } mb-2`}
              >
                <div
                  className={`rounded-lg px-4 py-2 text-white ${
                    message.sender === 'user'
                      ? 'bg-[#97144d]'
                      : 'bg-gray-300 text-black'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input and Send button */}
          <div className="mt-2 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown} // Send on pressing Enter
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-[#97144d] text-white rounded-lg py-2 px-4"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
