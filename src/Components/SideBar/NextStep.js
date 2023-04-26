import React from "react"
import styles from "./NextStep.module.css"
import harpoonArrow from "./harpoonArrow.svg"

function NextStep() {
  return (
    <div className={styles.mainCon}>
      <div className={styles.contactCon}>
        <div className={styles.questionText}>
          仍在考慮？先加入願望清單，或分享給至親好友
        </div>
        <div className={styles.iconsCon}>
          <div className={styles.icons}>
            <img src={require("./like.png")}></img>
          </div>
          <div className={styles.icons}>
            <img src={require("./paperplane.png")}></img>
          </div>
        </div>
      </div>
      <div className={styles.nextStepCon}>
        <div className={styles.NextStepButton}>
          <div className={styles.nextStepText}>下一步 | 付款</div>
          <div className={styles.harpoonArrow}>
            <img
              src={harpoonArrow}
              alt="Rightwards Harpoon With Barb Upwards"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextStep
