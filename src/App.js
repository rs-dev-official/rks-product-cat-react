import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import Layout from "./components/Layout";
import NetworkToast from "./NetworkToast";
import generateUniqueId from "./helpers/generateUniqueId";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "./Data";
AOS.init();

const App = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async (payload) => {
        const response = await fetch("https://bharat-lab.com/domain-info.php", {
            method: "POST",
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (data.status === "success") {
            return data;
        }
    };

    useEffect(() => {
        const existingID = window.localStorage.getItem("deviceID");
        const deviceID = !existingID ? generateUniqueId() : existingID;
        if (!existingID) window.localStorage.setItem("deviceID", deviceID);

        const height = window.screen.height;
        const width = window.screen.width;
        const DPR = window.devicePixelRatio.toFixed(2);
        const domain = window.location.hostname;

        // setIsLoading(true);

        // fetchData({ domain, deviceID, height, width, DPR })
        //     .then((res) => {
        //         document.title = res?.host || "";
        //         setItem(res);
        //         setIsLoading(false);
        //         return;
        //     })
        //     .catch((err) => {
        //         setIsLoading(false);
        //     });

        setItem(data);
    }, []);

    useEffect(() => {
        window.addEventListener("online", () => {
            toast.dismiss();
            toast(<NetworkToast type="online" />);
        });
        window.addEventListener("offline", () => {
            toast.dismiss();
            toast(<NetworkToast type="offline" />);
        });
    }, []);

    if (isLoading && !item) {
        return (
            <div className="min-h-screen grid place-items-center">
                <ClipLoader color="#06FACB" />
            </div>
        );
    }

    if (!isLoading && !item) {
        return (
            <div className="h-screen grid place-items-center">
                <h1 className="text-center text-2xl font-bold text-red-500 uppercase">
                    No products found
                </h1>
            </div>
        );
    }

    return (
        <>
            <Toaster
                position={!isMobile ? "bottom-left" : "bottom-center"}
                reverseOrder={false}
            />
            <Layout data={data} />
        </>
    );
};

export default App;
