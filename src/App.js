import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header"
import Projectpage from "./pages/Projectpage";
import Skillpage from "./pages/Skillpage";
import ResponsiveHeader from "./components/ResponsiveHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Pagenotfound from "./components/Notfoundpage/Pagenotfound";
import FormContact from "./components/form/FormContact";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <ResponsiveHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projectpage />} />
          <Route path="/qualifications" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skillpage />} />
          <Route exact path="/pagenotfound" element={<Pagenotfound />} />
          <Route exact path="/contact" element={<FormContact />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
