"use client";

import GoogleLogin from "@/components/buttons/GoogleLogin";
import { signIn } from "next-auth/react"
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Login() {
    // const [isLogin, setIsLogin] = useState(true);
    const [showPass, setShowPass] = useState(false);


    const params = useSearchParams()
    const callbackUrl = params.get("callbackUrl") || '/'

    const handelLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const result = await signIn("credentials", {
            email,
            password,
            //  redirect: false, 
            callbackUrl
        })
        console.log(result);
        if (result.ok) {
            Swal.fire({
                title: 'welcome!',
                text: 'welcome to hero kidz',
                icon: 'success',
                // confirmButtonText: 'Cool'
            })

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'email password is invalid',
                icon: 'error',
                // confirmButtonText: 'Cool'
            })
        }
    }

    return (
        <div className="min-h-[calc(100vh-376px)] flex items-center justify-center bg-base-100 px-4">
            <div className="card border border-base-300 w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">
                        Login
                    </h2>
                    <form onSubmit={(e) => handelLogin(e)}>
                        {/* Email */}
                        <label className="input input-bordered flex items-center gap-2 mt-3 w-full">
                            <FaEnvelope />
                            <input type="email" name="email" placeholder="Email" className="grow" />
                        </label>

                        {/* Password */}
                        <label className="input input-bordered flex items-center gap-2 mt-3 w-full">
                            <FaLock />
                            <input
                                name="password"
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
                        <button
                            type="submit"
                            className="btn btn-primary mt-4 w-full">
                            Login
                        </button>
                    </form>
                    <GoogleLogin />
                    {/* Toggle */}
                    <p className="text-center mt-4 text-sm">
                        Don't have an account?
                        <Link href={`/register?callbackUrl=${callbackUrl}`}
                            className="ml-2 link link-primary"
                        >
                            Register
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}
