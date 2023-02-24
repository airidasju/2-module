import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SimpleSquare from './components/reactstate/SimpleSquare';
import rand from './functions/rand';

function App() {
  const [sq, setSq] = useState([]);

  const [numSquares, setNumSquares] = useState(0);

  function handleSize(event) {
    setNumSquares(parseInt(event.target.value));
  }

  const addSq = () => {
    for (let i = 1; i <= numSquares; i++) {
      setSq((s) => [
        ...s,
        {
          id: uuidv4(),
          num: rand(1, 200),
        },
      ]);
    }
  };

  const resetSq = () => {
    setSq((s) => []);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='logic'>
          <button
            style={{ backgroundColor: 'crimson' }}
            onClick={() => resetSq()}
          >
            Reset
          </button>
          <label htmlFor='addSq'>How many squares to add?</label>
          <input
            name='addSq'
            id='addSq'
            type='number'
            onChange={handleSize}
          ></input>
          <button className='buttons' onClick={() => addSq()}>
            Add squares
          </button>
        </div>
        <div className={`canvas`}>
          {sq.map((s) => (
            <SimpleSquare
              key={uuidv4()}
              sq={s}
              setSq={setSq}
              i={s.num}
            ></SimpleSquare>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
