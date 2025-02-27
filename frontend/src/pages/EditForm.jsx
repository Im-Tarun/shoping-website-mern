import React from 'react'
import { Link } from 'react-router-dom';
import { GiTireIronCross } from "react-icons/gi";
import { useForm } from 'react-hook-form';


const EditForm = ({ updateData, onClose, defaultValues }) => {

    const {
        register, // Registers input fields
        handleSubmit, // Handles form submission
        setValue,
        watch,
        formState: { errors }, // Access form errors
    } = useForm({ defaultValues });


    return (
        <div className='fixed top-24 w-fit h-fit inset-0 mx-auto backdrop-blur-sm border shadow-2xl bg-white/50 rounded-lg  p-10 '>

            <button onClick={onClose} className="absolute right-1 z-10 top-1 py-1.5 px-2 rounded-sm" ><GiTireIronCross /></button>
            <form className="relative w-sm mx-auto " onSubmit={handleSubmit(updateData)}>
                {/* Product Name */}
                {/* {isSubmitting && <div className=' absolute bg-blue-200/0 right-52 top-32 z-10 '><Commet color="#32cd32" size="medium" /></div>} */}
                <div className="mb-4 relative">
                    <label htmlFor="productName" className="block text-gray-950 font-semibold mb-2">
                        Enter the Product Name
                    </label>
                    <input
                        id="productName"
                        autoComplete='off'
                        type="text"
                        {...register("productName", {
                            required: { value: true, message: "This is required" },
                            minLength: { value: 4, message: "The length should be greater than 4" },
                            maxLength: { value: 25, message: "The length should be smaller than 25" },
                        })}
                        className="w-full p-3 border border-gray-900 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                    {errors.productName && <p className="text-red-500 text-sm mt-1 absolute right-1">{errors.productName.message}</p>}
                </div>

                {/* Product Price */}
                <div className="mb-4 relative">
                    <label htmlFor="productPrice" className="block text-gray-950 font-semibold mb-2">
                        Enter the Product Price
                    </label>
                    <input
                        id="productpPrice"
                        autoComplete='off'
                        type="number"
                        step="any"
                        {...register("productPrice", {
                            required: { value: true, message: "This is required" },
                            min: { value: 0, message: "You can't put negaive values" }
                        })}
                        className="w-full  p-3 border border-gray-900 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                    {errors.productPrice && <p className="text-red-500 text-sm mt-1 absolute right-1">{errors.productPrice.message}</p>}
                </div>

                {/* Image Link */}
                <div className="mb-8 relative">
                    <label htmlFor="imgLink" className="block text-gray-950 font-semibold mb-2">
                        Enter the Image Link
                    </label>
                    <input
                        id="imgLink"
                        autoComplete='off'
                        type="link"
                        {...register("imgLink", {
                            required: { value: true, message: "This is required" },

                        })}
                        className="w-full p-3 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.imgLink && <p className="text-red-500 text-sm mt-1 absolute right-1">{errors.imgLink.message}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full mb-4 relative bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                    Submit
                </button>
                
                <div className='mx-auto w-fit text-purple-900 hover:underline'>
                    <Link to={`https://unsplash.com/s/photos/${watch("productName")}`} target="_blank" rel="noopener noreferrer" >Get {watch("productName")} Image from unsplash  </Link>
                </div>

            </form>
        </div>
    )
}

export default EditForm
