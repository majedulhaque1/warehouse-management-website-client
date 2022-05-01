import React from 'react';

const ManageInventories = () => {
    const handleAddItem = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const item = {name, price, quantity, img, description};
        console.log(item);
        fetch('http://localhost:5000/additem',{
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <h2>This is manage inventories.</h2>
            <form onSubmit={handleAddItem} action="">
                <input type="text" name='name' placeholder='Title' />
                <br />
                <input type="text" name='price' placeholder='Price' />
                <br />
                <input type="text" name='quantity' placeholder='Quantity' />
                <br />
                <input type="text" name='img' placeholder='imgurl' />
                <br />
                <textarea name="description" id="" cols="30" rows="10"></textarea>
                <br />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default ManageInventories;