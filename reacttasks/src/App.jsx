import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import rand from './functions/rand';

function App() {
  const [form, setChecked] = useState({ num: rand(5, 25), rectangle: false });

  const changeForm = () => {
    setChecked((prevState) => {
      return {
        ...prevState,
        rectangle: !prevState.rectangle,
      };
    });
  };

  const changeNum = () => {
    setChecked((prevState) => {
      return {
        ...prevState,
        num: rand(5, 25),
      };
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => changeForm()}>Change form</button>
        <button onClick={() => changeNum()}>Random num 5-25</button>
        <div
          className={`transformation`}
          style={{ borderRadius: form.rectangle ? '50%' : null }}
        >
          {form.num}
        </div>
      </header>
    </div>
  );
}

export default App;
