import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
    const navigate= useNavigate();
    const [productDetails, setProductDetails] = useState({ sku: "", title: "", price: 0, brand: "", cat: "", description: "" });
    const [file, setFile] = useState("");
    const { sku, title, price, brand, cat, description } = productDetails;
   
    const handleChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })

    }
    const handleImage = (e) => {
        setFile(e.target.files[0]);
    }

    const config = {
        headers: {
            "Content-Type":"multipart/form-data",
            "auth-token": localStorage.getItem('auth-token')
          }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append("photo", file);
        formData.append("sku", sku);
        formData.append("title", title);
        formData.append("price", price);
        formData.append("brand", brand);
        formData.append("category", cat);
        formData.append("description", description);

        const response = await axios.post("/api/products/add", formData, config);
        console.log(response);
        if(response.data.status===401 || !response.data || response.data.success===false){
            console.log("failed to add product, something went wrong");
        }else{
            console.log(`Product added successfully with data: ${JSON.stringify(response.data.product)}`);
            navigate('/');
        }

    };
    useEffect(() => {
        if (!localStorage.getItem("auth-token")) {
          navigate("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    

    return (
        <section>
            <div className='container-lg container-fluid mt-3'>
                <h4>Add new product</h4>
                <div className='add_wrapper'>
                    <div className='details p-2'>Product Details</div>
                    <div className='container-lg'>
                        <form className='mt-4' onSubmit={handleSubmit}>
                            <div className='mb-4 row text-end'>
                                <label htmlFor="sku" className='col-4'><b>Product SKU*</b></label>
                                <input type="text" name='sku' required id='sku' onChange={handleChange} className='col-4' />
                            </div>
                            <div className='mb-4 row text-end'>
                                <label htmlFor="title" className='col-4'><b>Product Title*</b></label>
                                <input type="text" name='title' required id='title' onChange={handleChange} className='col-5' />
                            </div>
                            <div className='mb-4 row text-end'>
                                <label htmlFor="price" className='col-4'><b>Price*</b></label>
                                <span className='col-auto price-span'>Rs</span><input type="number" required name="price" id="price" onChange={handleChange} className='col-2 price-input' />
                            </div>
                            <div className='mb-4 row text-end'>
                                <label htmlFor="brand" className='col-4'><b>Brand*</b></label>
                                <input type="text" name='brand' required onChange={handleChange} id='brand' className='col-3' />
                            </div>
                            <div className='mb-4 row text-end'>
                                <label htmlFor="cat" className='col-4'><b>Category*</b></label>
                                <select className='col-5' name="cat" onChange={handleChange} id="cat" required>
                                    <option defaultValue={"electronics"}>Choose...</option>
                                    <option value={"electronics"}>Electronics</option>
                                    <option value={"fashion"}>Fashion</option>
                                    <option value={"games"}>Games</option>
                                </select>
                            </div>

                            <div className='mb-4 row text-end'>
                                <label htmlFor="file" className='col-4'><b>Upload Image*</b></label>
                                <input type="file" required onChange={handleImage} name='photo' id='file' className='col-5 image_load' />
                            </div>

                            <div className='mb-4 row text-end'>
                                <label htmlFor="desc" className='col-4'><b>Description*</b></label>
                                <textarea type="text" required id='desc' onChange={handleChange} name='description' className='col-6' />
                            </div>


                            <div className='mb-4 row text-end'>
                                <label className='col-4'><b></b></label>
                                <button className="btn col-auto" type="submit">Add Product</button>
                            </div>




                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Addproduct