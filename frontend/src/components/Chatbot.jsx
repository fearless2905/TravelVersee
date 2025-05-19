import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => {
    setVisible(!visible);
  };

  const appendMessage = (sender, text) => {
    setMessages(prevMessages => [...prevMessages, { sender, text }]);
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('wisata') || msg.includes('tempat wisata')) {
      return 'Banyuwangi memiliki banyak tempat wisata menarik seperti Kawah Ijen, Pantai Pulau Merah, dan Desa Adat Osing.';
    } else if (msg.includes('kuliner')) {
      return 'Anda bisa mencoba makanan tradisional seperti Sego Tempong dan Pecel Pitik di Banyuwangi.';
    } else if (msg.includes('jam buka')) {
      return 'Jam buka tempat wisata biasanya mulai pukul 08.00 hingga 17.00 WIB.';
    } else if (msg.includes('harga') || msg.includes('tiket')) {
      return 'Harga tiket bervariasi tergantung tempat wisata, biasanya mulai dari Rp 10.000 hingga Rp 50.000.';
    } else if (msg.includes('halo') || msg.includes('hai')) {
      return 'Halo! Ada yang bisa saya bantu tentang wisata di Banyuwangi?';
    } else {
      return 'Maaf, saya belum mengerti pertanyaan Anda. Silakan coba tanyakan hal lain tentang wisata Banyuwangi.';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage) return;
    appendMessage('user', userMessage);
    setInput('');
    setTimeout(() => {
      const botReply = getBotResponse(userMessage);
      appendMessage('bot', botReply);
    }, 500);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000, fontFamily: 'Arial, sans-serif' }}>
      <button
        onClick={toggleChatbot}
        style={{
          backgroundColor: '#4ade80',
          border: 'none',
          borderRadius: '50%',
          width: 60,
          height: 60,
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          fontSize: 30,
          color: 'black',
        }}
        aria-label="Toggle Chatbot"
      >
        💬
      </button>
      {visible && (
        <div
          style={{
            width: 300,
            height: 400,
            background: 'white',
            borderRadius: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              flex: 1,
              padding: 10,
              overflowY: 'auto',
              fontSize: 14,
              color: 'black',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: 10,
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                }}
              >
                <strong>{msg.sender === 'user' ? 'Anda' : 'Bot'}:</strong> {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', borderTop: '1px solid #ddd' }}
          >
            <input
              type="text"
              placeholder="Tanyakan tentang wisata Banyuwangi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                padding: 10,
                fontSize: 14,
                borderRadius: '0 0 0 10px',
              }}
              autoComplete="off"
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#4ade80',
                border: 'none',
                padding: '0 15px',
                cursor: 'pointer',
                borderRadius: '0 0 10px 0',
              }}
            >
              Kirim
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
