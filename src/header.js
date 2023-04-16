 import { useState } from "react";

  export const Header=()=>{
    const [name,setName]=useState();
    const changeName=(event)=>{
    setName(event.target.value)
}
const handleClik=event=>{
   event.preventDefault();
    alert( name )

}

    return(
        <div style={{display:"flex",
        alignItems:"center",
            width:"100%",
        height:"100px",
    background:"#d5d4d4",
}}>
   
        <div style={{marginLeft:"10px"}}>
            <input type="text" style={{height:"22px",border:"2px solid #00b8ff",borderRadius:"10px"}} 
            onChange={(event)=>changeName(event)}/>
       

        <label  style={{marginLeft:"7px"}}for="name">My Name from input</label></div>
        <div style={{marginLeft:"70%"}}>
            <button onClick={handleClik}
            type="button" style={{width:"100px",
            height:"37px"
            ,borderRadius:"18px", 
            background:"#00b8ff",
            color:"white",
            border:"none"}}>Sign in</button></div>
        
       
    
</div>
    )
  } 