import './main.css';
import Hero from './Sub_Components/hero';
import Card from './Sub_Components/card';
import CardData from './cardData';

export default function Main() {
  const cards = CardData.map((card) => <Card key={card.id} {...card} />);

  return (
    <main className="main-container">
      <Hero />
      <section className="cards-list">{cards}</section>
    </main>
  );
}
