import React, { useState } from "react";


export default function TdlList(props) {
    const textChange = (event) =>{
        setText(event.target.value)
       
    }
    const upperCase = () =>{
     let inputTxt = text.toUpperCase();
        setText (inputTxt) 
    }
    const lowerCase = () =>{
       let inputTxt = text.toLocaleLowerCase();
       setText(inputTxt)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea value={text} className="form-control" onChange={textChange} id="textBox" rows="5"></textarea>
                </div>
                <div className="d-flex ms-5 gap-5">
                <div><button className="btn btn-primary" onClick={upperCase}>change to UpperCase</button></div>
               <div> <button className="btn btn-primary" onClick={lowerCase}>change to UpperCase</button></div>
                </div>
            </div>
        </>
    );
}
