import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [form, setChecked] = useState({num: 5, rectangle: false});

  const toggleChecked = () => setChecked((prevState ) => [{num: 5, rectangle: !prevState.rectangle}]);



  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => toggleChecked()}>Change form</button>
        <button >Random num 5-25</button>
        <div
          className={`transformation`}
          style={{ borderRadius: form.rectangle ? '50%' : null }}
        ></div>
      </header>
    </div>
  );
}

export default App;
