import React from "react";
import "../App.css";
import { ReactContext } from "../ReactContext";

function Image({ className, img }) {
  const [hover, setHover] = React.useState(false);
  const context = React.useContext(ReactContext);
  // console.log(context);
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img.url} className="image-grid" alt="" />
      {hover ? (
        <div>
          {img.isFavorite ? (
            <i
              className="ri-heart-fill favorite"
              onClick={() => context.toggleFavorite(img.id)}
            ></i>
          ) : (
            <i
              className="ri-heart-line favorite"
              onClick={() => context.toggleFavorite(img.id)}
            ></i>
          )}

          <i className="ri-add-circle-line cart"></i>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Image;
