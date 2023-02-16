import './App.scss';
import Bala from './components/reactlist/Bala';
import Tvenkinys from './components/reactlist/Tvenkinys';
import Jura from './components/reactlist/Jura';
import Vandenynas from './components/reactlist/Vandenynas';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const seaPlaners = [
    {id: 1, type: 'man', name: 'Lina', color: 'blue'},
    {id: 2, type: 'car', name: 'Opel', color: 'red'},
    {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
    {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
    {id: 5, type: 'man', name: 'Tomas', color: 'green'},
    {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
    {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
    {id: 8, type: 'car', name: 'MB', color: 'blue'},
    {id: 9, type: 'car', name: 'ZIL', color: 'red'},
    {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
  ];
  

  return (
    <div className="App">
      <header className="App-header">
        <div className='cards'>
        <div className="card">
                      <div className="card-header">
                          <h2 style={{color:'black'}}>Bala</h2>
                      </div>
                        <Bala sea={seaPlaners}></Bala>
                  </div>
                  <div className="card">
                      <div className="card-header">
                          <h2 style={{color:'black'}}>Tvenkinys</h2>
                      </div>
                        <Tvenkinys sea={seaPlaners}/>
                    </div>
                    <div className="card">
                      <div className="card-header">
                          <h2 style={{color:'black'}}>Jura</h2>
                      </div>
                        <Jura sea={seaPlaners}/>
                    </div>
                    <div className="card">
                      <div className="card-header">
                          <h2 style={{color:'black'}}>Vandenynas</h2>
                      </div>
                        <Vandenynas sea={seaPlaners}/>
                    </div>
                  </div>
      </header>
    </div>
  );
}

export default App;
