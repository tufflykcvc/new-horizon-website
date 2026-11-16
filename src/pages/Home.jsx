import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">
            TECHNOLOGY & DIGITAL SOLUTIONS
          </p>

          <h1>
            Building a Better
            <br />
            Digital Future.
          </h1>

          <p className="hero-text">
            We help businesses grow through creative design,
            modern websites and reliable technology solutions.
          </p>

          <Link to="/services" className="hero-button">
            Explore Our Services
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Computer workspace"
          />
        </div>
      </section>

      <section className="intro">
        <p>WELCOME TO NEW HORIZON</p>

        <h2>Technology that moves your business forward.</h2>

        <p>
          We combine creativity, innovation and technology
          to create digital solutions that make a difference.
        </p>

        <button
          onClick={() => setShowMore(!showMore)}
          className="hero-button"
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>

        {showMore && (
          <p>
            At New Horizon, we believe technology should make
            life easier. Our team provides digital solutions
            that help people and businesses achieve more.
          </p>
        )}
      </section>
    </main>
  );
}

export default Home;