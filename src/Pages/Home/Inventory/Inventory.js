import React, {useState, useEffect, useRef} from 'react';
import './inventory.css';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
const Inventory = () => {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useProducts();
    const {_id, name, img, description, price, quantity} = product;
    // console.log(quantity);
    let [updateQuantity, setUpdateQuantity] = useState(parseInt(quantity));
    // if(!updateQuantity){
    //     setUpdateQuantity(updateQuantity = quantity);
    // }
    const {itemId} = useParams();

    useEffect(() =>{
        const url = `http://localhost:5000/additem/${itemId}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[itemId])

    const handleUpdateQuantity = (e) =>{
        e.preventDefault();
        if(updateQuantity === null || updateQuantity === 0) {
            return;
        }
        let itemQuantity = product.quantity;
        if(itemQuantity === null || itemQuantity === ''){
            itemQuantity = 0;
        }
        const quantityValue = e.target.quantityValue.value;
        const newQuantityValue = parseInt(quantityValue);
        console.log(newQuantityValue);
        const newUpdateQuantity = parseInt(itemQuantity);
        console.log(newUpdateQuantity);
        const quantity = newUpdateQuantity + newQuantityValue;
        setUpdateQuantity(quantity);
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
        .then(data => {
            setUpdateQuantity(quantity);
            setProducts(data);
            e.target.reset();
        })
    }


    const handleDelevered = () =>{
        if(updateQuantity === 0 || updateQuantity === isNaN){
            return;
        }
        else{
        const quantity = parseInt(updateQuantity) - 1;
        setUpdateQuantity(quantity);
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
        .then(data => {
            setUpdateQuantity(quantity);
            setProducts(data);
        })
    }
    }
    return (
        <div className='inventory-container'>
            <h2 className='text-center text-warning my-5'>Welcome to inventory.</h2>
            <form className='form' onSubmit={handleUpdateQuantity} action="">
                <input type="number" name='quantityValue' placeholder='Product Quantity' required />
                <input className='btn btn-warning text-white' type="submit" value="Update stock" />
            </form>
            <div className='product d-flex mx-auto shadow-lg'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h2 className='text-warning'>{name}</h2>
                    <p>Description: {description}</p>
                    <h4>Price: <small>{price}</small></h4>
                    <h4>Quantity: <small>{!updateQuantity ? quantity : updateQuantity}</small></h4>
                    <h4>Suplier Name: <small>Suplier Name</small></h4>
                    <button onClick={handleDelevered} className='btn btn-warning text-white d-block ms-auto me-4'>Delevered</button>
                </div>
            </div>
            <Link className='btn btn-warning text-white d-block w-25 mt-5 mx-auto' to={'/manage-inventory'}>Manage Inventorey</Link>
        </div>
    );
};

export default Inventory;