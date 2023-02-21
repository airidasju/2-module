import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [form, setChecked] = useState(true);

  const toggleChecked = () => setChecked((val) => !val);

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => toggleChecked()}>Click</button>
        <div
          className={`transformation`}
          style={{ borderRadius: form ? '50%' : null }}
        ></div>
      </header>
    </div>
  );
}

export default App;
