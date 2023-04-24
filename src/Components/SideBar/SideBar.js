import React from "react"
import styles from "./SideBar.module.css"
import Building from "./Building"
import Floor from "./Floor.js"
import Household from "./Household"

function SideBar() {
  return (
    <div className={styles.wrapper}>
      <Building></Building>
      <Floor></Floor>
      <Household></Household>
    </div>
  )
}

export default SideBar
