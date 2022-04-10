const FooterLinks = ({ heading, links }) => {
    const onClick = (link) => {
        window.open(`${link?.href || ""}`);
    };

    return (
        <div>
            <h2 className="text-gray-600 font-semibold tracking-widest">
                {heading}
            </h2>
            <ul className="mt-4 space-y-2 text-gray-400 flex flex-col footernav lg:items-start text-base tracking-normal">
                {links.map((link, i) => (
                    <span
                        className="footerlink"
                        key={i}
                        onClick={() => onClick(link)}
                    >
                        {link?.link}
                    </span>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks;
