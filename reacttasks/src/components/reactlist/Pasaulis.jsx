import { v4 as uuidv4 } from 'uuid';
import Namas from './Namas';
import Narvas from './Narvas';
import Garazas from './Garazas';
import Akvariumas from './Akvariumas';


function Pasaulis({ sea }) {

    const garage = sea.filter((el) => el.type === "man")

  return (
    <div>
      <ul className='board'>
        {sea.map((el) => el.id % 2 === 0 ? (
        <Namas element={el}></Namas>):(<Namas element={el}></Namas>))}
      </ul>
    </div>
  );
}

export default Pasaulis;
