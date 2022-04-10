import FooterLinks from "./FooterLinks";

const Footer = ({ title }) => {
    return (
        <footer className="bg-gray-900 mt-16">
            <div className="w-10/12 mx-auto flex flex-col items-center  lg:flex-row lg:justify-center lg:items-start gap-8 pt-14">
                <div className="text-center lg:text-left grid justify-items-center items-start sm:grid-cols-2 lg:grid-cols-4 w-11/12 gap-10">
                    <FooterLinks
                        heading="TOOLS"
                        links={[
                            { link: ".NET SP2", href: "/" },
                            { link: "Printer", href: "/" },
                            { link: "AnyDesk", href: "/" },
                            { link: "WinRAR", href: "/" },
                        ]}
                    />

                    <FooterLinks
                        heading="SUPPORT"
                        links={[
                            { link: "F.A.Q", href: "/support/faq" },
                            { link: "Cookies", href: "/support/Cookies" },
                            {
                                link: "Terms of Use",
                                href: "/support/termsofuse",
                            },
                            {
                                link: "Privacy Policy",
                                href: "/support/privacypolicy",
                            },
                        ]}
                    />

                    <FooterLinks
                        heading="ABOUT"
                        links={[
                            { link: "Email Us", href: "/email" },
                            { link: "Support", href: "/support" },
                            { link: "Sales", href: "/sales" },
                            { link: "About Us", href: "/about" },
                        ]}
                    />

                    <FooterLinks
                        heading="OTHERS"
                        links={[
                            { link: "License", href: "/license" },
                            { link: "Join Us", href: "/join" },
                            { link: "Disclaimer", href: "/disclaimer" },
                        ]}
                    />
                </div>
            </div>
            <div className="w-full bg-gray-800 mt-12 py-6 text-center text-gray-500  tracking-wider">
                {title} © All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
