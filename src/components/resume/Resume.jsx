import styles, { layout } from "../../style";
import { resume, Resume_pdf } from "../../assets/index/assets.index";
import { GlassCard, BUTTON } from "../index/components.index";

const Resume = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
        <div className="max-w-[1200px] w-full">
          <GlassCard className="p-8 text-center">
        
            <h2 className={`${styles.heading2} !justify-center`}>
              Resume
            </h2>
         {/* Download Button */}
            <div className="mt-8 flex justify-center">
              <a
                href={Resume_pdf}
                download
              >
                <BUTTON name="DOWNLOAD PDF" />
              </a>
            </div>
      
            <a
              href="/Nick_Babineaux_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="block mt-8"
            >
              <img
                src={resume}
                alt="Resume preview"
                className="w-[80%] mx-auto rounded-md shadow-3 transform hover:scale-[1.01] transition duration-200"
              />
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Resume;

