import type { Photos } from "../components/Hero";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "../css/SliderSection.css";
import { useState } from "react";
function Slider({ images }: Photos) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const prevSlider = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextSlider = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  return (
    <div>
      <section className="SliderSection">
        <FaRegArrowAltCircleLeft id="leftbutton" onClick={prevSlider} />
        <img src={images[currentIndex]} draggable={false} />
        <FaRegArrowAltCircleRight id="rightbutton" onClick={nextSlider} />
        <div className="SliderContent">
          <h1 style={{ color: "white" }}>EVDEN EVE TASIMADA</h1>
          <h1 style={{ color: "red" }}>AKILLI COZUM</h1>
          <p style={{ width: "300px", color: "white" }}>
            ProAsansor ile esyalariniz guvenle, hizli ve hasarsiz sekilde
            tasinir. Modern mobil asansor sistemlerimizle her kata kolay erisim.
          </p>
          <button
            style={{
              marginTop: "6px",
              width: "50%",

              borderRadius: "1rem",
              backgroundColor: "red",
              color: "white",
              border: "none",
            }}
          >
            Hemen ara
          </button>
        </div>
        <div className="SliderDots">
          {images &&
            images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={currentIndex === index ? "active" : ""}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default Slider;
