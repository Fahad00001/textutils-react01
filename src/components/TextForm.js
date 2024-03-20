import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase()
    
        setText(newText)
        props.showAlert("converted to uppercase" ,"success");
    }
    const handleLoclick=()=>{
      // console.log("uppercase was clicked" + text);
      let newText=text.toLowerCase()
  
      setText(newText)
      props.showAlert("converted to lowercase" ,"success");
  }
  const handleClearclick=()=>{
    // console.log("uppercase was clicked" + text);
    let newText=""

    setText(newText)
    props.showAlert("clear text" ,"success");
}




    const handleOnchange=(event)=>{
      // console.log("on change");
      setText(event.target.value)
    }



    const handleCopy=()=>{
      var text=document.getElementById("mybox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("copy to clipboard" ,"success");
    }



    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("remove extra spaces" ,"success");
    }

    
     const[text, setText]=useState("")  
   
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
       
        <textarea
          className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoclick}>convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearclick}>clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>copytext</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extraspaces</button>
      
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your summary</h2>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008* text.split(" ").length}</p>
      <h2>prevew</h2>
      <p>{text.length>0?text:"Enter something in the textbox  above to prevew it here"}</p>
    </div>
    </>
  
  );
}
