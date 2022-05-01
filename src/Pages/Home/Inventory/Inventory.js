import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import {Link} from 'react-router-dom';
const Inventory = () => {
    const [product, setProduct] = useState({});
    const {itemId} = useParams();

    useEffect(() =>{
        const url = `http://localhost:5000/additem/${itemId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleUpdateQuantity = (e) =>{
        e.preventDefault();
        const quantity = parseInt(product.quantity) + parseInt(e.target.quantityValue.value);
        console.log(quantity);
        const url = `http://localhost:5000/additem/${itemId}`;
        fetch(url,{
            method: "PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify({quantity})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h2>This is inventory.</h2>
            <form onSubmit={handleUpdateQuantity} action="">
                <input type="number" name='quantityValue' placeholder='Product Quantity' />
                <input type="submit" value="Update stock" />
            </form>
            <h4>{product.name}</h4>
            <Link to={'/manage-inventory'}>Manage Inventorey</Link>
        </div>
    );
};

export default Inventory;