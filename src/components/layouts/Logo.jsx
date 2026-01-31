import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center gap-1'>
            <Image  src={'/assets/logo.png'} alt='hero kidz logo' width={50} height={50} />
            <h2 className='text-xl font-bold'>Hero <span className="text-primary">Kidz</span></h2>
        </div>
    );
};

export default Logo;