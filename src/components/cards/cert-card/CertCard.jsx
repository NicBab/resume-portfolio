import React from 'react'
import styles, { layout } from "../../.././style"
import { LSUfullstack, UdGit } from '../../.././assets/index/assets.index'

const CertCard = () => {
  return (
 <div className={`${layout.sectionImgReverse} flex-wrap`}>
          <img
      src={UdGit}
      alt="udemy-git"
      className="min-w-[200px] h-[200px] relative ml-5 mb-5 rounded-md z-[1]"
    />
    <img
      src={LSUfullstack}
      alt="lsu-fullstack-cert"
      className="min-w-[250px] h-[250px] relative ml-5 mb-5 rounded-md z-[1]"
    />
  </div>
  )
}

export default CertCard