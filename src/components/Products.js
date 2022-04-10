import Product from "./Product";

const Products = ({ products }) => {
    console.log(products, "pr");
    return (
        <>
            <h2 className="font-bold tracking-wider font-ubuntu capitalize text-gray-100 text-lg md:text-xl lg:text-2xl p-2 border-b-2 border-blue-400">
                Our Products
            </h2>

            <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
                {!products ||
                    (products.length === 0 && (
                        <p className="text-white">No data found</p>
                    ))}

                {products &&
                    products.length !== 0 &&
                    products.map((p, i) => (
                        <Product
                            key={p?.SLcode || i}
                            appName={p?.Brand}
                            logo={p?.Logo}
                            links={p?.Links}
                        />
                    ))}
            </div>
        </>
    );
};

export default Products;
