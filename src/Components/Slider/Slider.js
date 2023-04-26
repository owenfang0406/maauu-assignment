import React, { useState } from "react"
import styles from "./Slider.module.css"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

function Slider() {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(() => (slide === 1 ? 0 : slide + 1))
  }

  const preSlide = () => {
    setSlide(() => (slide === 0 ? 1 : slide - 1))
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.rightArrow} onClick={() => nextSlide()}>
        <IoIosArrowForward></IoIosArrowForward>
      </div>
      <div className={styles.leftArrow} onClick={() => preSlide()}>
        <IoIosArrowBack></IoIosArrowBack>
      </div>
      {Array.from({ length: 2 }).map((_, index) =>
        index === 0 ? (
          <div
            className={
              slide === index ? styles.householdCon : styles.slideHidden
            }
          >
            <div className={styles.householdOptionCon}>
              <div className={styles.householdOptionInnerCon}>
                <div className={styles.householdFullTag}>
                  <span className={styles.householdTag}>A</span>
                  <span className={styles.unitEndTag}>戶</span>
                </div>
                <div className={styles.optionTotalPriceCon}>NT$8,170,000</div>
              </div>
            </div>
            <div className={styles.householdOptionCon}>
              <div className={styles.householdOptionInnerCon}>
                <div className={styles.householdFullTag}>
                  <span className={styles.householdTag}>B</span>
                  <span className={styles.unitEndTag}>戶</span>
                </div>
                <div className={styles.optionTotalPriceCon}>฿8,170,000</div>
              </div>
            </div>
            <div className={styles.householdOptionCon}>
              <div className={styles.householdOptionInnerCon}>
                <div className={styles.householdFullTag}>
                  <span className={styles.householdTag}>C</span>
                  <span className={styles.unitEndTag}>戶</span>
                </div>
                <div className={styles.optionTotalPriceCon}>8.170.000₫</div>
              </div>
            </div>
            <div className={styles.householdOptionCon}>
              <div className={styles.householdOptionInnerCon}>
                <div className={styles.householdFullTag}>
                  <span className={styles.householdTag}>D</span>
                  <span className={styles.unitEndTag}>戶</span>
                </div>
                <div className={styles.optionTotalPriceCon}>¥8,170,000</div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={
              slide === index ? styles.householdCon : styles.slideHidden
            }
          >
            <div className={styles.householdOptionCon}>
              <div className={styles.householdOptionInnerCon}>
                <div className={styles.householdFullTag}>
                  <span className={styles.householdTag}>E</span>
                  <span className={styles.unitEndTag}>戶</span>
                </div>
                <div className={styles.optionTotalPriceCon}>NT$5,170,000</div>
              </div>
            </div>
            <div className={styles.householdOptionCon}>
              <div className={styles.householdOptionInnerCon}>
                <div className={styles.householdFullTag}>
                  <span className={styles.householdTag}>F</span>
                  <span className={styles.unitEndTag}>戶</span>
                </div>
                <div className={styles.optionTotalPriceCon}>฿6,170,000</div>
              </div>
            </div>
            <div className={styles.householdOptionCon}>
              <div className={styles.householdOptionInnerCon}>
                <div className={styles.householdFullTag}>
                  <span className={styles.householdTag}>G</span>
                  <span className={styles.unitEndTag}>戶</span>
                </div>
                <div className={styles.optionTotalPriceCon}>7.170.000₫</div>
              </div>
            </div>
            <div className={styles.householdOptionCon}>
              <div className={styles.householdOptionInnerCon}>
                <div className={styles.householdFullTag}>
                  <span className={styles.householdTag}>H</span>
                  <span className={styles.unitEndTag}>戶</span>
                </div>
                <div className={styles.optionTotalPriceCon}>¥7,170,000</div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Slider
