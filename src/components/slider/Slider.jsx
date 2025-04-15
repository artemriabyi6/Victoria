import { useState, useEffect } from "react";
import "./slider.css";
import images from "../../utils/images";

const Slider = () => {
  const sliderImages = [images.slide1, images.slide2, images.slide4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Автоматичне перемикання кожні 5 секунд
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-image">
        <img src={sliderImages[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>

      <button className="slider-btn prev" onClick={goToPrev}>
        <img src={images.arrowPrev} alt="" />
      </button>
      <button className="slider-btn next" onClick={goToNext}>
        <img src={images.arrowNext} alt="" />
      </button>

      <div className="dots">
        {sliderImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
