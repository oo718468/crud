import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddPost = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      const response = await axios.post(
        "https://655ef5e2879575426b443c29.mockapi.io/api/users",
        data
      );

      if (response.status === 201) {
        console.log("Post added successfully");
        setShowSuccessAlert(true);

        navigate("/");
      } else {
        console.error("Failed to add post");
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-slate-700 p-8 shadow-md rounded-md">
        <h1 className="text-3xl text-black font-bold mb-4">Add Post</h1>
        {showSuccessAlert && (
          <div className="bg-green-500 text-black p-4 mb-4 rounded-md">
            Post added successfully!
          </div>
        )}
        <form onSubmit={handleSubmit(handleCreate)}>
          <div>
            <label className="text-black font-semibold block mb-1">
              name:
              <input
                id="name"
                placeholder="name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                {...register("name", { required: true, minLength: 5 })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="text-red-700">This is required</span>
              )}
              {errors.name && errors.name.type === "minLength" && (
                <span className="text-red-700">Min length 5 exceeded</span>
              )}
            </label>
          </div>
          <br />
          <div>
            <label className="text-black font-semibold block mb-1">
              username:
              <input
                id="name"
                type="text"
                placeholder="username"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                {...register("username", { required: "username is required" })}
              />
            </label>
          </div>
          <br />
          <div>
            <label className="text-black font-semibold block mb-1">
              email:
              <input
                type="email"
                placeholder="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                {...register("email", { required: "emil is required" })}
              />
            </label>
          </div>

          <label className="text-black font-semibold block mb-1">
            contact:
            <input
              type="number"
              placeholder="contact"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("contact", { required: "number is required" })}
            />
          </label>
          <br />
          <label className="text-black font-semibold block mb-1">
            time:
            <input
              type="time"
              placeholder="Time"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("createdAt", { required: "createdAt is required" })}
            />
          </label>
          <br />
          <label className="text-black font-semibold block mb-1">
            roleName
            <input
              type="text"
              placeholder="Rolename"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("roleName", { required: "roleName is required" })}
            />
          </label>
          <br />
          <label className="text-black font-semibold block mb-1">
            address
            <input
              type="text"
              placeholder="address"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("address", { required: "createdAt is required" })}
            />
          </label>
          <button
            className="bg-blue-500 mt-2 text-black py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            type="submit"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
