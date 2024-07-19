import { useState } from 'react';
import './App.css';
import Header from './Components/header';
import Meme from './Components/meme';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Meme count={count} setCount={setCount} />
    </div>
  );
}
