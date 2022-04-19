import React, { useEffect, useState } from "react"
import "./calculator.css"


export default function Calculator() {

    const [calc, setCalc] = useState(" ");

    const [result, setResult] = useState(" ")

    const ops = ['/', '*', '+', '-', '.']

    const updatecalc = value => {
            // if statement to make sure operators dont go back to back.
        if(
            ops.includes(value) && calc === ' ' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ){
            return;
        }
        // apply values
        setCalc = (calc + value)
        // update result
        if(!ops.includes(value)){
            setResult(eval(calc +value).toString())
        }

    }

    const calculate= ()=>{
        setCalc(eval(calc).toString())
    }


    // function that passes thru updatedcal. to keep adding numbers
    const createdigit = () => {
        const digits = [];
        for (let i = 1; 1 < 10; i++) {
            digits.push(
                <button onclick={() => updatecalc(i.toString())}
                    key={i}>
                    {i}</button>
            )
        }
    }
        // delete function. if = to empty string return. 
    const deletelast =()=>{
        if(calc== ''){
            return
        }
        //start at 0 follow -1 to delete last value
        const value= calc.slice(0,-1);
        setCalc(value)
    }
    return (
        <div className="app">
            <div className="calculator">
                <div className="display">
                    {result ? <span>{result}</span> : ''}{calc || "0"}

                </div>
                <div className="operators">
                    <button onClick={() => updatecalc('/')}> /</button>
                    <button onClick={() => updatecalc('*')}>*</button>
                    <button onClick={() => updatecalc('+')}>+</button>
                    <button onClick={() => updatecalc('-')}>-</button>
                    <button onclikc={deletelast}>DEL</button>
                </div>

                <div className="digits">
                    {createdigit()}
                    <button onClick={() => updatecalc('0')}>0</button>
                    <button onClick={() => updatecalc('.')}>.</button>
                    <button onClick={calculate}>=</button>
                </div>

            </div>
        </div>

    )
}
