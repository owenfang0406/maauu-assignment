import React from "react"
import styles from "./ParkingSpace.module.css"

function ParkingSpace() {
  return (
    <div className={styles.mainCon}>
      <div className={styles.parkingSpaceCon}>
        <div className={styles.parkingSpaceOptionCon}>
          <div className={styles.parkingSpaceOptionInnerCon}>
            <span className={styles.parkingSpaceTag}>必選車位</span>
            <span className={styles.unitEndTag}>＋</span>
          </div>
        </div>
        <div className={styles.parkingSpaceOptionCon}>
          <div className={styles.parkingSpaceOptionInnerCon}>
            <span className={styles.parkingSpaceTag}>必選車位</span>
            <span className={styles.unitEndTag}>＋</span>
          </div>
        </div>
        <div className={styles.parkingSpaceOptionCon}>
          <div className={styles.parkingSpaceOptionInnerCon}>
            <span className={styles.parkingSpaceTag}>必選車位</span>
            <span className={styles.unitEndTag}>＋</span>
          </div>
        </div>
        <div className={styles.parkingSpaceOptionCon}>
          <div className={styles.parkingSpaceOptionInnerCon}>
            <span className={styles.parkingSpaceTag}>必選車位</span>
            <span className={styles.unitEndTag}>＋</span>
          </div>
        </div>
        <div className={styles.parkingSpaceOptionCon}>
          <div className={styles.parkingSpaceOptionInnerCon}>
            <span className={styles.parkingSpaceTag}>必選車位</span>
            <span className={styles.unitEndTag}>＋</span>
          </div>
        </div>
      </div>
      <div className={styles.learnMoreCon}>
        <div className={styles.learnMoreSubCon}>
          <div className={styles.crossSymbol}>＋</div>
          <div className={styles.learnMoreText}>詳細</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ParkingSpace
