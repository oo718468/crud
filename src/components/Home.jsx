import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddPost from "./AddPost";
import Alert from "../stlyesTag/Alert";
import CopyEmailButton from "../stlyesTag/CopyEmil";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://655ef5e2879575426b443c29.mockapi.io/api/users"
        );
        if (response.status === 200) {
          setPosts(response.data);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = posts.filter(
    (item) =>
      (item.name &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.username &&
        item.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.roleName &&
        item.roleName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.email &&
        item.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.address &&
        item.address.toLowerCase().includes(searchTerm.toLowerCase()))
    // (item.createdAt && item.createdAt.includes(searchTerm.toString()))
  );

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(
        `https://655ef5e2879575426b443c29.mockapi.io/api/users/${postId}`
      );
      if (response.status === 200) {
        console.log("Post deleted successfully");
        setShowSuccessAlert(true);
        // Fetch posts again after deletion
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 2000);
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <div className="float-right">
        <Link to={"/add"} element={<AddPost />}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded w-28 mr-6">
            ADD
          </button>
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ maxWidth: 300, height: 20, margin: 5 }}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        />
        {showSuccessAlert && <Alert massage={"deleted succesfuly"} />}
        <ul>
          {filteredData.map((title) => (
            <li key={title.id}>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-60 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 ">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        username
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Contact
                      </th>
                      <th scope="col" className="px-6 py-3">
                        details
                      </th>
                      <th scope="col" className="px-6 py-3">
                        delate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-slate-900">
                      <td
                        className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white min-w-110 "
                        style={{ maxWidth: 60 }}
                      >
                        {title.name}
                      </td>
                      <td className="px-6 py-4 ho" style={{ maxWidth: 60 }}>
                        {title.username}
                      </td>
                      <td className="px-6 py-4" style={{ maxWidth: 60 }}>
                        <CopyEmailButton email={title.email} />
                      </td>
                      <td className="px-6 py-4" style={{ maxWidth: 60 }}>
                        {title.contact}
                      </td>
                      <td className="px-6 py-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded">
                          <Link to={`/post/${title.id}`}> details</Link>
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(title.id)}
                          className="bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded"
                        >
                          delate
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
