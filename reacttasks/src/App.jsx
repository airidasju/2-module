import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SimpleSquare from './components/reactstate/SimpleSquare';
import rand from './functions/rand';

function App() {
  const [sq, setSq] = useState([]);

  const addSq = (color) => {
    setSq((s) => [
      ...s,
      {
        id: uuidv4(),
        color: color,
        index: rand(1, 999),
      },
    ]);
  };

  const resetSq = () => {
    setSq((s) => []);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => addSq('crimson')}>Add red</button>
        <button onClick={() => addSq('indigo')}>Add indigo</button>
        <button
          style={{ backgroundColor: 'crimson' }}
          onClick={() => resetSq()}
        >
          Reset
        </button>
        <div className={`canvas`}>
          {sq.map((s) => (
            <SimpleSquare
              key={uuidv4()}
              sq={s}
              setSq={setSq}
              i={s.index}
              color={s.color}
            ></SimpleSquare>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
