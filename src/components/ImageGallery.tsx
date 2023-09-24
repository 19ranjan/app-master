import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageGallery = () => {
  const settings = {
    dots: false, // Remove the dots navigation
    infinite: true, // Loop the images
    speed: 2000, // Slide transition duration in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the slideshow
    autoplaySpeed: 2000, // Auto-play speed in milliseconds
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="peace.jpg" alt="Image 1" width={"200px"} height={"200px"} />
        </div>
        <div>
          <img
            src="patient.png"
            alt="Image 2"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <img src="peace.jpg" alt="Image 3" width={"200px"} height={"200px"} />
        </div>
        <div>
          <img
            src="patient.png"
            alt="Image 1"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <img src="peace.jpg" alt="Image 1" width={"200px"} height={"200px"} />
        </div>
        <div>
          <img
            src="patient.png"
            alt="Image 1"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <img src="peace.jpg" alt="Image 1" width={"200px"} height={"200px"} />
        </div>
        <div>
          <img
            src="patient.png"
            alt="Image 1"
            width={"200px"}
            height={"200px"}
          />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

export default ImageGallery;
