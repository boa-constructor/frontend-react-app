import React from 'react';
import Banner from '../images/Banner3.jpg';

const LandingPage = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className=" text-gray-100 bg-cover"
      >
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 gap-7  max-w-[600px]">
            <h2 className="text-xl uppercase font-bold text-left">
              Welcome to DnDinder
            </h2>
            <h1 className="text-6xl font-bold text-left">
              Share your DnD experience globally
            </h1>
            <p className="text-lg text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              laudantium cum quis eaque. Odit optio tenetur reiciendis quas
              dolor, vitae laudantium temporibus aliquid eligendi officiis
              incidunt nihil ipsam dignissimos unde.
            </p>
            <button className="bg-gradient-to-r from-pink-600 w-40 bg-red-500 p-2 px-3 text-lg  hover:bg-red-600 duration-300 hover:scale-110 rounded-md">
              Find Users
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 py-16">
        <div className="max-w-md mb-16 text-left">
          <h2 className="text-5xl">
            Your next chapter, made possible by matching
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 text-slate-600 text-left">
          <div className="">
            <h3 className="text-2xl font-bold mb-4">Share what you love</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, dolorum. Necessitatibus repudiandae consequatur
              reiciendis officiis perspiciatis ullam fugiat? .
            </p>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold mb-4">Create Groups</h3>
            <p className="text-lg">
              DnDinder gives you the tools to create private groups where you
              can message those matching your preferences. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. fuga, !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
