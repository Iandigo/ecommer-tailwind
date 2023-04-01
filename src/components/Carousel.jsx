import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Carousel = () => {
  const slides = [
    {
      url: "/assets/pic1.jpeg",
    },
    {
      url: "/assets/pic2.jpeg",
    },
    {
      url: "/assets/pic3.jpeg",
    },

    {
      url: "/assets/pic4.jpeg",
    },
    {
      url: "/assets/pic5.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="pt-20 w-full h-2/3">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <button className="w-[60px] absolute top-[330px] left-0">
        <ChevronLeftIcon className="text-white" onClick={prevSlide} />
      </button>
      <button className="w-[60px] absolute top-[310px] right-0">
        <ChevronRightIcon className="text-white" onClick={nextSlide} />
      </button>
      <div className="invisible sm:visible text-white p-[20px] text-left absolute top-[300px] left-[100px] bg-title">
        <h1 className="text-primary-100">-- NEW ITEMS</h1>
        <h1 className="text-6xl">Summer Sale</h1>
        <p className="text-primary-500 underline">Discover More</p>
      </div>
    </div>
  );
};

export default Carousel;
