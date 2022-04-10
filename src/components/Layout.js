import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";

const Layout = ({ data }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Header title={data?.hostname || "TEST HOST"} />

            <main className="mt-14 lg:mt-20 max-w-8xl w-10/12 mx-auto flex flex-col items-center">
                <Products products={data?.products} />
            </main>

            <Footer title={data?.host} />
        </motion.div>
    );
};

export default Layout;
