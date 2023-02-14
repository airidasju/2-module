import { v4 as uuidv4 } from 'uuid';

function Bala({sea}) {


    return (
        <div className="list-group list-group-flush ">
            <ul className='board'>
            {sea.map((el) => <li style={{backgroundColor: el.color}} key={uuidv4()}>{el.type} {el.name} {el.color}</li>)}
            </ul>
        </div>
    )
}

export default Bala;