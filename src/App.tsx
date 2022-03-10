import React from 'react';
import './App.css';

function App() {

    /*const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
        console.log("Hi, I'm Vasya")
    }
    const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
        console.log("Hi, I'm Dina")
    }*/
    const onClickHandler = (name: string) => {
        console.log(name)
    }
    return (
        <div className="App">
            {/*Microtask button lesson*/}
            <button onClick={() => onClickHandler('Vasya')}>MyYouTubeChannel-1
            </button>
            <button onClick={() => onClickHandler('Dina')}>MyYouTubeChannel-2
            </button>
            <button onClick={() => onClickHandler('some info')}>MyYouTubeChannel-3
            </button>
        </div>
    );
}

export default App;
