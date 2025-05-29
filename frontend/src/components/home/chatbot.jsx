import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../../assets/home/css/chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const appendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const getBotResponse = async (message) => {
    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        messages: [
          { role: "system", content: "Anda adalah asisten wisata untuk Banyuwangi." },
          { role: "user", content: message },
        ],
      });

      const reply = response.data.reply.trim();
      appendMessage("bot", reply);
    } catch (error) {
      console.error("API Proxy Error:", error);
      appendMessage("bot", "Maaf, terjadi kesalahan saat menghubungi layanan AI.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = input;
    appendMessage("user", userMessage);
    setInput("");
    await getBotResponse(userMessage);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div id="chatbot-container">
      <button id="chatbot-toggle" onClick={toggleChatbot}>
        <span role="img" aria-label="chat">💬</span>
      </button>
      {isOpen && (
        <div id="chatbot">
          <div id="chatbot-header">ChatBot</div>
          <div id="chatbot-messages" ref={messagesEndRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                <strong>{msg.sender === "user" ? "Anda" : "Bot"}:</strong>{" "}
                {msg.text}
              </div>
            ))}
          </div>
          <form id="chatbot-form" onSubmit={handleSubmit}>
            <input
              id="chatbot-input"
              type="text"
              placeholder="Tanyakan tentang wisata Banyuwangi..."
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Kirim</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
