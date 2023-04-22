import { useState, useEffect } from "react"
import "./App.css"
import Carousel from "./Components/Carousel/Carousel"

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
      setViewportWidth(() => window.innerWidth * 0.75)
    }
    setViewportWidth(() => window.innerWidth * 0.75)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [viewportWidth])

  console.log(viewportWidth)

  const containerStyles = {
    width: `${viewportWidth}px`,
    height: "100vh",
    zIndex: "0",
  }

  return (
    <div className="App">
      <div style={containerStyles}>
        <Carousel slides={slides} parentWidth={viewportWidth} />
      </div>
    </div>
  )
}

export default App
