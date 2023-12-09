import React from "react"
import Button from "./Components/Button"




const App=()=>{
    return (
    <div>
    <h1>Ujjwal</h1>
     <p>i am a fruit lover</p>

      <Button
      fruitName="Banana"
      price="100"
      description="this is good fruit"
      />
      <Button
      fruitName="APPLE"
      price="10"
      description="this is fruit"
      />
      <Button
      fruitName="ORANGE"
      price="90"
      description="this is AWESOME fruit"
      />
      
     
      
      
     </div>
     )
}

export default App



// let str="{}"
// return(
// <div className="hello">
// <h1 style={{color:"red"}}>Hello World</h1>
// <p>This is a paragraph</p>
// <p>{str}</p>
// </div>)