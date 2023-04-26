import React, { useRef, useState, useEffect, useCallback } from "react"
import styles from "./MobileCarousel2.module.css"
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md"

const MobileCarousel2 = ({ slides, parentWidth }) => {
  const timerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRefs = useRef([])
  const SliderContainerRef = useRef(null)
  const [xPosition, setXPosition] = useState(0)

  console.log(slideRefs)
  // useEffect(() => {
  //   const container = SliderContainerRef.current
  //   const slidesIDs = window.document.querySelectorAll("#slides")

  //   const handleScroll = () => {
  //     setXPosition(() => container.scrollLeft)
  //     const closestPosition = Math.round(
  //       container.scrollLeft / (parentWidth * 0.95)
  //     )
  //     // setCurrentIndex(() => closestPosition - 1)
  //     console.log(closestPosition)
  //     console.log(container.scrollLeft)
  //     console.log(slidesIDs)
  //   }

  //   container.addEventListener("scroll", handleScroll)

  //   return () => {
  //     container.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  const sliderStyles = {
    height: "100%",
    position: "relative",
  }

  const slideStyles = {
    height: "100%",
    backgroundPosition: "center bottom 48%",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    position: "relative",
    marginRight: "15px",
  }

  const leftArrowStyles = {
    width: "30px",
    height: "30px",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    zIndex: 1,
    cursor: "pointer",
  }

  const rightArrowStyles = {
    width: "30px",
    height: "30px",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    zIndex: 1,
    cursor: "pointer",
  }

  const dotsContainerStyles = {
    position: "relative",
    bottom: "30px",
    display: "flex",
    justifyContent: "center",
  }

  const dotStyles = {
    width: "8px",
    height: "8px",
    margin: "5px 6px",
    cursor: "pointer",
    position: "relative",
    backgroundColor: "rgba(245, 245, 245, 1)",
    display: "inline-block",
    borderRadius: "50%",
    border: "1px rgba(34, 30, 31, 1) solid",
  }

  const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
  }

  const GoToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)

    const slideOffsetLeft = slideRefs.current[newIndex].offsetLeft
    const container = SliderContainerRef.current
    container.scrollLeft = slideOffsetLeft
  }

  const GoToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    const slideOffsetLeft = slideRefs.current[newIndex].offsetLeft
    const container = SliderContainerRef.current
    container.scrollLeft = slideOffsetLeft
  }, [currentIndex, slides])

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const getSlideStylesWidthBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth * 0.95}px`,
  })

  const getSlideContainerStylesWithWidth = () => {
    const slideWidth = parentWidth * 0.95
    // const transform = `translateX(${-(currentIndex * slideWidth)}px)`

    return {
      ...slidesContainerStyles,
      width: slideWidth * slides.length,
      // transform: transform,
    }
  }

  const slidesContainerOverflowStyles = {
    position: "relative",
    overflow: "scroll",
    height: "100%",
  }

  return (
    <div style={sliderStyles}>
      <div className={styles.leftArrowStyles} onClick={GoToPrevious}>
        <MdKeyboardArrowLeft className={styles.leftArrow}></MdKeyboardArrowLeft>
      </div>
      <div className={styles.rightArrowStyles} onClick={GoToNext}>
        <MdKeyboardArrowRight
          className={styles.rightArrow}
        ></MdKeyboardArrowRight>
      </div>
      <div style={slidesContainerOverflowStyles} ref={SliderContainerRef}>
        <div style={getSlideContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => {
            return (
              <div
                id="slides"
                key={slideIndex}
                style={getSlideStylesWidthBackground(slideIndex)}
                ref={(el) => (slideRefs.current[slideIndex] = el)}
              ></div>
            )
          })}
        </div>
        {/* <div className={styles.lowerCon}>
          <div style={dotsContainerStyles}>
            <div className={styles.buildingSpacing}>棟別</div>
            {slides.map((slides, slideIndex) => (
              <div
                key={slideIndex}
                style={dotStyles}
                className={
                  slideIndex === currentIndex ? `${styles.active}` : ""
                }
                onClick={() => goToSlide(slideIndex)}
              ></div>
            ))}
          </div>
          <div className={styles.loanAdBar}>
            <div className={styles.loanClickBar}>
              <div className={styles.arrow}>
                <MdKeyboardArrowUp></MdKeyboardArrowUp>
              </div>
              <div className={styles.totalPriceTag}>
                <span className={styles.totalPrice}>
                  <span className={styles.dollarSign}>NT$</span>12,609,900
                </span>
                <span className={styles.totalPriceEndTag}>/目前總價</span>
              </div>
              <div className={styles.monthlyPriceTag}>
                <span className={styles.monthlyPice}>
                  <span className={styles.dollarSign}>NT$</span>31,609
                </span>
                <span className={styles.monthlyPiceEndTag}>/最低月付</span>
              </div>
            </div>
          </div>
          <div className={styles.shouldShow3DModelNote}>外觀3D示意圖</div>
        </div> */}
      </div>
    </div>
  )
}

export default MobileCarousel2
