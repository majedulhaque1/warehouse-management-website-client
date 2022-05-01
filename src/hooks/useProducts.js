import { useEffect, useState } from "react";
const useProducts = (itemId) =>{
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/additem')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return [products, setProducts];
}
export default useProducts;