import { v4 as uuidv4 } from 'uuid';
import Daiktas from './Daiktas';

function Tvenkinys({sea}) {
    const odd = sea.filter((el) => el.id % 2 === 0)
    const even = sea.filter((el) => el.id % 2 !== 0)

    return (
        <div>
            <ul className='board'>
                <Daiktas id={odd} color={sea.color}></Daiktas>
                <Daiktas id={even} color={sea.color}></Daiktas>
            </ul>
        </div>
    )
}

export default Tvenkinys;