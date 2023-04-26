import React from "react"
import styles from "./NavBar.module.css"
import CompanyLogo from "../logo.svg"
import Avatar from "../avatar.svg"

function NavBar({ isMobile }) {
  const NavBarBg = () => (isMobile ? { backgroundColor: "white" } : {})
  return (
    <nav style={NavBarBg()} className={styles.navWrapper}>
      <div>
        <img src={CompanyLogo}></img>
      </div>
      <div className={styles.rightIconCon}>
        <div className={styles.projectLearnMore}>建案詳情</div>
        <div className={styles.avatarCon}>
          <img src={Avatar}></img>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
