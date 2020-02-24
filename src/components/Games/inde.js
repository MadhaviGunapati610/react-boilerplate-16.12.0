import React from 'react';

const Games = () => {
    let [counter, setCounter] = useState(0);
    setCounter=()=> {
        counter = counter + 1;
    };
    return (
        <div>
            Counter : {counter}
            <button onClick={setCounter}>Click Me!</button>
        </div>
    )
}

export default Games;