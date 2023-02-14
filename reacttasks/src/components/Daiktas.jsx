import { v4 as uuidv4 } from 'uuid';

function Daiktas({even, id, color}) {


    return (
        <div>
            {
                id.map((el) => <li style={{color: el.color}} key={uuidv4()}>{Object.values(el).map(val => val+" ")}</li>)
            }
        </div>
    )
}

export default Daiktas;