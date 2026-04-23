import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-black text-white w-full min-h-screen text-2xl">
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
          <section className="h-screen snap-center">  <Navbar />  </section>
          <section className="h-screen snap-center">Parallax</section>
          <section className="h-screen snap-center">Services</section>
          <section className="h-screen snap-center">Parallax2</section>
          <section className="h-screen snap-center">Portfolio1</section>
          <section className="h-screen snap-center">Portfolio2</section>
          <section className="h-screen snap-center">Portfolio3</section>
          <section className="h-screen snap-center">Contact</section>
        </div>
      </div>
    </>
  );
}

export default App;
