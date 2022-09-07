import React from 'react'
import styles from "../.././style"

const SendEmailButton = () => {
  return (
    <button
    type="button"
    className={`${styles.button} w-[100%]`}
  >
    Send
  </button>
  )
}

export default SendEmailButton