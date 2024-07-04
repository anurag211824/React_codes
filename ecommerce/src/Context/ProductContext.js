import React,{createContext,useState} from 'react'
import { Children } from 'react';

export const ProductContext=createContext();

export const ProductProvider=({Children})=>{
    
    [
        { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10 },
        { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20 },
        { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 30 },
    ]
}