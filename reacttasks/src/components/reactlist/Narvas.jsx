import { v4 as uuidv4 } from 'uuid';

function Narvas({element}) {

    return (
        <li key={uuidv4()}>{element.type == "animal" ? Object.values(element).map((el) => el+" ") : null}</li>
)

}

export default Narvas;