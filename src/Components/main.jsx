import './main.css';
import magicWandIcon from '/images/magic-wand.png';
import memeImage from '/images/memeimg.png';
// import Hero from './Sub_Components/hero';
// import Card from './Sub_Components/card';
// import CardData from './cardData';

export default function Main() {
  // const cards = CardData.map((card) => <Card key={card.id} {...card} />);

  return (
    <main className="main-container">
      <form className="form-container">
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="input1">Top Text</label>
            <br />
            <input type="text" id="input1" placeholder="Enter your text" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="input2">Bottom Text</label>
            <br />
            <input type="text" id="input2" placeholder="Enter your text" />
          </div>
        </div>
        <button className="content-button">
          Get a new meme image
          <img src={magicWandIcon} alt="Magic Wand" />
        </button>
      </form>
      <div className="meme-container">
        <p className="top-text meme">SHUT UP</p>
        <img src={memeImage} alt="meme" className="meme-img" />
        <p className="bottom-text meme">AND TAKE MY MONEY</p>
      </div>
    </main>
  );
}
