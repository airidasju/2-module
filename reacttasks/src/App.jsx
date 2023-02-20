import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Azuolas from './components/reactstate/azuolas';
import Berzas from './components/reactstate/berzas';
import Uosis from './components/reactstate/uosis';

function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <div className='treeBtn'>
      <button>Add Berzas</button>
      <button>Add Uosis</button>
      <button>Add Azuolas</button>
      </div>
            <div className='laukas'>
                <Azuolas></Azuolas>
                <Berzas></Berzas>
                <Uosis></Uosis>
            </div>
      </header>
    </div>
  );
}

export default App;
