import React from "react";

const Product=({product})=>{
    return(
        <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        </div>
    )
}