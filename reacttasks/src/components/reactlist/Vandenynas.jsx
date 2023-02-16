import { v4 as uuidv4 } from 'uuid';
import Tipas from './Tipas';
import Vardas from './Vardas';
import Spalva from './Spalva';

function Vandenynas({ sea }) {
  const seaByType = [...sea].sort((a, b) => (a.type > b.type ? 1 : -1));
  const seaByName = [...sea].sort((a, b) => (a.name > b.name ? 1 : -1));
  const seaByColor = [...sea].sort((a, b) => (a.color > b.color ? 1 : -1));

  return (
    <div>
      <ul className='board'>
        {
          //    seaByType.map((el) => <Tipas element={el} key={uuidv4()}></Tipas>)}
          seaByName.map((el) => (
            <Vardas element={el} key={uuidv4()}></Vardas>
          ))
        }
        {/* seaByColor.map((el) => <Spalva element={el} key={uuidv4()}></Spalva>)} */}
      </ul>
    </div>
  );
}

export default Vandenynas;
