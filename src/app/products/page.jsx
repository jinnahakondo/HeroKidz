import AllProducts from '@/components/home/AllProducts';
import { getProducts } from '@/server/product';
import React from 'react';

const Products = async () => {
    const products = await getProducts() || []
    return (
        <div>
            <AllProducts />
        </div>
    );
};

export default Products;