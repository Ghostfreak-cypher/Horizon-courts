import React from "react";

const Statball = (props) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center w-full justify-evenely gap-3">
        <h3 className="">{props.text}</h3>
        {Array.from({ length: props.balls }).map((_, i) => (
          <div key={i} className="h-4 w-4 rounded-full bg-blue-400"></div>
        ))}
      </div>
      <h3 className="">{props.number}</h3>
    </div>
  );
};

export default Statball;
