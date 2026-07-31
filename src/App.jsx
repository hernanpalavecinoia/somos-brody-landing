import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Method } from "./sections/Method";
import { Services } from "./sections/Services";
import { Demo } from "./sections/Demo";
import { Marquee } from "./sections/Marquee";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

function App() {
  useRevealOnScroll();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Services />
        <Demo />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
