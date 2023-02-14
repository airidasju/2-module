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
                el.type==="man" ? <Valtis element={el}></Valtis> 
                : el.type==="car" ? <Laivas element={el}></Laivas> 
                : el.type==="fish" ? <Sala element={el}></Sala> 
                : <li key={uuidv4()}>{Object.values(el).map((el) => el+" ")}</li>
                )}
        </ul>
        </div>
    )
}

export default Jura;