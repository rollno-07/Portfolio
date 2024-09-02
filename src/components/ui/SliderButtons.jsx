"use client"
import { useSwiper } from "swiper/react"
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi"

const SliderButtons = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper=useSwiper()
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
}

export default SliderButtons