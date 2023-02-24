import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Cat from './components/ReactForms/Cat';
import rand from './functions/rand';

function App() {
  const [cat, setCat] = useState([]);

  const [name, setName] = useState('');
  const handleName = (event) => {
    setName(event.target.value);
  };

  const [weight, setWeight] = useState(0);
  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const [color, setColor] = useState(0);
  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const addCat = () => {
    setCat((c) => [
      ...c,
      {
        id: uuidv4(),
        num: rand(1, 200),
        name: name,
        weight: weight,
        color: color,
      },
    ]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='catBin'>
          <div className='catInput'>
            <label htmlFor='catName'>Cat name</label>
            <input name='catName' id='catName' onChange={handleName}></input>
          </div>
          <div className='catInput'>
            <label htmlFor='catWeight'>Cat weight</label>
            <input
              name='catWeight'
              id='catWeight'
              type='number'
              onChange={handleWeight}
            ></input>
          </div>
          <div className='catInput color'>
            <label htmlFor='catWeight'>Cat color</label>
            <input
              className='colorInput'
              name='catWeight'
              id='catWeight'
              type='color'
              onChange={handleColor}
            ></input>
          </div>
        </div>
        <button className='buttons' onClick={() => addCat()}>
          Add cat
        </button>
        <div className={`canvas`}>
          <ul className='cats'>
            {cat.map((c) => (
              <li>
                <Cat
                  key={uuidv4()}
                  weight={c.weight}
                  name={c.name}
                  color={c.color}
                ></Cat>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
