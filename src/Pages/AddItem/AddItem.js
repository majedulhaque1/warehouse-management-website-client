import React from 'react';
import './AddItem.css';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAdditem = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const img = e.target.img.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;

        const item = {name, email, img, price, quantity, description};

        fetch('http://localhost:5000/additem',{
            method: "POST",
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='additem-container'>
            <form onSubmit={handleAdditem} className='additem-form' action="">
                <h2 className='text-warning text-center my-5'>Add New Item</h2>
                <input type="text" name='name' placeholder='Product Name' />
                <input type="email" name='email' value={user?.email} readOnly placeholder='Email' />
                <br />
                <input type="text" name='img' placeholder='Img URL' />
                <br />
                <input type="number" name='price' placeholder='Product Price' />
                <br />
                <input type="number" name='quantity' placeholder='Product Name' />
                <br />
                <textarea name="description" id="" cols="30" rows="2"></textarea>
                <br />
                <input className='btn btn-warning text-white' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;