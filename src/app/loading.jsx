import Logo from "@/components/layouts/Logo";

const GlobalLoading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-base-100">
            {/* Logo */}
            <Logo />

            {/* Spinner */}
            <span className="loading loading-spinner loading-lg"></span>

            {/* Text */}
            <p className="text-sm opacity-60">
                Loading, please wait...
            </p>
        </div>
    );
};

export default GlobalLoading;
