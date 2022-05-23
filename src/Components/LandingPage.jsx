import React from 'react';
import Banner from '../images/Banner3.jpg';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/users")
  }
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
              Share your D&D experience globally
            </h1>
            <p className="text-lg text-left">
              Join our growing community of Dungeon and Dragons players and find
              your next perfect party member! It takes seconds to set up your
              account find a group to play!<br></br>
              <br></br>
              Whether you are a Dungeon Master looking who is hosting a game or
              a new player learning the ropes, there is always a group for you!
            </p>
            <button className="bg-gradient-to-r from-pink-600 w-40 bg-red-500 p-2 px-3 text-lg  hover:bg-red-600 duration-300 hover:scale-110 rounded-md"
            onClick={clickHandler}>
              Find Users
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 py-16">
        <div className="max-w-md mb-16 text-left">
          <h2 className="text-5xl">
            Your next chapter, made possible by Dndinder.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-slate-600 text-left">
          <div className="">
            <h3 className="text-2xl font-bold mb-4">Create Groups</h3>
            <p className="text-lg">
              Create and search through both online and offline users to find
              the perfect match for you. As either a Dungeon Master or a player,
              online or face to face! <br></br>
              <br></br>
              Create your account, find the perfect group and begin your
              adventure. Dndinder aims to provide players with all the tools
              they need to share in the hobby we all love.
            </p>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold mb-4">About us</h3>
            <p className="text-lg">
              DnDinder is the brain child of James Barlow, William Mason, Ali
              Combes, Nick Wootton and Sheroze Mohammed. This project is the
              culmination of everything we learnt at more during our time on the
              Nortcoders bootcamp.
              <br></br> <br></br>
              We aim to continue upgrading this project over the coming months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
