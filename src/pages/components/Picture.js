import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>作者: {data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        點此下載圖片:
        <a href={data.src.large} target="_blank">
          按一下
        </a>
      </p>
    </div>
  );
};

export default Picture;
