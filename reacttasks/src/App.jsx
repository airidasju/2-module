import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem('count');
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem('count', count);
  }, [count]);

  const addOne = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='bin'>
          <button className='button' onClick={() => addOne()}>
            +{count}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
