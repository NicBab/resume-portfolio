import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { LSUfs } from "../.././assets/index/assets.index";
import { BUTTON, SecBtn } from "../.././components/index/components.index";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      {/* gradient start */}
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient opacity-[.4]" />
      {/* gradient end */}
      <div className={layout.sectionImgReverse}>
        <img
          src={LSUfs}
          alt="lsu-fullstack-cert"
          className="min-w-[275px] h-[350px] relative ml-10 rounded-md z-[1]"
        />
      </div>
      <div className={`${layout.sectionInfo} z-[2]`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          Projects
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
        Being able to understand the big picture means being able to imagine
          another way of doing things, one that might work better for the
          organization's goal, employee productivity and job satisfaction!
        </p>
        <div>
          <Link to="/portfolio">
            <BUTTON name="VIEW PORTFOLIO" />
          </Link>
          <Link to="/contact">
            <SecBtn name="CONTACT ME" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Billing;

{
  /* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
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
      </div> */
}
