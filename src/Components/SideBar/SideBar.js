import React from "react"
import styles from "./SideBar.module.css"
import Building from "./Building"

function SideBar() {
  return (
    <div className={styles.wrapper}>
      <Building></Building>
    </div>
  )
}

export default SideBar
