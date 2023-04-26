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
import lineBtn from "../lineBtn.svg"
import messengerBtn from "../messengerBtn.svg"

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
    { url: "./MobileCarousel3Images/E.png" },
  ]

  const [wrapperWidth, setWrapperWidth] = useState(100)

  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`)
    const width = wrapper.offsetWidth
    setWrapperWidth(() => width)
    // console.log(width)
    // console.log(sideBarWidth)
  }, [sideBarWidth])

  const containerStyles = {
    width: `${wrapperWidth}px`,
    height: "100vh",
    zIndex: "0",
    overscrollBehaviorX: "none",
    overscrollBehaviorY: "none",
    margin: "auto",
  }

  const mobileContainerStyles = {
    ...containerStyles,
    height: "400px",
  }
  const IconCon = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
    height: "130px",
    cursor: "pointer",
    zIndex: "5",
  }

  const IconPosition = () =>
    isMobile
      ? {
          ...IconCon,
          position: "fixed",
          right: "25px",
          top: "590px",
        }
      : {
          ...IconCon,
          position: "fixed",
          right: "10px",
          bottom: "90px",
        }

  return (
    <div className={styles.wrapper}>
      <div style={IconPosition()}>
        <img src={lineBtn}></img>
        <img src={messengerBtn}></img>
      </div>
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
