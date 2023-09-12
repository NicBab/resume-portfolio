import React from 'react'

const LogoCard = ({props}) => {
  const {id, logo} = props
  return (
    <div>
      <img 
      src={logo}
      alt={id}
      className="min-w-[200px] h-[200px] relative m-5 rounded-md z-[1]"/>
    </div>
  )
}

export default LogoCard