import { useState } from 'react';

function Square() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className='sq'>
      <button onClick={() => addOne()}>+</button>
      {count}
    </div>
  );
}

export default Square;
