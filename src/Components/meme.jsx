import './meme.css';
import memesData from './memesData.jsx';
import magicWandIcon from '/images/magic-wand.png';
import React from 'react';

export default function Meme() {
  // Use of State to generate an object with random meme image and text
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });
  //generate a random url for the meme image
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomMemeImage =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    const url = randomMemeImage.url;
    return url;
  }
  // handle the displaying of the meme image
  const handleGetNewMeme = () => {
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: getMemeImage(),
    }));
  };
  // handle the displaying of the meme text
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="main-container">
      <div className="user-input-container">
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="topText">Top Text</label>
            <br />
            <input
              type="text"
              id="topText"
              name="topText"
              placeholder="Enter your text"
              value={meme.topText}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="bottomText">Bottom Text</label>
            <br />
            <input
              type="text"
              id="bottomText"
              name="bottomText"
              placeholder="Enter your text"
              value={meme.bottomText}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button onClick={handleGetNewMeme} className="content-button">
          Get a new meme image
          <img src={magicWandIcon} alt="Magic Wand" />
        </button>
      </div>
      <div className="meme-container">
        <p className="top-text meme">{meme.topText}</p>
        <img
          src={meme.randomImage || getMemeImage()}
          alt="meme"
          className="meme-img"
        />
        <p className="bottom-text meme">{meme.bottomText}</p>
      </div>
    </main>
  );
}
