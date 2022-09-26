import "./App.css";
import Banner from "./Components/Banner";
import Bord from "./Components/Bord";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { Footer } from "./Components/Footer";
import Findus from "./Components/Findus";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Bord />
      <Findus />
      <Card />
      <Card />
      <Card />
      <Card />

      <About />
      <Footer />
    </>
  );
}

export default App;
