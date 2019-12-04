import React, { useState,useRef } from 'react';
import ReactDOM from 'react-dom';

const Header=()=>{
   return(
    <div>
     <h1>My Todo List:</h1>
     <table border='1'>
            <tr>
            <th>Details:</th>
            <th>Deadline:</th>
            <th>IsImportant:</th>
            <th>Done:</th>
            </tr>
            </table>
     {/* <h3>Details:----Deadline:----IsImportant:----Done:</h3> */}
    </div>
   ) 
}

const Line=(props)  =>{
    // return <p>{props.line.details}-------{props.line.deadline}--------------{props.line.IsImportant}----------------{props.line.done}</p>
    return(
        <div>
            <table border='Details'>
            <tr>
            <th>{props.line.details}</th>
            <th>{props.line.deadline}</th>
            <th>--------{props.line.IsImportant}-------</th>
            <th>--{props.line.done}--</th>
            </tr>
            </table>
        </div>
    )
}

const Grid=(props)  =>{
    return props.grid.map(line=> <Line line={line}/>)
}

export const Todo = () =>{
    const TodoList = [
        {
            details: "aaaaaaa",
            deadline: "01/01/01",
            IsImportant: "no",
            done: "yes"
        },
        {
            details: "bbbbbb",
            deadline: "02/02/02",
            IsImportant: "yes",
            done: "no"
        },
        {
            details: "cccccccc",
            deadline: "03/03/03",
            IsImportant: "no",
            done: "yes"
        },
        {
            details: "dddddd",
            deadline: "04/04/04",
            IsImportant: "yes",
            done: "no"
        },
        {
            details: "eeeeeeee",
            deadline: "05/05/05",
            IsImportant: "no",
            done: "yes"
        },
        {
            details: "ffffffffff",
            deadline: "06-06-06",
            IsImportant: "yes",
            done: "no"
        }
    ];
    return(
        <div>
            <Header/>
            <Grid grid={TodoList}/>
        </div>
    )
}    