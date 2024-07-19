import './main.css';
// import Hero from './Sub_Components/hero';
// import Card from './Sub_Components/card';
// import CardData from './cardData';

export default function Main() {
  // const cards = CardData.map((card) => <Card key={card.id} {...card} />);

  return (
    <main className="main-container">
      <div className="input-container">
        <div className="input-wrapper">
          <label htmlFor="top-text">Top Text</label>
          <input type="text" id="top-text" placeholder="Enter Your Text" />
          <label htmlFor="bottom-text">Bottom Text</label>
          <input type="text" id="bottom-text" placeholder="Enter Your Text" />
        </div>
        <button type="button" className="content-button">
          Get a new meme image
          <img
            src="/images/magic-wand.png"
            alt="magic wand"
            className="magic-wand"
          />
        </button>
      </div>
      <div className="meme-container">
        <img src="/images/group.png" alt="meme" />
      </div>
    </main>
  );
}
