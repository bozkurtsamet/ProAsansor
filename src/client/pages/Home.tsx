import Hero from "../components/Hero";
import Services from "./Services";

import "../css/Home.css";

function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
    </div>
  );
}

export default Home;
