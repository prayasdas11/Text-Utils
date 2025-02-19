import React, {useState} from 'react'

export default function Textform (props) {

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clickboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }

    const [text, setText] = useState('');

  return (
    <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>   
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'light', color:props.mode === 'dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div container="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters are written</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>

        </div>
    </>
  )
}
