import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects } from "./components";
import "./input.css";

import herobg from "./Images/herobg.png";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${herobg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1
  };

  return (
    <BrowserRouter>
      <div className="relative">
        <div style={backgroundImageStyle}></div>
        <div className="h-screen overflow-y">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Tech />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
