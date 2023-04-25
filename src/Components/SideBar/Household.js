import React from "react"
import styles from "./Household.module.css"
import Slider from "../Slider/Slider"

function Household() {
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
          <div className={styles.facadeOption}>邊間</div>
          <div className={styles.facadeOption}>大坪數</div>
          <div className={styles.facadeOption}>近電梯</div>
        </div>
      </div>
      <div className={styles.sliderCon}>
        <Slider></Slider>
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

export default Household
