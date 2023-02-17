import { v4 as uuidv4 } from 'uuid';

function Akvariumas({element}) {

    return (
        <li key={uuidv4()}>{element.type === "fish" ? Object.values(element).map((el) => el+" ") : null}</li>
)

}

export default Akvariumas;