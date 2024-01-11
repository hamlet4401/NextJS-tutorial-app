import React from "react";

const Page = () => {
  return (
    <div>
      <input
        type="file"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />
      <input type="text" placeholder="Type here" className="input w-full" />
    </div>
  );
};

export default Page;
