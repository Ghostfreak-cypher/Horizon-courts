import React from "react";

const Card1 = () => {
  return (
    <div className="h-80 sm:h-96 w-full rounded-4xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between bg-[#0D1A2E]">
      <div className="icon">icon</div>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Quas perferendis officiis aperiam
        doloremque ipsam enim doloribus itaque iste? Animi recusandae laborum
        sed dignissimos delectus labore.
      </p>
      <div className="bottom flex items-center gap-3 sm:gap-4">
        <div className="on-off h-5 w-14 rounded-3xl flex items-center justify-end p-1 bg-blue-400">
          <div className="circle h-4 w-4 rounded-full flex items-center justify-center bg-white mt-0.5 ml-1">
            <div className="mini-circle h-2 w-2 rounded-full bg-blue-400"></div>
          </div>
        </div>
        <h4 className="text-sm sm:text-base">Game mode</h4>
      </div>
    </div>
  );
};

export default Card1;
