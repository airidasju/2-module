import { v4 as uuidv4 } from 'uuid';

function Daiktas({even, id}) {


    return (
        <div>
            {
                id.map((el) => <li key={uuidv4()}>{el.id} {el.name}</li>)
            }
        </div>
    )
}

export default Daiktas;