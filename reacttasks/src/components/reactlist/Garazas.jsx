import { v4 as uuidv4 } from 'uuid';

function Garazas({ element }) {
  return <li key={uuidv4()}>{Object.values(element).map((el) => el + ' ')}</li>;
}

export default Garazas;
