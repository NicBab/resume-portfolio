import React from 'react'
import styles from '../.././style'

const AboutMeButton = () => {
  return (
    <button type="button" className={`py-4 px-6 bg-purple-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
    More About Me 
  </button>
  )
}

export default AboutMeButton