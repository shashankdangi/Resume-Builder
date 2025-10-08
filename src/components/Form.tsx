import { Button } from "./ui/button";
import { useState } from "react";
import JikoprSection from "./Sections/JikoprSection";
import ShibouSection from "./Sections/ShibouSection";
import OthersSection from "./Sections/OthersSection";
import CertificationSection from "./Sections/CertificationSection";
import ExperienceSection from "./Sections/ExperienceSection";
import EducationSection from "./Sections/EducationSection";
import ContanctSection from "./Sections/ContanctSection";
import PersonalInfoSection from "./Sections/PersonalInfoSection";

function Form() {
  const [cards, setCards] = useState<number[]>([]);
  const [xpCards, setXpCards] = useState<number[]>([]);
  const [certCards, setCertCards] = useState<number[]>([]);
  const [langCard, setLangCard] = useState<number[]>([]);

  // ! Adding Cards

  const addCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCards([...cards, cards.length]);
  };

  const addCertCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCertCards([...certCards, certCards.length]);
  };

  const addXpCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setXpCards([...xpCards, xpCards.length]);
  };

  const addLangCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLangCard([...langCard, langCard.length]);
  };

  // ! Deleting Cards

  const deleteCard = (key: number) => {
    setCards((prev) => prev.filter((k) => k !== key));
  };

  const deleteXpCard = (key: number) => {
    setXpCards((prev) => prev.filter((k) => k !== key));
  };
  const deletecertcard = (key: number) => {
    setCertCards((prev) => prev.filter((k) => k !== key));
  };
  const deleteCardLang = (key: number) => {
    setLangCard((prev) => prev.filter((k) => k !== key));
  };

  return (
    <div className="flex gap-15 flex-col py-12">
      {/*Personal Information */}
      <PersonalInfoSection />

      {/*Contact Information  */}
      <ContanctSection />

      {/*Education Details  */}
      <EducationSection
        cards={cards}
        addCard={addCard}
        deleteCard={deleteCard}
      />

      {/*Experience Details */}
      <ExperienceSection
        xpCards={xpCards}
        addXpCard={addXpCard}
        deleteXpCard={deleteXpCard}
      />

      {/* Certifications */}
      <CertificationSection
        certCards={certCards}
        addCertCard={addCertCard}
        deletecertcard={deletecertcard}
      />

      {/* Other Details */}
      <OthersSection
        langCard={langCard}
        deleteCardLang={deleteCardLang}
        addLangCard={addLangCard}
      />
      {/* Shiboudouki */}
      <ShibouSection />

      {/* JikoPR */}
      <JikoprSection />

      {/* Final Submit Button  */}

      <div className="grid grid-cols-2 gap-6">
        <Button variant={"secondary"} size={"lg"} className="">
          Save{" "}
        </Button>
        <Button size={"lg"} className="">
          Save & Preview Resume{" "}
        </Button>
      </div>
    </div>
  );
}

export default Form;
