import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const App = () => {
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

ReactDOM.render(<App/>, document.getElementById('root'));
