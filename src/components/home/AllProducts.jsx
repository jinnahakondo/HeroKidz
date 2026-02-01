'use client'
import React from 'react';
import products from '@/data/toys.json'
import ProductCard from '../cards/ProductCard';

const AllProducts = () => {
    return (
        <div>
           
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {products.map((product, i) => <ProductCard key={i} product={product} />)}
            </div>
        </div>
    );
};

export default AllProducts;