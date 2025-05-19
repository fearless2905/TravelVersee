import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Chatbot from "./components/Chatbot";
=======
import Dashboard from "./pages/Dasboard";
>>>>>>> 97a27bc8d5d9bb716fe31c047d708a32d1e6fcf0

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
<<<<<<< HEAD
      <Chatbot />
=======
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
>>>>>>> 97a27bc8d5d9bb716fe31c047d708a32d1e6fcf0
    </Router>
  );
}

export default App;
