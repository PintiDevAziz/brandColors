import React, { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'
const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="h-full p-8 w-[20rem] min-w-[20rem] border-r border-gray-400">
      <a
        href="#"
        className="logo text-2xl transition-colors hover:text-indigo-500 mb-8 block"
      >
        Brand<span className="font-bold">Colors</span>
      </a>
      <div className="des text-gray-400 mb-8">
        The biggest collection of official brand color codes around. Curated by{" "}
        <span className="transtion-all hover:text-indigo-500 cursor-pointer">
          @brandcolors
        </span>{" "}
        and friends.
      </div>
      <div className="external-links">
        <a
          href="#"
          className="font-bold transition-all hover:text-indigo-500 block mb-4"
        >
          Suggest a Brand
        </a>
        <a
          href="#"
          onClick={toggleModal}
          className="font-bold transition-all hover:text-indigo-500 block mb-4"
        >
          About Brand Colors
        </a>
      </div>
      <div className={`modal-overlay absolute top-0 left-0 bg-[rgba(255,255,255,0.8)] w-full transition-all transform scale-75 h-full flex ${modalOpen ? 'scale-100 visible opacity-100' : ' invisible opacity-0'} items-center justify-center`}>
        <div className="modal-content z-10 bg-white shadow-2xl w-[40rem] h-auto rounded p-16 relative">
          <h2 className="mb-5 font-bold text-gray-700 text-xl">
            About BrandColors
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            BrandColors was created by{" "}
            <span className="font-bold text-gray-700">DesignBombs</span>. The
            goal was to create a helpful reference for the brand color codes
            that are needed most often.
          </p>
          <p className="text-gray-500 text-sm">
            It's been featured by Smashing Magazine, CSS-Tricks, Web Design
            Depot, Tuts+, and over{" "}
            <span className="font-bold text-gray-700">2 million pageviews</span>
            . There are now over{" "}
            <span className="font-bold text-gray-700">600 brands</span> with{" "}
            <span className="font-bold text-gray-700">1600 colors</span> and the
            collection is always growing.
          </p>
          <button className="absolute top-4 right-4 outline-none" onClick={toggleModal}>
            <AiOutlineClose className="bg-gray-300 h-6 w-6"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
