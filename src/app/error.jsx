"use client";

import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";

const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="flex flex-col items-center gap-6 text-center">

                {/* Icon */}
                <BiErrorCircle size={140} className="opacity-70" />

                {/* Text */}
                <h1 className="text-4xl font-bold">
                    Something went wrong
                </h1>

                <p className="max-w-md opacity-60">
                    An unexpected error occurred. Please try again or go back home.
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                    <button
                        onClick={() => reset()}
                        className="btn"
                    >
                        Try Again
                    </button>

                    <Link href="/" className="btn btn-outline">
                        Go to Home
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;
