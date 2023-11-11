import React from "react";

const banner_image_src =
  "https://assets.aboutamazon.com/dims4/default/9ea648f/2147483647/strip/true/crop/1919x1080+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F2d%2F49%2Fabd3719b41aea4605bb51e4d8d72%2Fsubs-pre-order-consent-background-image-cb578173463.jpg";

const Banner = ({}) => {
  return (
    <div className=" h-[450px] w-full -mb-44" style={bannerStyle}>
      <div className=" h-full bg-gradient-to-b from-transparent from-20% to-100% to-black" />
    </div>
  );
};

const bannerStyle = {
  backgroundImage: `url(${banner_image_src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default Banner;
