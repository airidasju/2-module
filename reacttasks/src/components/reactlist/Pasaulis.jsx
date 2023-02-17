import { v4 as uuidv4 } from 'uuid';
import Namas from './Namas';
import Narvas from './Narvas';
import Garazas from './Garazas';
import Akvariumas from './Akvariumas';


function Pasaulis({ sea }) {

    const garage = sea.filter((el) => el.type === "man")
    const cage = sea.filter((el) => el.type === "animal")

  return (
    <div>
      <ul className='board'>
        {sea.map((el) => el.id % 2 === 0 ? 
        (
        <Namas element={el}></Namas>,
        <Narvas element={el}></Narvas>
        ):
        (
        <Namas element={el}></Namas>,
        <Narvas element={el}></Narvas>
        ))}
      </ul>
    </div>
  );
}

export default Pasaulis;
