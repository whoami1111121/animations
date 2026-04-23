import { motion } from "framer-motion";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      {/* <section>Parallax</section> */}
      <section id="Services">
        <Parallax type='services' />
      </section>
      {/* <section>Parallax2</section> */}
      <section id="Portfolio"><Parallax type='portfolio' /></section>
      <Portfolio />
      <section>Portfolio1</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
