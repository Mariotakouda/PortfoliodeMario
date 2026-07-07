import About from "./Components/About";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="bg-canvas min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
