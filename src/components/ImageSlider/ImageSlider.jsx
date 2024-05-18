import React, { useState, useEffect } from "react";
import './ImageSlider.css'
const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      title: "Malacca",
      image: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg"
    },
    {
      title: "Cameron Highland",
      image: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg"
    },
    {
      title: "New Delhi",
      image: "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg"
    },
    {
      title: "Ladakh",
      image: "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg"
    },
    {
      title: "Nubra Valley",
      image: "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg"
    }
  ];
  const totalSlides = slides.length;
  const slideWidth = 100 / totalSlides; // Width of each slide in percentage
  const slideInterval = 3000; // Interval between slides in milliseconds

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, slideInterval);
    return () => clearInterval(slideTimer);
  }, [slideIndex]);

  const showSlide = (index) => {
    setSlideIndex(index);
  };

  const nextSlide = () => {
    let newIndex = slideIndex + 1;
    if (newIndex >= totalSlides) {
      newIndex = 0; // Reset index to loop back to the first slide
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
        <div className="inner" style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${slideIndex * slideWidth}%)` }}>
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
