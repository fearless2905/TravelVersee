import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chatbot from "./components/home/chatbot";
import Footer from "./components/home/footer";
import Dashboard from "./pages/Dasboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
