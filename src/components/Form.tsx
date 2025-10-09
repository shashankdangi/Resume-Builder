import { Button } from "./ui/button";
import JikoprSection from "./rirekisho/Sections/JikoprSection";
import ShibouSection from "./rirekisho/Sections/ShibouSection";
import OthersSection from "./rirekisho/Sections/OthersSection";
import CertificationSection from "./rirekisho/Sections/CertificationSection";
import ExperienceSection from "./rirekisho/Sections/ExperienceSection";
import EducationSection from "./rirekisho/Sections/EducationSection";
import ContanctSection from "./rirekisho/Sections/ContanctSection";
import PersonalInfoSection from "./rirekisho/Sections/PersonalInfoSection";
import { useResumeStore } from "@/store/userResumeStore";
import { Link } from "react-router-dom";

function Form() {
  const { clearAll } = useResumeStore();
  return (
    <div className="flex gap-15 flex-col py-12">
      {/*Personal Information */}
      <PersonalInfoSection />

      {/*Contact Information  */}
      <ContanctSection />

      {/*Education Details  */}
      <EducationSection />

      {/*Experience Details */}
      <ExperienceSection />

      {/* Certifications */}
      <CertificationSection />

      {/* Other Details */}
      <OthersSection />
      {/* Shiboudouki */}
      <ShibouSection />

      {/* JikoPR */}
      <JikoprSection />

      {/* Final Submit Button  */}

      <div className="grid grid-cols-2 gap-6">
        <Button
          onClick={clearAll}
          variant={"destructive"}
          size={"lg"}
          className=""
        >
          Clear All
        </Button>
        <Button size={"lg"} asChild>
          <Link to={"/template/rirekishoprintwrapper"}> Preview </Link>
        </Button>
      </div>
    </div>
  );
}

export default Form;
