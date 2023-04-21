import React, { useRef, useState, useEffect, useCallback } from "react"
import styles from "./Carousel.module.css"
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md"

const Carousel = ({ slides, parentWidth }) => {
  const timerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const sliderStyles = {
    height: "100%",
    position: "relative",
  }
  const slideStyles = {
    // width: "100%",
    height: "100%",
    // borderRadius: "10px 10px",
    backgroundPosition: "center bottom 48%",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
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
    // bottom: "50px",
    display: "flex",
    justifyContent: "center",
  }

  const dotStyles = {
    width: "10px",
    height: "10px",
    margin: "5px 5px",
    cursor: "pointer",
    position: "relative",
    backgroundColor: "#6C9A8B",
    display: "inline-block",
    borderRadius: "50%",
    border: "1px gold solid",
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
  }

  const GoToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, slides])

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const getSlideStylesWidthBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  })

  const getSlideContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  })

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      GoToNext()
    }, 5000)

    return () => clearTimeout(timerRef.current)
  }, [GoToNext])

  const slidesContainerOverflowStyles = {
    position: "relative",
    overflow: "hidden",
    height: "100%",
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={GoToPrevious}>
        <MdKeyboardArrowLeft className={styles.leftArrow}></MdKeyboardArrowLeft>
      </div>
      <div style={rightArrowStyles} onClick={GoToNext}>
        <MdKeyboardArrowRight
          className={styles.rightArrow}
        ></MdKeyboardArrowRight>
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlideContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => {
            console.log(slides[slideIndex])
            return (
              <div
                key={slideIndex}
                style={getSlideStylesWidthBackground(slideIndex)}
              ></div>
            )
          })}
        </div>
        <div className={styles.lowerCon}>
          <div style={dotsContainerStyles}>
            <div>棟別</div>
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
                NT$12,609,900/<span>目前總價</span>
              </div>
              <div className={styles.monthlyPriceTag}>
                NT$ 31,609/<span>最低月付</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
