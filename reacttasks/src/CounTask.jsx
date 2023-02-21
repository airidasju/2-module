import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Square from './components/reactstate/Square';

function App() {
  const [sq, setSq] = useState([]);

  const addSq = () => {
    setSq((s) => [...s, { id: uuidv4() }]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button className='buttons' onClick={() => addSq()}>
          Prideti
        </button>
        <div className='bin'>
          {sq.map((s) => (
            <Square></Square>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
