'use client'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';

const GoogleLogin = () => {
    const params = useSearchParams()
    const callbackUrl = params.get("callbackUrl") || '/';
    const handelLogin = async () => {
        const result = await signIn('google', { redirect: false, callbackUrl })
        if (result.ok) {
            Swal.fire('success')
        } else {
            Swal.fire('error')
        }
    }
    return (
        <button onClick={handelLogin} className='btn btn-primary btn-outline'>
            Google
        </button>
    );
};

export default GoogleLogin;