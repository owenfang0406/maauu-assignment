import React from "react"
import styles from "./Floor.module.css"

function Floor() {
  return (
    <div className={styles.mainCon}>
      <div className={styles.topInfoCon}>
        <div className={styles.totalPriceCon}>
          <div className={styles.totalPriceSubCon}>
            <div className={styles.totalPrice}>2600</div>
            <div className={styles.unitEndTag}>萬</div>
          </div>
          <div className={styles.grayEndNote}>總價起</div>
        </div>
        <div className={styles.areaCon}>
          <div className={styles.areaSubCon}>
            <div className={styles.totalPrice}>26-52</div>
            <div className={styles.unitEndTag}>坪</div>
          </div>
          <div className={styles.grayEndNote}>坪數區間</div>
        </div>
        <div className={styles.floorCon}>
          <div className={styles.floorSubCon}>
            <div className={styles.totalPrice}>18</div>
            <div className={styles.unitEndTag}>樓</div>
          </div>
          <div className={styles.grayEndNote}>樓層</div>
        </div>
      </div>
      <div className={styles.selectionCon}>
        <div className={styles.facade}>
          <div className={styles.facadeOption}>背山</div>
          <div className={styles.facadeOption}>高樓層</div>
          <div className={styles.facadeOption}>面水</div>
        </div>
        <div className={styles.floorNumberCon}>
          {Array.from({ length: 20 }).map((_, index) =>
            index === 0 || index === 19 ? (
              <div
                className={`${styles.buildingOption} ${styles.notAvailable}`}
              >
                <div className={styles.buildingOptionSubCon}>
                  <span className={styles.numberOfBuilding}>{index + 1}</span>
                  <span className={styles.unitEndTag}>樓</span>
                </div>
              </div>
            ) : (
              <div className={styles.buildingOption}>
                <div className={styles.buildingOptionSubCon}>
                  <span className={styles.numberOfBuilding}>{index + 1}</span>
                  <span className={styles.unitEndTag}>樓</span>
                </div>
              </div>
            )
          )}
        </div>
        <div className={styles.learnMoreCon}>
          <div className={styles.learnMoreSubCon}>
            <div className={styles.crossSymbol}>＋</div>
            <div>詳細</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Floor
