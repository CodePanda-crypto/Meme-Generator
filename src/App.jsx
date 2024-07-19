import { useState } from 'react';
import './App.css';
import Header from './Components/header';
import Main from './Components/main';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Main count={count} setCount={setCount} />
    </div>
  );
}
