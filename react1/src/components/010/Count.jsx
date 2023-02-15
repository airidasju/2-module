import { useState } from 'react';
import Buttons from './Buttons';

function Count() {

    const [count, setCount] = useState(1)

    return (
        <>
        <h1>{count}</h1>
        <Buttons setCount={setCount}></Buttons>
        </>
    )
}

export default Count;