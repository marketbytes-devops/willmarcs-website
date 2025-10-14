import React from "react";
import HorseWhite from "@/components/Icons/HorseWhite";

const Form = () => {
  return (
    <div className="w-full md:w-1/2 p-4 ml-0 sm:ml-4">
      <h2 className="secondary-font text-xl md:text-4xl font-bold mb-4">
        Ready to Roll?
      </h2>
      <p className="primary-font text-base md:text-[18px] text-[#555555] mb-4 max-w-full sm:max-w-md">
        Tell us your idea today. We&apos;ll be ready to shoot in hours, not weeks.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="primary-font w-full p-2 mb-4 border border-gray-300 rounded bg-black/5 outline-none"
          placeholder="Full name"
        />
        <input
          className="primary-font w-full p-2 mb-4 border border-gray-300 rounded bg-black/5 outline-none"
          placeholder="Phone Number"
        />
      </div>
      <input
        className="primary-font w-full p-2 mb-4 border border-gray-300 rounded bg-black/5 outline-none"
        placeholder="Work email"
      />
      <input
        className="primary-font w-full p-2 mb-4 border border-gray-300 rounded bg-black/5 outline-none"
        placeholder="What do you need?"
      />
      <textarea
        className="primary-font w-full p-2 mb-4 border border-gray-300 rounded bg-black/5 outline-none resize-none h-24"
        placeholder="Project summary"
      ></textarea>
      <button
        className="w-full flex items-center justify-center text-white p-2 rounded transition-all duration-300 hover:opacity-90"
        style={{
          background: "linear-gradient(to right, #9AD59C, #17921C)",
        }}
      >
        <span className="mr-1">Send Enquiry</span>
        <span>
          <HorseWhite />
        </span>
      </button>
    </div>
  );
};

export default Form;
