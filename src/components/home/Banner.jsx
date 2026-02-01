import { banglaFont } from '@/app/layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center '>
            {/* Banner content  */}
            <div className='flex-1 space-y-5'>
                <h2 className={`${banglaFont.className} text-3xl md:text-5xl lg:text-7xl font-bold leading-snug`}>আপনার শিশুকে দিন একটি <span className='text-primary'>সুন্দর ভবিষ্যৎ</span></h2>
                <p>Get Up to 15% Discount For Every Toy</p>
                <Link href={'/products'} className='btn btn-primary '>Explore Products</Link>
            </div>
            {/* Banner image  */}
            <div className='flex-1'>
                <Image alt='Get Up to 15% Discount For Every Toy' src={'/assets/hero.png'} width={500} height={400} className='w-full ' />
            </div>
        </div>
    );
};

export default Banner;