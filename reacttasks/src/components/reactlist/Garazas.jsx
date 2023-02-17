import { v4 as uuidv4 } from 'uuid';

function Garazas({element}) {

    return (
        <li key={uuidv4()}>{element.type === "car" ? Object.values(element).map((el) => el+" ") : null}</li>
)

}

export default Garazas;