import { BsGlobe, BsWindows } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

const LinkIcon = ({ type, setTitle, href }) => {
    const clickHandler = () => {
        if (type === "WEB" || type === "PNL") {
            return window.open(`${href}`);
        }
        window.location.href = href;
    };

    const changeTitle = () => {
        if (type === "PNL") return setTitle("Control Panel");
        if (type === "WEB") return setTitle("Web Portal");
        if (type === "WIN") return setTitle("Windows App");
        if (type === "APK") return setTitle("Android App");
    };

    return (
        <button
            onMouseEnter={changeTitle}
            onClick={clickHandler}
            className="text-2xl text-gray-200 hover:text-blue-400 transition-all duration-200"
        >
            {type === "PNL" && <FaCogs />}
            {type === "WEB" && <BsGlobe />}
            {type === "WIN" && <BsWindows />}
            {type === "APK" && <MdPhoneAndroid />}
        </button>
    );
};

export default LinkIcon;
