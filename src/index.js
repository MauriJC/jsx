import React from 'react';
import ReactDOM from 'react-dom/client';


const el = document.querySelector("#root");

const root = ReactDOM.createRoot(el);

function App(){
    let message = 'bye there';

    if (Math.random()>0.5) {
        message= 'Hello there!'
    }
    return <h1>{message}</h1>
}

root.render(<App/>)