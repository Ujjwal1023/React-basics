// <!-- import React from react -->

const Button=({fruitName,price,description})=>{
    // console.log(props);
    
    return(
        <div>
       <h1>{fruitName}</h1>
       <p>{price}</p>
       <p>{description}</p>
       </div>

    )

}

export default Button;
