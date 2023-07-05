import React from "react";

const Images = ({ imgs = [{ url: "" }] }) => {
  console.log(imgs);
  return (
    <div>
      {imgs.map((img) => {
        return (
          <img src={img.url} className="img-responsive" alt={img.filename} />
        );
      })}
    </div>
  );
};

export default Images;
