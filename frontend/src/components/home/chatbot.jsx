import React, { useState, useRef, useEffect } from "react";
import "../../assets/home/css/chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const appendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes("wisata") || msg.includes("tempat wisata")) {
      return "Banyuwangi memiliki banyak tempat wisata menarik seperti Kawah Ijen, Pantai Pulau Merah, dan Desa Adat Osing.";
    } else if (msg.includes("kuliner")) {
      return "Anda bisa mencoba makanan tradisional seperti Sego Tempong dan Pecel Pitik di Banyuwangi.";
    } else if (msg.includes("jam buka")) {
      return "Jam buka tempat wisata biasanya mulai pukul 08.00 hingga 17.00 WIB.";
    } else if (msg.includes("harga") || msg.includes("tiket")) {
      return "Harga tiket bervariasi tergantung tempat wisata, biasanya mulai dari Rp 10.000 hingga Rp 50.000.";
    } else if (msg.includes("halo") || msg.includes("hai")) {
      return "Halo! Ada yang bisa saya bantu tentang wisata di Banyuwangi?";
    } else {
      return "Maaf, saya belum mengerti pertanyaan Anda. Silakan coba tanyakan hal lain tentang wisata Banyuwangi.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    appendMessage("user", input);
    const reply = getBotResponse(input);
    setInput("");
    setTimeout(() => appendMessage("bot", reply), 500);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div id="chatbot-container">
      <button id="chatbot-toggle" onClick={toggleChatbot}>
        <span role="img" aria-label="chat">
          💬
        </span>
      </button>
      {isOpen && (
        <div id="chatbot">
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
