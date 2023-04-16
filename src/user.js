import { useState } from "react";


export const User=()=>{

const [list, setList]=useState(
     [
        {name:'Gor',age:"10",email:"gor11.mail.com"},
        {name:'John',age:"10",email:"john11.mail.com"},
        {name:'Ani',age:"10",email:"ani.mail.com"},
        {name:'Karen',age:"10",email:"karen.mail.com"},
        {name:'anna',age:"10",email:"anna1.mail.com"},
    ]
)

return(
    <div>{
            list.map((i,j)=>{
               return(

                <div key={j}>
                    <table style={{borderCollapse:"collapse",width:"75%"}}>
                        <tr style={{paddingTop:"10px",paddingBottom:"10px",textAlign:"left",background:"#00b8ff",color:"white"}}>
                            <th >Name</th>
                            <th >Age</th>
                            <th >Email</th>
                        </tr>
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.email}</td>
                    
                        </tr>
                      
                        
                    </table>
                   
                </div>
               )
        })
    }</div>
     
    
)
    
       
}