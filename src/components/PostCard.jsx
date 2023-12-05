import React from 'react';

const PostCard = ({ title, body }) => {
  return (
    <div className="bg-black shadow-md rounded-md p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
