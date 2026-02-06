"use client"

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthButton = () => {
    const session = useSession()
    return (
        <div>
            {
                session?.status === 'authenticated' ? <>
                    <button onClick={()=>signOut()} className="btn btn-primary hover:btn-outline hover:bg-transparent hover:text-primary">Log out</button>
                </>
                    : <>
                    <Link href={'/login'} className="btn btn-primary hover:btn-outline hover:bg-transparent hover:text-primary">Login</Link>
                    </>
            }
        </div>
    );
};

export default AuthButton;