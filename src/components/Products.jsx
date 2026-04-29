import { FaExclamation, FaExclamationTriangle } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {

    const isLoading = false;
    const errorMessage = "";

    const {products} = useSelector(
        (state) => state.products
    )
    const dispatch = useDispatch();
    // const products = [
    //     {
    //     productId: 652,
    //     productName: "Iphone Xs max",
    //     image: "https://placehold.co/600x400",
    //     description: "Experience the latest in mobile technology with advance level features",
    //     quantity: 5,
    //     price: 1450.0,
    //     discount: 10.0,
    //     specialPrice: 1305.0,
    //     },
    //     {
    //     productId: 654,
    //     productName: "MacBook Air M2s",
    //     image: "https://placehold.co/600x400",
    //     description: "Ultra-thin laptop with Apple's M2 chip",
    //     quantity: 0,
    //     price: 2250.0,
    //     discount: 10.0,
    //     specialPrice: null,
    //     }
    // ];

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2x1:w-[90%] 2xl:mx-auto">
            {
                isLoading ? (<p>It is loading...</p>) :
                errorMessage ? (
                    <div className="flex justify-center items-center h-50">
                        <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                        <span className="text-slade-800 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
                    <div className="min-h[700px]">
                        <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                            {products && products.map((item, i) => 
                                <ProductCard key={i} {...item}/>
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Products;