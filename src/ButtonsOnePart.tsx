import React from 'react';

const ButtonsOnePart = () => {
    /*const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
        console.log("Hi, I'm Vasya")
    }
    const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
        console.log("Hi, I'm Dina")
    }*/
    const onClickHandler = (name: string) => {
        console.log(name)
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*Homework button*/
    /*const foo1 = () => {
        //Ничего не передавать, но в консоли должно показаться 100200
        console.log(100200)
    }
    const foo2 = (takeNumber: number) => {
        //Передать цифру - 100200
        console.log(takeNumber)
    }*/
    return (
        <>
            {/*Microtask button lesson*/}
            <button onClick={() => onClickHandler('Vasya')}>MyYouTubeChannel-1
            </button>
            <button onClick={() => onClickHandler('Dina')}>MyYouTubeChannel-2
            </button>


            {/*//////////////////////////////////////////////////////////////////////////////////////////////*/}

            {/*Microtask button homework*/}
            {/*<button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>*/}
        </>
    );
};

export default ButtonsOnePart;