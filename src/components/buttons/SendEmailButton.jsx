import React from 'react'
import styles from "../.././style"

const SendEmailButton = () => {
  return (
    <button
    type="button"
    className={`py-4 px-6 bg-purple-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-6 mb-10 hover:text-secondary`}
  >
    Send
  </button>
  )
}

export default SendEmailButton