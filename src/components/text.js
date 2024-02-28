import React, { useState } from 'react'
import PropTypes from 'prop-types';



export default function Text(props) {
    const [Text, setText] = useState('Enter text here');
    const OnClickHandler = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleOnChange = (event) => {
        console.log({ Text });
        setText(event.target.value);
    }
    const OnClickHandler1 = () => {
        let lowText = Text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted to lowercase", "success");
    }
    const speakText = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(Text);
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Speech synthesis is not supported in your browser.');
        }
        props.showAlert("Speaking...", "success");
    };

    return (
        <>
            <div className="mb-3 container mt-5" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.headings}</h1>

                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" style={{
                    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                    color: props.mode === 'light' ? 'black' : 'white',
                }} onChange={handleOnChange}  onFocus={() => setText('')}  value={Text}></textarea>
                <button className="btn btn-primary my-3" onClick={OnClickHandler}>Convert to UpperCase</button>
                <button className="btn btn-secondary my-3 mx-3" onClick={OnClickHandler1}>Convert to LowerCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={speakText}>
                    Read Aloud
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='my-2'>The text summary</h1>
                <p className='my-2'>{Text.split(" ").filter((ele) => { return ele.length !== 0 }).length} words and {Text.length} characters</p>
            </div>
        </>
    )
}
