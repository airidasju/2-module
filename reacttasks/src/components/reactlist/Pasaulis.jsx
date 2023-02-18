import { v4 as uuidv4 } from 'uuid';
import Namas from './Namas';
import Narvas from './Narvas';
import Garazas from './Garazas';
import Akvariumas from './Akvariumas';

function Pasaulis({ sea }) {
  return (
    <div>
      <ul className='board'>
        {sea.map((el) =>
          el.id % 2 === 0 ? (
            <>
              {el.type === 'man' ? (
                <Namas element={el}></Namas>
              ) : el.type === 'animal' ? (
                <Narvas element={el}></Narvas>
              ) : el.type === 'car' ? (
                <Garazas element={el}></Garazas>
              ) : el.type === 'fish' ? (
                <Akvariumas element={el}></Akvariumas>
              ) : null}
            </>
          ) : (
            <>
              {el.type === 'man' ? (
                <Namas element={el}></Namas>
              ) : el.type === 'animal' ? (
                <Narvas element={el}></Narvas>
              ) : el.type === 'car' ? (
                <Garazas element={el}></Garazas>
              ) : el.type === 'fish' ? (
                <Akvariumas element={el}></Akvariumas>
              ) : null}
            </>
          ),
        )}
      </ul>
    </div>
  );
}

export default Pasaulis;
