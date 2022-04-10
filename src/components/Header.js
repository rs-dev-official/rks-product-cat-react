const Header = ({ title }) => {
    return (
        <header className="h-20 bg-dark-primary flex justify-center lg:justify-start items-center lg:pl-16">
            <h1
                onClick={() => (window.location.href = "/")}
                className="text-gray-200 font-semibold italic text-2xl tracking-wider font-serif antialiased lg:text-3xl select-none cursor-pointer"
            >
                {title}
            </h1>
        </header>
    );
};

export default Header;
