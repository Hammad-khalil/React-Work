import React, {useState} from "react"

export default function Textarea(props) {

    const clearClick = () =>{ 
      setText("");
    }

    const handleLowClick = (e) =>{
      setText(text.toLowerCase().trim());

    }
    const handleUpClick = () =>{
        // console.log("Uppercase Clicked");
        setText(text.toUpperCase().trim());
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
        // console.log("Function Onchange !!");
    }
    const [text,setText] = useState("Search");
    return (
      <>
    <div className="container">
        <h1>{props.heading}</h1>
  <div className="form-group">
    <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className="btn btn-danger mx-3" onClick={clearClick}>Clear Text</button>
  <button className="btn btn-success mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-success my-5" onClick={handleLowClick}>Convert To Lowercase</button>
    </div>
    <div className="container">
      <h4>Your Text have {text.length} Characters and {text.split(" ").length} Words</h4>
      <h4>Readable in {0.008*text.split(" ").length} Minutes</h4>
    </div>
    <div className="container">
    <h4 className="heading">Preview of your text :-</h4>
    <h4>{text}</h4>

      </div>
    </>
  )
}
