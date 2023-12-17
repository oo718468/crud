import React from "react";

function PostdatailsBig(props) {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="max-w-2xl mx-auto bg-slate-700 p-8 shadow-md rounded-md">
          <h2 className="text-3xl font-bold text-white mb-4">Post Title</h2>
          <p className="text-gray-500 text-sm mb-4"> Time {props.time}</p>

          {/* User Information */}
          <div className="mb-6">
            <p className="text-white font-semibold mb-1">Author:</p>
            <p className="text-white">{props.name}</p>
          </div>

          <div className="mb-6">
            <p className="text-white font-semibold mb-1">Username:</p>
            <p className="text-white">{props.username}</p>
          </div>

          <div className="mb-6">
            <p className="text-white font-semibold mb-1">Email:</p>
            <p className="text-white">{props.email}</p>
          </div>
          <div className="mb-6">
            <p className="text-white font-semibold mb-1">Contact:</p>
            <p className="text-white">{props.contact}</p>
          </div>
          <div className="mb-6">
            <p className="text-white font-semibold mb-1">roleName:</p>
            <p className="text-white">{props.roleName}</p>
          </div>
          <div className="mb-6">
            <p className="text-white font-semibold mb-1">address:</p>
            <p className="text-white">{props.address}</p>
          </div>
          <button className="bg-blue-500 flex relative bottom-5 text-white float-right py-2 px-4 rounded-md hover:bg-slate-900 focus:outline-none focus:ring focus:border-blue-300">
            {props.button}
          </button>
        </div>
      </div>
      ;
    </div>
  );
}

export default PostdatailsBig;
