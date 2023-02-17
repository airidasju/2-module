import { v4 as uuidv4 } from 'uuid';

function Namas({element}) {

    return (
        <li key={uuidv4()}>{element.type === "man" ? Object.values(element).map((el) => el + " ") : null}</li>
)


}

export default Namas;