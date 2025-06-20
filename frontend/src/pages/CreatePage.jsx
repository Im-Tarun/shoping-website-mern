import React from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { Commet } from 'react-loading-indicators';
import { NavLink } from 'react-router-dom';
import { GiTireIronCross } from "react-icons/gi";
import { useEffect } from 'react';

const CreatePage = () => {
  const {
    register, // Registers input fields
    handleSubmit, // Handles form submission
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting }, // Access form errors
  } = useForm();

  const name = watch("productName", "")

  useEffect(() => {
    if (name) {
      setValue("productName", name.charAt(0).toUpperCase() + name.slice(1), {
        shouldValidate: true,
      })}
  }, [name]);


  const addProduct = async(productObj) => {
    const res = await fetch("api/products", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(productObj)
    })
    const data = await res.json()
    console.log(data)
  }
  

  const onSubmit = async (productObj) => {
    toast.promise(
      addProduct(productObj),
      {
        pending: "Fetching data...",
        success: "Pruduct added successfully!",
        error: "Failed to fetch data.",
      }) 
      reset()
  }


  return (
    < >
      <div className="absolute  inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(130%_113%_at_50%_-10%,#eaeaea_40%,#00b0ffba_100%)]"></div>
      <div className='flex justify-center pt-24 relative'>

        <form className="  w-lg mx-4 my-9 bg-white p-6 shadow-2xl rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <NavLink to="/" className="absolute right-1 top-1 py-1.5 px-2" ><GiTireIronCross /></NavLink>
          {/* Product Name */}
          {isSubmitting && <div className=' absolute bg-blue-200/0 right-52 top-32 z-10 '><Commet color="#32cd32" size="medium" /></div>}
          <div className="mb-4 relative">
            <label htmlFor="productName" className="block text-gray-700 font-semibold mb-2">
              Enter the Product Name
            </label>
            <input
              id="productName"
              autoComplete='off'
              autoCapitalize="sentences"
              type="text"
              {...register("productName", {
                required: { value: true, message: "This is required" },
                minLength: { value: 4, message: "The length should be greater than 4" },
                maxLength: { value: 25, message: "The length should be smaller than 25" },
              })}
              className="w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.productName && <p className="text-red-500 text-sm mt-1 absolute right-1">{errors.productName.message}</p>}
          </div>

          {/* Product Price */}
          <div className="mb-4 relative">
            <label htmlFor="productPrice" className="block text-gray-700 font-semibold mb-2">
              Enter the Product Price
            </label>
            <input
              autoComplete='off'
              id="productpPrice"
              type="number"
              step="any"
              {...register("productPrice", {
                required: { value: true, message: "This is required" },
                min: { value: 0, message: "You can't put negaive values" }
              })}
              className="w-full  p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.productPrice && <p className="text-red-500 text-sm mt-1 absolute right-1">{errors.productPrice.message}</p>}
          </div>

          {/* Image Link */}
          <div className="mb-8 relative">
            <label htmlFor="imgLink" className="block text-gray-700 font-semibold mb-2">
              Enter the Image Link
            </label>
            <input
              id="imgLink"
              autoComplete='off'
              type="link"
              {...register("imgLink", {
                required: { value: true, message: "This is required" },

              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.imgLink && <p className="text-red-500 text-sm mt-1 absolute right-1">{errors.imgLink.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full mb-8 relative bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Submit
          </button>
          <ToastContainer
            position="bottom-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
            theme="light"
            transition={Flip}
          />
          <div className='mx-auto w-fit text-purple-900 hover:underline'>
            <NavLink to={`https://unsplash.com/s/photos/${watch("productName")}`} target="_blank" rel="noopener noreferrer" >Get {watch("productName")} Image from unsplash  </NavLink>
          </div>
        </form>

      </div>
    </>
  )
}

export default CreatePage