"use client"
import { usePathname, useRouter } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = ({ product }) => {
    const isLogin = false;
    const router = useRouter();
    const path = usePathname()
    const add2Cart = () => {
        if (!isLogin) {
            router.push(`/login?callbackUrl=${path}`)
        }
    }


    return (

        <button onClick={() =>add2Cart()} className="btn btn-primary btn-wide btn-outline">
            <FaShoppingCart />
            Add to Cart
        </button>

    );
};

export default CartButton;