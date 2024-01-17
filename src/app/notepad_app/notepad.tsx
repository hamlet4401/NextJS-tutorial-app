import React from "react";

const Notepad = () => {
  return (
    <div className="size-full border-2">
      <div className="flex flex-col items-center size-full border-2">
        <div className="flex flex-col items-center justify-center size-full border-2 ">
          <div className="w-1/2 mb-2">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-primary w-full"
            />
          </div>
          <div className="flex justify-center items-center size-1/2 border-2">
            <textarea
              className="textarea textarea-primary size-full"
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notepad;
