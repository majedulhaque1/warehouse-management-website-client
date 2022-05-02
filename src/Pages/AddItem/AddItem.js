import React from 'react';
import './AddItem.css';

const AddItem = () => {
    return (
        <div className='additem-container'>
            <form className='additem-form' action="">
                <h2 className='text-primary text-center my-5'>Add New Item</h2>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='img' placeholder='Img URL' />
                <br />
                <input type="number" name='price' placeholder='Product Price' />
                <br />
                <input type="number" name='quantity' placeholder='Product Name' />
                <br />
                <textarea name="description" id="" cols="30" rows="2"></textarea>
                <br />
                <input className='additem-btn' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;