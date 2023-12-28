import React, { useState } from 'react'


function TextForm(props) {

    const handleUpClick = (event) => {
        setText(Text.toUpperCase());
    }

    const handleDownClick = (event) => {
        setText(Text.toLowerCase());
    }

    const handleOnChange = (event) => {
        // console.log("change function clicked");
        setText(event.target.value);
    }

    const clearText = () => {
        setText("");
    }

    const copyText = () => {

        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let word = Text.split(/[ ]+/);
        setText(word.join(" "));
    }

    const [Text, setText] = useState("Enter Your Text Here")

    // text = "Hello there i am updating text here. "   // wrong way to set usestate. 
    // setText("Hello there i am updating text here. ")   // correct way yo use setstate.
    return (
        <>

            <div className="container">
                <h2>{props.heading} </h2>
                <div className="mb-3 my-3">
                    {/* <label for="mybox" class="form-label"></label> */}
                    <textarea value={Text} className="form-control" onChange={handleOnChange} style={{backgroundColor: props.Mode==="light"?"white":"#212529", color: props.Mode==="light"?"#212529":"white"}} id="mybox" rows="8"></textarea> 
                    <button className="btn btn-primary my-3 " onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleDownClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary " onClick={clearText}>Clear Text</button>
                    <button className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container">
                <h2>Your text Summary</h2>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length}</p>
                <h3>Preview</h3>
                <p>{Text}</p>
            </div>
        </>
    )
}

export default TextForm