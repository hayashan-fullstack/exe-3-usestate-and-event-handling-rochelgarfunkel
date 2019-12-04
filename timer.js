import React, { useState,useRef } from 'react';
import ReactDOM from 'react-dom';

export const Timer = (props) => {

    const [milisecond, setMiliSecond] = useState(0)
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const timeout=useRef(null)
    
    const restart = () => {
        console.log(timeout.current)
        clearTimeout(timeout.current)
        setMinute(0)
        setSecond(0)
        setMiliSecond(0)
    }
    timeout.current=setTimeout(() => {
        if(milisecond==99)
        {
            setMiliSecond(0)
            if(second==59)
            {
                setSecond(0)
                setMinute(minute+1)
            }
            else setSecond(second+1)
        }
        else setMiliSecond(milisecond + 1) 
    }, 10)
    
    
    return (
        <div style={{background:'grey'}}>
            <h1> Timer:</h1>
            <h2> {minute>9?minute:'0'+minute}:{second>9?second:'0'+second}:{milisecond>9?milisecond:'0'+milisecond}</h2>
            <br />
            <button onClick={restart}>restart</button>
        </div>
    )
}