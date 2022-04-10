import { BsGlobe, BsWindows } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

const LinkIconMobile = ({ type, href }) => {
    const clickHandler = () => {
        if (type === "WEB" || type === "PNL") {
            return window.open(`${href}`);
        }
        window.location.href = href;
    };
    return (
        <button
            className="text-2xl text-gray-200 hover:text-blue-300 transition-all duration-200"
            onClick={clickHandler}
        >
            {type === "PNL" && <FaCogs />}
            {type === "WEB" && <BsGlobe />}
            {type === "WIN" && <BsWindows />}
            {type === "APK" && <MdPhoneAndroid />}
        </button>
    );
};

export default LinkIconMobile;
