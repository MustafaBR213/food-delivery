import React, { useState, useEffect } from "react";
import './ImageSlider.css';

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      title: "Malacca",
      image: "https://images.pexels.com/photos/4047055/pexels-photo-4047055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Cameron Highland",
      image: "https://images.pexels.com/photos/4047054/pexels-photo-4047054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "New Delhi",
      image: "https://images.pexels.com/photos/3985169/pexels-photo-3985169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Ladakh",
      image: "https://images.pexels.com/photos/6285356/pexels-photo-6285356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Nubra Valley",
      image: "https://images.pexels.com/photos/8540138/pexels-photo-8540138.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
  ];
  const totalSlides = slides.length;
  const slideWidth = 100 / totalSlides; // Width of each slide in percentage
  const slideInterval = 3000; // Interval between slides in milliseconds

  useEffect(() => {
    const slideTimer = setInterval(prevSlide, slideInterval);
    return () => clearInterval(slideTimer);
  }, [slideIndex]);

  const showSlide = (index) => {
    setSlideIndex(index);
  };

  const prevSlide = () => {
    let newIndex = slideIndex - 1;
    if (newIndex < 0) {
      newIndex = totalSlides - 1; // Reset index to loop back to the last slide
    }
    setSlideIndex(newIndex);
  };

  return (
    <div className="wrapper">
      {slides.map((slide, index) => (
        <input
          key={`slide${index + 1}`}
          type="radio"
          name="slider"
          id={`slide${index + 1}`}
          checked={index === slideIndex}
          onChange={() => showSlide(index)}
        />
      ))}
      <div className="slider-wrapper">
        <div className="inner" style={{ width: `${totalSlides * 100}%`, transform: `translateX(${slideIndex * slideWidth}%)` }}>
          {slides.map((slide, index) => (
            <article key={`slideContent${index}`} style={{ width: `${slideWidth}%` }}>
              <div className={`info ${index % 2 === 0 ? "top-left" : "bottom-right"}`}>
                <h3>{slide.title}</h3>
              </div>
              <img src={slide.image} alt={slide.title} />
            </article>
          ))}
        </div>
      </div>
      <div className="slider-prev-next-control">
        {slides.map((slide, index) => (
          <label key={`label${index + 1}`} htmlFor={`slide${index + 1}`}></label>
        ))}
      </div>
      <div className="slider-dot-control">
        {slides.map((slide, index) => (
          <label key={`dot${index + 1}`} htmlFor={`slide${index + 1}`}></label>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
