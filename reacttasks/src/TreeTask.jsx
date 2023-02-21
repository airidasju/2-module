import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tree from './components/reactstate/Tree';
import { useState } from 'react';

function App() {
  const [sq, setSq] = useState([]);

  const addBerzas = () => {
    setSq((t) => [...t, { type: 'Berzas' }]);
  };

  const addUosis = () => {
    setSq((t) => [...t, { type: 'Uosis' }]);
  };

  const addAzuolas = () => {
    setSq((t) => [...t, { type: 'Azuolas' }]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='button'>
          <button onClick={() => addBerzas()}>Add Berzas</button>
          <button onClick={() => addUosis()}>Add Uosis</button>
          <button onClick={() => addAzuolas()}>Add Azuolas</button>
        </div>
        <div className='laukas'>
          <div className='treeCol'>
            <span>Azuolas</span>
            {sq.map((t, i) =>
              t.type === 'Azuolas' ? <Tree key={i} type={t.type}></Tree> : null,
            )}
          </div>
          <div className='treeCol'>
            <span>Berzas</span>
            {sq.map((t, i) =>
              t.type === 'Berzas' ? <Tree key={i} type={t.type}></Tree> : null,
            )}
          </div>
          <div className='treeCol'>
            <span>Uosis</span>
            {sq.map((t, i) =>
              t.type === 'Uosis' ? <Tree key={i} type={t.type}></Tree> : null,
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
