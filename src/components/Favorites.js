import React from 'react';
import { useState, useEffect } from "react";
import Title from "./ui/Title";
import Products from "api/products.json";
import ProductItem from "./ui/ProductItem";

export default function Favorites() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
    }, [])

    return (
        <div className="container mx-auto">
            <Title>Favoriler</Title>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
                {products.length && products.map((product,index) => <ProductItem key={index} product={product} /> )}
            </div>
        </div>
    )
}


