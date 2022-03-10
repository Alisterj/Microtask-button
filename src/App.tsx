import React from 'react';
import './App.css';
import ButtonsOnePart from "./ButtonsOnePart";
import Button from "./Components/Button";

function App() {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string,  age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button3Foo = () => {
        console.log("I'm stupid button")
    };

    return (
        <div className="App">
            <p>1 part</p>
            <div>
                <ButtonsOnePart/>
            </div>
            <p>2 part - Universal Button</p>
            <div>
                <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('I\'m Vasya', 21, 'Lenina 122')}/>
                <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('I\'m Ivan', 27, 'Kalinina 122')}/>
                <Button name={'Button-3'} callBack={Button3Foo}/>
            </div>
        </div>
    );
}

export default App;
