import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
} from "./components";
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
    zIndex: -1, // Ensure the background is behind other content
  };

  return (
    <BrowserRouter>
      <div className="relative">
        {/* Background Image */}
        <div style={backgroundImageStyle}></div>

        {/* Content */}
        <div className="h-screen overflow-y">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Tech />
        <div className="relative z-0">
          <Contact />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
