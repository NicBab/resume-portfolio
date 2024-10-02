import styles from "../.././style";
import { Navbar, Social } from "../../components/index/components.index";
import { gearLogo } from "../.././assets/index/assets.index";
import { footerLinks } from "../../constants/footer-links-data/footer-links-data.index";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} z-[1] flex-col border-t-[1px] border-t-[#3F3E45] `}
    >
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <Navbar />
      </nav>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white p-10">
        Copyright Ⓒ 2022 StellarInnovationCo. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
