import './App.scss';
import AnimalLi from './components/008/AnimalLi';


const data = [
    {id: 1, animal: "Racoon", color: 'crimson', bold:'true'},
    {id: 4, animal: "Fox", color: 'brown', bold:'true'},
    {id: 17, animal: "Beaver", color: 'skyblue', bold: 'false'},
    {id: 3, animal: "Unicorn", color: 'coral', bold:'true'},
]


function App() {


  return (
    <div className='App'>
      <header className='App-header'>
            <div className='App'>

                <div className='card'>
                    <div className='card-header'>
                        <h2>Animals List</h2>
                    </div>
                    <ul className='list-group list-group-flush '>
                        {

                            data.map((a, i) => a = <AnimalLi key={a.id} animal={a} index={i}></AnimalLi>)

                        }
                    </ul>
                </div>

            </div>
      </header>
    </div>
  );
}

export default App;
