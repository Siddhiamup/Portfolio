import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

// Import common components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>

      {/* Navigation bar visible on all pages */}
      <Navbar />

      {/* Routes for pages */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      {/* Footer visible on all pages */}
      <Footer />

    </Router>
  );
}

export default App;