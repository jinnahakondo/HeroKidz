import ProductCardSkeleton from '@/components/skeleton/ProdctCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
            {
                [...Array(8)].map((_, i) => <ProductCardSkeleton key={i } />)
            }

        </div>
    );
};

export default loading;