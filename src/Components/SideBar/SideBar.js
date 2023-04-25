import React from "react"
import styles from "./SideBar.module.css"
import Building from "./Building"
import Floor from "./Floor.js"
import Household from "./Household"
import ParkingSpace from "./ParkingSpace"
import InteriorOption from "./InteriorOption"
import NextStep from "./NextStep"

function SideBar() {
  return (
    <div className={styles.wrapper}>
      <Building></Building>
      <Floor></Floor>
      <Household></Household>
      <ParkingSpace></ParkingSpace>
      <InteriorOption></InteriorOption>
      <NextStep></NextStep>
    </div>
  )
}

export default SideBar
