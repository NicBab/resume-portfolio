import { certsData } from "../../constants/certs-data/certs-data.index";
import { GlassCard, SectionShell } from "../index/components.index";

const Certifications = () => {
  return (
    <SectionShell
      title="Certifications"
      subtitle="Formal coursework and training across software development, industrial communications, control systems, and safety training."
    >
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {certsData.map((cert) => {
          const CardContent = (
            <GlassCard className="p-4 flex flex-col items-center justify-center h-full min-h-[240px] hover:scale-[1.01] transition duration-200">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-[140px] object-contain"
              />
              <p className="text-dimWhite text-[13px] text-center mt-4 leading-[20px]">
                {cert.title}
              </p>
            </GlassCard>
          );

          return cert.pdf ? (
            <a
              key={cert.id}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {CardContent}
            </a>
          ) : (
            <div key={cert.id} className="block">
              {CardContent}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
};

export default Certifications;