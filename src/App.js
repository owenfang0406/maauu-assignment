import { useState, useEffect } from "react"
import "./App.css"
import Carousel from "./Components/Carousel/Carousel"
import SideBar from "./Components/SideBar/SideBar"

function App() {
  const slides = [
    { url: "./images/1.png" },
    { url: "./images/2.png" },
    { url: "./images/3.png" },
    { url: "./images/4.png" },
  ]
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setViewportWidth(() => window.innerWidth * 0.72)
    }
    if (window.innerWidth > 1500) {
      setViewportWidth(() => window.innerWidth * 0.72)
    }

    if (window.innerWidth < 1500 && window.innerWidth > 800) {
      setViewportWidth(() => window.innerWidth * 0.65)
    }

    if (window.innerWidth < 1200 && window.innerWidth > 800) {
      setViewportWidth(() => window.innerWidth * 0.6)
    }

    if (window.innerWidth < 800) {
      setViewportWidth(() => window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [viewportWidth])

  console.log(window.innerWidth)

  const containerStyles = {
    width: `${viewportWidth}px`,
    height: "100vh",
    zIndex: "0",
    overscrollBehaviorX: "none",
    overscrollBehaviorY: "none",
  }

  const sideBarWidth =
    window.innerWidth > 800 ? `${window.innerWidth - viewportWidth}px` : "100%"

  const sideBarCon = {
    width: `${sideBarWidth}`,
    height: "100vh",
    zIndex: "0",
    // backgroundColor: "black",
  }

  return (
    <div className="mainWrapper">
      <div className="subWrapper">
        <div style={containerStyles}>
          <Carousel slides={slides} parentWidth={viewportWidth} />
        </div>
        <div style={sideBarCon}>
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  )
}

export default App
