import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import rand from './functions/rand';

function App() {
  const [num, setNum] = useState(0);

  const plusNum = () => {
    setNum((prevState) => prevState + 1);
  };

  const minusNum = () => {
    setNum((prevState) => prevState - 3);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => plusNum()}>Plus one</button>
        <button onClick={() => minusNum()}>Minus three</button>
        <div className={`transformation`}>{num}</div>
      </header>
    </div>
  );
}

export default App;
