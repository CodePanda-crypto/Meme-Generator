import { useState } from 'react';
import './App.css';
import memesData from './Components/memesData.jsx';
import Header from './Components/header';
import Meme from './Components/meme';

export default function App() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });

  function getMemeImage() {
    const memesArray =
      memesData && memesData.data && memesData.data.memes
        ? memesData.data.memes
        : [];
    const randomMemeImage =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    const url = randomMemeImage.url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="App">
      <Header />
      <Meme
        meme={meme}
        handleInputChange={handleInputChange}
        getMemeImage={getMemeImage}
        randomImage={meme.randomImage}
      />
    </div>
  );
}
