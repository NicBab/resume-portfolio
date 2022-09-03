import React from 'react'
import styles from "../.././style";
import robot from "../.././assets/images/hero/robot.png"

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-o sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          {/* <img src={discount} alt="discount" className="w-[32px] h-32px" /> */}
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Hello,</span>{" "}
          </p>
        </div>
        <div className="flex flex-wrap-row justify-between items-center w-full">
          
          <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[25px] text-white ss:leading-[100px] leading-[75px]">
            {" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0"><GetStarted/></div> */}
        </div>
        <h1 className="text-purple-gradient font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Nick Babineaux</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            With a passion for developing features utilizing a variety of markup
            languages and frameworks to create web front end, back end, servers,
            databases SQL and noSQL, APIs. Enhancing the functionality, user
            experience and user interface design, while optimizing web pages for
            maximum speed and scalability.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
      {/* <div className={`ss:hidden ${styles.flexCenter}`}><GetStarted/></div> */}
    </section>
  );
}

export default Hero