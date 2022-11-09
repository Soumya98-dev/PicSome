import React from "react";

import Image from "../components/Image";
import { getClass } from "../util/index";
import { ReactContext } from "../ReactContext";

function Photos() {
  const context = React.useContext(ReactContext);
  // console.log(context.allPhotos);
  const imageMap = context.allPhotos.map((item, i) => (
    <Image key={item.id} img={item} className={getClass(i)} />
  ));
  // console.log(imageMap);
  return <main className="photos">{imageMap}</main>;
}

export default Photos;
