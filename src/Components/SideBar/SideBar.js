import React, { useEffect, useState } from "react"
import styles from "./SideBar.module.css"
import Building from "./Building"
import Floor from "./Floor.js"
import Household from "./Household"
import ParkingSpace from "./ParkingSpace"
import InteriorOption from "./InteriorOption"
import NextStep from "./NextStep"
import MobileCarousel2 from "../Carousel/MobileCarousel2"
import MobileCarousel3 from "../Carousel/MobileCarousel3"

function SideBar({ sideBarWidth, isMobile }) {
  const slides2 = [
    { url: "./MobileCarousel2Images/1.png" },
    { url: "./MobileCarousel2Images/2.png" },
    { url: "./MobileCarousel2Images/3.png" },
    { url: "./MobileCarousel2Images/4.png" },
  ]

  const slides3 = [
    { url: "./MobileCarousel3Images/A.png" },
    { url: "./MobileCarousel3Images/B.png" },
    { url: "./MobileCarousel3Images/C.png" },
    { url: "./MobileCarousel3Images/D.png" },
  ]

  const [wrapperWidth, setWrapperWidth] = useState(100)

  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`)
    const width = wrapper.offsetWidth
    setWrapperWidth(() => width)
    console.log(width)
    console.log(sideBarWidth)
  }, [sideBarWidth])

  const containerStyles = {
    width: `${wrapperWidth}px`,
    height: "100vh",
    zIndex: "0",
    overscrollBehaviorX: "none",
    overscrollBehaviorY: "none",
  }

  const mobileContainerStyles = {
    ...containerStyles,
    height: "400px",
  }

  return (
    <div className={styles.wrapper}>
      <Building></Building>
      {isMobile && (
        <div style={mobileContainerStyles}>
          <MobileCarousel2
            slides={slides2}
            parentWidth={wrapperWidth}
          ></MobileCarousel2>
        </div>
      )}
      <Floor></Floor>
      <Household></Household>
      {isMobile && (
        <div style={mobileContainerStyles}>
          <MobileCarousel3
            slides={slides3}
            parentWidth={wrapperWidth}
          ></MobileCarousel3>
        </div>
      )}
      <ParkingSpace></ParkingSpace>
      <InteriorOption></InteriorOption>
      <NextStep></NextStep>
    </div>
  )
}

export default SideBar
