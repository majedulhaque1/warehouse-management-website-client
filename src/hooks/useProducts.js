import { useEffect, useState } from "react";
const useProducts = () =>{
    const [products, setProducts] = useState([]);


    // https://quiet-brushlands-43785.herokuapp.com/
    useEffect(() =>{
        fetch('http://localhost:5000/additem')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [products])

    return [products, setProducts];
}
export default useProducts;