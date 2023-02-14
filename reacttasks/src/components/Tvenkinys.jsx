import { v4 as uuidv4 } from 'uuid';
import Daiktas from './Daiktas';

function Tvenkinys({sea}) {
    const odd = sea.filter((el) => el.id % 2 === 0)
    const even = sea.filter((el) => el.id % 2 !== 0)

    return (
        <div>
            <ul className='board'>
                <Daiktas id={odd}></Daiktas>
                <Daiktas id={even}></Daiktas>
            </ul>
        </div>
    )
}

export default Tvenkinys;