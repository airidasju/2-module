import { v4 as uuidv4 } from 'uuid';
import Namas from './Namas';
import Narvas from './Narvas';
import Garazas from './Garazas';
import Akvariumas from './Akvariumas';


function Pasaulis({ sea }) {



  return (
    <div>
      <ul className='board'>
        {sea.map((el) => el.id % 2 === 0 ? 
        <>
        <Namas element={el}></Namas>
        <Narvas element={el}></Narvas>
        <Garazas element={el}></Garazas>
        <Akvariumas element={el}></Akvariumas>
        </>
        :
        <>
        <Namas element={el}></Namas>
        <Narvas element={el}></Narvas>
        <Garazas element={el}></Garazas>
        <Akvariumas element={el}></Akvariumas>
        </>
        )}
      </ul>
    </div>
  );
}

export default Pasaulis;
