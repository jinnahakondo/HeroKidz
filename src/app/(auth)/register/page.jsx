'use client'
import GoogleLogin from '@/components/buttons/GoogleLogin';
import { postUser } from '@/server/auth';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const params = useSearchParams()
    const callbackUrl = params.get('callbackUrl') || '/'
    //handel resister form
    const handelRegister = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }

        const result = await postUser(user)
        if (result.acknowledged) {
            alert('account created successfuly. please login')
            router.push('/login')
        }
        // console.log(user);
    }
    return (
        <div className="min-h-[calc(100vh-376px)] flex items-center justify-center bg-base-100 px-4">
            <div className="card border border-base-300 w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">
                        Create Account
                    </h2>


                    <form onSubmit={(e) => handelRegister(e)}>
                        {/* Name  */}
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <FaUser />
                            <input type="text" name='name' placeholder="Full Name" className="grow" />
                        </label>

                        {/* Email */}
                        <label className="input input-bordered flex items-center gap-2 mt-3 w-full">
                            <FaEnvelope />
                            <input name='email' type="email" placeholder="Email" className="grow" />
                        </label>

                        {/* Password */}
                        <label className="input input-bordered flex items-center gap-2 mt-3 w-full">
                            <FaLock />
                            <input
                                name='password'
                                type={showPass ? "text" : "password"}
                                placeholder="Password"
                                className="grow"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="text-gray-500"
                            >
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </label>

                        {/* Button */}
                        <button type='submit' className="btn btn-primary mt-4 w-full">
                            Register
                        </button>
                    </form>
                    <GoogleLogin />
                    {/* Toggle */}
                    <p className="text-center mt-4 text-sm">
                        Already have an account?
                        <Link href={`/login?callbackUrl=${callbackUrl}`}
                            className="ml-2 link link-primary"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;