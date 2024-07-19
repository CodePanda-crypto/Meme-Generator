import './hero.css';

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="images-container">
        <img src="/images/photogrid.png " alt="photo grid image" />
      </div>
      <div className="text-container">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
