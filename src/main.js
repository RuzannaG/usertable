import { useState } from "react";

export const  Main =()=>{
    const [text,setText]=useState();
    const changeText=(event)=>{
        setText(event.target.value)
}
const handleClik=event=>{
   event.preventDefault();
    alert( text )

}

    return(
        <div style={{display:"flex",
        alignItems:"center",
            width:"100%",
        height:"100px"}}>
            <button onClick={handleClik} style={{width:"80px",
            height:"32px"
            ,borderRadius:"12px", 
            background:"#00b8ff",
            color:"white",
            border:"none",
            marginLeft:"10px"}}>Search</button>
            <input type="text" onChange={(event)=>changeText(event)} style={{height:"22px",border:"2px solid grey",borderRadius:"10px",marginLeft:"10px"}} />
            <label for="text" style={{marginLeft:"7px"}}>Typed Text from input</label>
        </div>
    )
}