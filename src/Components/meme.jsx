import './meme.css';
import memesData from './memesData.jsx';
import magicWandIcon from '/images/magic-wand.png';
import React from 'react';

export default function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomMeme =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    return randomMeme.url;
  }

  const [memeImage, setMemeImage] = React.useState(getMemeImage());

  const handleGetNewMeme = () => {
    setMemeImage(getMemeImage());
  };

  return (
    <main className="main-container">
      <div className="form-container">
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="top-text">Top Text</label>
            <br />
            <input type="text" id="top-text" placeholder="Enter your text" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="bottom-text">Bottom Text</label>
            <br />
            <input type="text" id="bottom-text" placeholder="Enter your text" />
          </div>
        </div>
        <button onClick={handleGetNewMeme} className="content-button ">
          Get a new meme image
          <img src={magicWandIcon} alt="Magic Wand" />
        </button>
      </div>
      <div className="meme-container">
        <p className="top-text meme">SHUT UP</p>
        <img src={memeImage} alt="meme" className="meme-img" />
        <p className="bottom-text meme">AND TAKE MY MONEY</p>
      </div>
    </main>
  );
}
