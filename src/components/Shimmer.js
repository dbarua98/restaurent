import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(15)
        .fill("")
        .map((e,index) => (
          <div key={index} className="w-52
  h-52
  bg-slate-300
  m-6"></div>
        ))}
    </div>
  );
};

export default Shimmer;
