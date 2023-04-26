import { useState, useEffect, useLayoutEffect } from "react"
import "./App.css"
import Carousel from "./Components/Carousel/Carousel"
import SideBar from "./Components/SideBar/SideBar"
import MobileCarousel from "./Components/Carousel/MobileCarousel"
import NavBar from "./Components/NavBar/NavBar"

function App() {
  const slides = [
    { url: "./images/1.png" },
    { url: "./images/2.png" },
    { url: "./images/3.png" },
    { url: "./images/4.png" },
  ]
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
      if (window.innerWidth > 1500) {
        setViewportWidth(() => window.innerWidth * 0.72)
        setIsMobile(false)
      } else if (window.innerWidth <= 1500 && window.innerWidth > 1366) {
        setViewportWidth(() => window.innerWidth * 0.68)
        setIsMobile(false)
      } else {
        setViewportWidth(() => window.innerWidth)
        setIsMobile(true)
      }
      setIsMobile(window.innerWidth <= 1366)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // console.log(window.innerWidth)

  const containerStyles = {
    width: `${viewportWidth}px`,
    height: "100vh",
    zIndex: "0",
    overscrollBehaviorX: "none",
    overscrollBehaviorY: "none",
  }

  const mobileContainerStyles = {
    ...containerStyles,
    height: "400px",
    marginTop: "70px",
  }

  const sideBarWidth =
    window.innerWidth > 1366 ? `${window.innerWidth - viewportWidth}px` : "100%"

  const overflowStyle = window.innerWidth > 1366 ? "scroll" : ""

  const sideBarCon = {
    width: `${sideBarWidth}`,
    height: "100vh",
    zIndex: "0",
    overflowY: `${overflowStyle}`,
  }

  return (
    <div className="mainWrapper">
      <div className="subWrapper">
        <NavBar isMobile={isMobile}></NavBar>
        {!isMobile && (
          <div style={containerStyles}>
            <Carousel slides={slides} parentWidth={viewportWidth} />
          </div>
        )}
        {isMobile && (
          <div style={mobileContainerStyles}>
            <MobileCarousel
              slides={slides}
              parentWidth={viewportWidth}
            ></MobileCarousel>
          </div>
        )}
        <div style={sideBarCon}>
          <SideBar sideBarWidth={sideBarWidth} isMobile={isMobile}></SideBar>
        </div>
      </div>
    </div>
  )
}

export default App
