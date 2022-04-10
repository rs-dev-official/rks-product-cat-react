import toast from "react-hot-toast";
import { BsWifiOff } from "react-icons/bs";
import { IoIosClose, IoIosWifi } from "react-icons/io";

const NetworkToast = (t) => {
    return (
        <div className="flex items-center justify-between space-x-8">
            <div className="flex items-center space-x-4">
                {t.type === "online" && (
                    <span>
                        <IoIosWifi className="antialiased text-2xl text-green-500" />
                    </span>
                )}
                {t.type === "offline" && (
                    <span>
                        <BsWifiOff className="antialiased text-2xl text-gray-400" />
                    </span>
                )}

                {t.type === "online" && (
                    <p className="text-gray-800 font-sans tracking-wider">
                        You are online now!
                    </p>
                )}
                {t.type === "offline" && (
                    <p className="text-gray-800 font-sans tracking-wider">
                        You are offline!
                    </p>
                )}
            </div>
            <button
                onClick={() => toast.dismiss(t.id)}
                className="p-2 text-2xl bg-gray-200 cursor-pointer rounded-full text-gray-800 "
            >
                <IoIosClose />
            </button>
        </div>
    );
};

export default NetworkToast;
