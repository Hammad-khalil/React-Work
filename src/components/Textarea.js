import React, {useState} from "react"

export default function Textarea(props) {
    const handleUpClick = () =>{
        console.log("Uppercase Clicked");
        setText("Done !!!")
    }
    const handleOnChange = () =>{
        console.log("Function Onchange !!");
    }
    const [text,setText] = useState("Enter Text Here");
    return (
    <div>
        <h1>{props.heading}</h1>
  <div className="form-group">
    <textarea className="form-control" onChange={handleOnChange} placeholder={text} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
    </div>
  )
}
