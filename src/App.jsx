import "./App.css";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Creation_Grid from "./components/Creation_Grid/Creation_Grid";
import Hero from "./components/Hero/Hero";
import VrInfo from "./components/VrInfo/VrInfo";

function App() {
  return (
    
    <BrowserRouter>
    <main>
      <Hero />
      <VrInfo />
      <Creation_Grid />
      <About />
    </main>
    </BrowserRouter>
  );
}
export default App;
