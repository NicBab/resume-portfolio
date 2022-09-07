import React from 'react'
import styles, { layout } from "../.././style"
import { LSUfs } from '../.././assets/index/assets.index'
 
const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={LSUfs}
        alt="lsu-fullstack-cert"
        className="w-[100%] h-[100%] relative  ml-10 rounded-md z-[1]"
      />

      {/* gradient start */}
      <div className="absolute z-[2] left-[50%] bottom-0 w-[60%] h-[60%] rounded-full white__gradient opacity-[.50]"/>
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      "billing"<br className="sm:block hidden" />EDUCATION
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
  )
}

export default Billing