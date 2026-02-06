import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="flex flex-col items-center gap-6 text-center">

                {/* Icon */}
                <BiErrorCircle size={140} className="opacity-70" />

                {/* Text */}
                <h1 className="text-4xl font-bold">
                    Page Not Found
                </h1>

                <p className="max-w-md opacity-60">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Action */}
                <Link href="/" className="btn btn-outline">
                    Go to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFound;
