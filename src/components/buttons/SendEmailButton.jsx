import React from 'react'
import styles from "../.././style"

const SendEmailButton = () => {
  return (
    <button
    type="button"
    className={`py-4 px-6 bg-purple-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mb-10 hover:text-secondary w-[100%] z-[2]`}
  >
    Send
  </button>
  )
}

export default SendEmailButton