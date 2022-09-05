import React from 'react'
import { Link } from "react-router-dom"
import styles, { layout } from "../.././style"
import { ViewPortfolioButton } from '../.././components/index/components.index'
import { tailwindLogo } from '../.././assets/index/assets.index'

const Deal = () => {
  return (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Find a better card deal <br className="sm:block hidden" /> in few easy
      steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] m-5`}>
      Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
      aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Link to="/portfolio">
      <ViewPortfolioButton />  
      </Link>
    </div>
    <div className={layout.sectionImg}>
      <img src={tailwindLogo} alt="card" className="w-[100%] h-[100%]"/>
    </div>
  </section>
  )
}

export default Deal