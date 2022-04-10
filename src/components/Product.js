import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LinkIcon from "./LinkIcon";
import LinkIconMobile from "./LinkIconMobile";
import { isMobile } from "react-device-detect";

const Product = ({ appName, logo, links }) => {
    const [showInfo, setShowInfo] = useState(false);
    const [title, setTitle] = useState(appName);

    const showInfoHandler = () => setShowInfo(true);
    const hideInfoHandler = () => setShowInfo(false);

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="w-xs"
        >
            <div
                className="relative rounded-2xl overflow-hidden antialiased cursor-pointer"
                onMouseEnter={showInfoHandler}
                onMouseLeave={hideInfoHandler}
            >
                <img
                    src={logo}
                    alt={appName}
                    className="object-contain max-w-full w-xs h-xs"
                />

                <AnimatePresence>
                    {!isMobile && showInfo && (
                        <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 1 }}
                            exit={{ opacity: 0, y: "100%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute w-full left-0 right-0 bottom-0 bg-black bg-opacity-90 cursor-pointer"
                        >
                            <div className="w-full h-full py-6 flex flex-col items-center">
                                <h1 className="text-center tracking-wider uppercase font-semibold py-2">
                                    {title}
                                </h1>

                                <div
                                    className="flex items-center justify-center gap-3 mt-2"
                                    onMouseLeave={() => setTitle(appName)}
                                >
                                    {links?.map((link, i) => (
                                        <LinkIcon
                                            key={i}
                                            setTitle={setTitle}
                                            type={link?.AppType}
                                            href={link?.PackLink}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <h1 className="font-semibold text-center mt-2 text-lg uppercase text-gray-200">
                {appName}
            </h1>

            {isMobile && (
                <div className="mt-4 flex items-center justify-center gap-4">
                    {links?.map((link, i) => (
                        <LinkIconMobile
                            key={i}
                            type={link?.AppType}
                            href={link?.PackLink}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Product;
