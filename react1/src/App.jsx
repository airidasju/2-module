import './App.scss';
import Animal from './components/jb/Animal';

const obj = ['racoon', 'fox'];

// obj.add('racoon')

// obj.add('fox')

function App() {
  //   const fox = <u>FOX number: {rand(100, 199)}</u>;

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>{obj}</h2>

        <Animal animalName='Racoon' color='coral' h1Class='blue'></Animal>
        <Animal animalName='Fox' color='crimson' h1Class='green'></Animal>
        <Animal animalName='Rabit' color='black' h1Class='yellow'></Animal>
      </header>
    </div>
  );
}

export default App;
