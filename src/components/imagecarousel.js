import React, { useState, useRef, useEffect } from "react";
import Mycard from "./Mycard.js";
import "./imagecarousel.css";

const Imagecarousel = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const boxRef = useRef(null);
  const sliderRef = useRef(null);
  const sensitivity = 0.2;

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        const dragDistance = (event.clientX - dragStartX.current) * sensitivity;
        const newScrollValue = scrollValue - dragDistance;
        setScrollValue(newScrollValue);
        boxRef.current.scrollLeft = newScrollValue;
        updateSliderValue();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, scrollValue]);

  const handleSliderChange = () => {
    const newValue = parseInt(sliderRef.current.value, 10);
    setScrollValue(newValue);
    boxRef.current.scrollLeft = newValue;
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    dragStartX.current = event.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderValue = () => {
    const maxScroll =
      boxRef.current.scrollWidth - boxRef.current.clientWidth;
    const sliderValue = Math.min(
      maxScroll,
      Math.max(0, boxRef.current.scrollLeft)
    );
    sliderRef.current.value = sliderValue;
  };

  const btnpressprev = () => {
    const width = boxRef.current.clientWidth;
    const newValue = -width;
    setScrollValue(newValue);
    boxRef.current.scrollLeft = newValue;
    updateSliderValue();
  };

  const btnpressnext = () => {
    const width = boxRef.current.clientWidth;
    const newValue = width;
    setScrollValue(newValue);
    boxRef.current.scrollLeft = newValue;
    updateSliderValue();
  };

  return (
    <div
      className="product-carousel"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div ref={boxRef} className="product-container">
        <Mycard cardno="1" />
        <Mycard cardno="2" />
        <Mycard cardno="3" />
        <Mycard cardno="4" />
        <Mycard cardno="5" />
        <Mycard cardno="6" />
        <Mycard cardno="7" />
        <Mycard cardno="8" />
      </div>
      <input
        ref={sliderRef}
        type="range"
        min="0"
        max={
          boxRef.current ? boxRef.current.scrollWidth - boxRef.current.clientWidth : 0
        }
        value={scrollValue}
        onChange={handleSliderChange}
        className="bar-slider"
      />
    </div>
  );
};

export default Imagecarousel;