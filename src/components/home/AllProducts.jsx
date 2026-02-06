import React from 'react';
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/server/product';

const AllProducts = async() => {
    const products = await getProducts()
    return (
        <div>
           
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {products.map((product, i) => <ProductCard key={i} product={product} />)}
            </div>
        </div>
    );
};

export default AllProducts;