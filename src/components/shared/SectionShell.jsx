import styles from "../../style";

const SectionShell = ({ title, subtitle, children }) => (
  <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
    <div className="absolute z-[0] w-[45%] h-[55%] rounded-full top-0 left-0 purple__gradient opacity-[.15]" />
    <div className="relative z-[2] max-w-[1200px] mx-auto">
      {title && (
        <div className="mb-5">
          <h2 className={`${styles.heading2} !justify-start`}>{title}</h2>
          {subtitle && <p className={`${styles.paragraph} !m-0 !mt-2 !indent-0 max-w-[950px]`}>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default SectionShell