import About from "./Components/About";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div>
        <div className="p-5 md:px-[15%]">
          <Navbar />
          <Home />
        </div>
        
        <About />

        <div className="p-5 md:px-[15%]">
          <Experience />
          <Projects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
