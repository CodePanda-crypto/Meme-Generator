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

  function handleGetNewMeme() {
    const getMemeImage = () => {
      const memesArray =
        memesData && memesData.data && memesData.data.memes
          ? memesData.data.memes
          : [];
      const randomMemeImage =
        memesArray[Math.floor(Math.random() * memesArray.length)];
      const url = randomMemeImage.url;
      return url;
    };

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: getMemeImage(),
    }));
  }

  function getMemeImage() {
    const memesArray =
      memesData && memesData.data && memesData.data.memes
        ? memesData.data.memes
        : [];
    if (!memesArray || memesArray.length === 0) {
      // Handle the case where memesArray is undefined or empty
      return ''; // Or any default value or error handling strategy
    }
    const randomMemeImage =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    const url = randomMemeImage.url;
    return url;
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
        handleGetNewMeme={handleGetNewMeme}
        getMemeImage={getMemeImage}
      />
    </div>
  );
}
