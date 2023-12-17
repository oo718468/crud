import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Select from "react-select";

const EditPost = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue, control } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://655ef5e2879575426b443c29.mockapi.io/api/users/${id}`
        );
        if (response.status === 200) {
          const {
            name,
            username,
            email,
            contact,
            modifiedAt,
            roleName,
            address,
            createdAt,
          } = response.data;
          setValue("name", name);
          setValue("username", username);
          setValue("email", email);
          setValue("contact", contact);
          setValue("modifiedAt", modifiedAt);
          setValue("roleName", roleName);
          setValue("address", address);
        } else {
          console.error("Failed to fetch post data");
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPost();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `https://655ef5e2879575426b443c29.mockapi.io/api/users/${id}`,
        data
      );
      if (response.status === 200) {
        createdAt: new Date().toISOString();
        console.log("Post updated successfully");
        navigate("/");
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-gray-800 font-semibold block mb-1">
              name:
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                {...register("name", { required: "name is required" })}
              />
            </label>
          </div>
          <br />
          <div>
            <label className="text-gray-800 font-semibold block mb-1">
              username:
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                {...register("username", { required: "username is required" })}
              />
            </label>
          </div>
          <br />
          <div>
            <label className="text-gray-800 font-semibold block mb-1">
              email:
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                {...register("email", { required: "emil is required" })}
              />
            </label>
          </div>

          <label className="text-gray-800 font-semibold block mb-1">
            contact:
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("contact", { required: "number is required" })}
            />
          </label>
          <br />
          <label className="text-gray-800 font-semibold block mb-1">
            time:
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("createdAt", { required: "createdAt is required" })}
            />
          </label>
          <br />
          <label className="text-gray-800 font-semibold block mb-1">
            roleName
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("roleName", { required: "roleName is required" })}
            />
          </label>
          <br />
          <label className="text-gray-800 font-semibold block mb-1">
            address
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("address", { required: "createdAt is required" })}
            />
          </label>
          {/* <label>
          name:
          <input {...register("name", { required: "name is required" })} />
        </label>
        <br />
        <label>
          username:
          <input
            type="text"
            {...register("username", { required: "username is required" })}
          />
        </label>
        <br />
        <label>
          email:
          <input
            type="email"
            {...register("email", { required: "name is required" })}
          />
        </label>
        <br />
        <label>
          number:
          <input
            type="number"
            {...register("contact", { required: "number is required" })}
          />
        </label>
        <br />
        <label>
          time:
          <input
            type="time"
            {...register("modifiedAt", { required: "number is required" })}
          />
        </label>
        <br />
        <label>
          roleName
          <input
            type="text"
            {...register("roleName", { required: "roleName is required" })}
          />
        </label>
        <label>
          address
          <input
            type="text"
            {...register("address", { required: "address is required" })}
          />
        </label> */}
          <button
            className="bg-blue-500 mt-2 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            type="submit"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
