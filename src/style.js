const styles = {
    boxWidth: "max-w-[100vw] w-full",

    button: "py-4 px-6 mb-5 w-[200px] bg-purple-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:text-blueText",
    buttonSecondary: "py-4 px-6 xs:ml-5 w-[200px] purple-text-gradient font-poppins font-medium text-[18px] border border-1 border-iconPurple hover:border-blueText rounded-[10px]",

    heading2: "font-poppins flex justify-center font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[85px] leading-[50px] w-full",
    paragraph: "m-5 font-poppins font-normal text-dimWhite text-[14px] md:text-[16px] leading-[35px] indent-5",

    cardHeading: "font-poppins flex justify-center font-semibold text-[20px] text-white leading-[40px] w-full",
    cardParagraph: "m-5 font-poppins font-normal text-dimWhite text-[14px] leading-[25px] indent-5",

    flexStart: "flex justify-center items-start",
    flexCenter: "flex justify-center items-center",
    flexEnd: "flex justify-center items-end",

    selfEnd: "flex self-end",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexCenter} flex-col`,
    sectionInfoReverse: `flex-1 ${styles.flexStart} flex-col-reverse`,

  };
  
  export default styles;
