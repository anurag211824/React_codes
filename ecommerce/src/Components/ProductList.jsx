import React ,{useContext} from "react";
import {ProductContext} from "../Context/ProductContext";

import {Product} from "./Product";

export const ProductList=()=>{
    const {products}= useContext
    (ProductContext);

    return(
        <div className="sm:grid-cols-2 lg:grid-cols-3 grid-cols-1">
            {
                // products.map((products)=>())
            }

        </div>
    )
}