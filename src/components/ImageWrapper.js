import React from "react";

const ImageWrapper = () => {
  return (
    <>
      <div className="image-wrapper">
        <form>
          <input type="file" className="custom-file-input" name="image" />
        </form>
      </div>
    </>
  );
};

export default ImageWrapper;
