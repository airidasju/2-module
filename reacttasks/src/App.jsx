import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SimpleSquare from './components/reactstate/SimpleSquare';

function App() {
  const [sq, setSq] = useState([]);

  const addSq = () => {
    setSq((s) => [
      ...s,
      {
        id: uuidv4(),
      },
    ]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => addSq()}>Plus sq</button>

        <div className={`canvas`}>
          {sq.map((s) => (
            <SimpleSquare key={uuidv4()} sq={s} setSq={setSq}></SimpleSquare>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
