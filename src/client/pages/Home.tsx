import "../css/Home.css";

import ProAsansorImage from "../assets/ProAsansorImage.jpeg";
import ProAsansorImage1 from "../assets/ProAsansorImage1.jpeg";
import ProAsansorImage2 from "../assets/ProAsansorImage2.jpeg";

function Home() {
  return (
    <div>
      <main className="home">
        <section className="hero">
          <h1>ProAsansor</h1>
          <p>Safe and fast moving lift services.</p>
        </section>

        <section className="home-cards">
          <div className="home-card">
            <img src={ProAsansorImage} alt="" />
            <h2>Moving Service</h2>
            <p>We help move your furniture safely and efficiently.</p>
          </div>

          <div className="home-card">
            <img src={ProAsansorImage1} alt="" />
            <h2>Exterior Lift</h2>
            <p>Our lift system helps transport furniture to upper floors.</p>
          </div>

          <div className="home-card">
            <img src={ProAsansorImage2} alt="" />
            <h2>Safe Transport</h2>
            <p>We focus on protecting your furniture during transportation.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
