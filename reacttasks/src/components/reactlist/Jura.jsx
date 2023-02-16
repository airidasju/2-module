import { v4 as uuidv4 } from 'uuid';
import Laivas from './Laivas';
import Sala from './Sala';
import Valtis from './Valtis';

function Jura({sea}) {
    
    return (
        <div>
            <ul className='board'>
                {
                sea.map((el) => 
                el.type==="man" ? <Valtis element={el} key={uuidv4()}></Valtis> 
                : el.type==="car" ? <Laivas element={el} key={uuidv4()}></Laivas> 
                : el.type==="fish" ? <Sala element={el} key={uuidv4()}></Sala> 
                : <li key={uuidv4()}>{Object.values(el).map((el) => el+" ")}</li>
                )}
        </ul>
        </div>
    )
}

export default Jura;