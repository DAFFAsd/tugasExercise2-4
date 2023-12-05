import React from 'react';
import PostList from './PostList'; 

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome To my Amateur Page!!!!</h1>
        <p className="text-lg text-white mb-8">Mari cek apa yang ada di web ini</p>
        <div className="flex justify-center">
          <a
            href="about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
          <PostList />
        </div>
  );
}

export default LandingPage;
