import React from "react"
import styles from "./InteriorOption.module.css"

function InteriorOption() {
  return (
    <div className={styles.mainCon}>
      <div className={styles.interiorCon}>
        <div className={styles.interiorTitle}>
          推薦設計風格,實際價格將有專人將與您聯絡。
        </div>
        <div className={styles.interiorOptionCon}>
          <div className={styles.interiorOptionInnerCon}>
            <span className={styles.interiorTag}>新增設計風格</span>
            <span className={styles.unitEndTag}>＋</span>
          </div>
        </div>
      </div>
      <div className={styles.interiorCon2}>
        <div className={styles.interiorTitle2}>
          參考價格將不會納入房屋總價,請安心挑選。
        </div>
        <div className={styles.interiorOptionCon2}>
          <div className={styles.interiorOptionInnerCon2}>
            <span className={styles.interiorTag}>極簡北歐</span>
            <span className={styles.unitEndTag}>
              <span className={styles.dollarSign}>NT$</span>12,609,900
            </span>
          </div>
        </div>
        <div className={styles.interiorOptionCon2}>
          <div className={styles.interiorOptionInnerCon2}>
            <span className={styles.interiorTag}>樸實自然</span>
            <span className={styles.unitEndTag}>
              <span className={styles.dollarSign}>NT$</span>2,000,000
            </span>
          </div>
        </div>
      </div>
      <div className={styles.interestCon}>
        <div className={styles.interestSubCon}>
          <div className={styles.interestText}>我有興趣</div>
        </div>
        <div className={styles.learnMoreSubCon}>
          <div className={styles.crossSymbol}>＋</div>
          <div className={styles.learnMoreText}>詳細</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default InteriorOption
