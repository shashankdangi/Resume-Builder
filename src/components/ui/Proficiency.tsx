import Selection from "./Selection";

interface ProficiencyProps {
  id: string;
}

function Proficiency({ id }: ProficiencyProps) {
  return (
    <div>
      <Selection
        id={id}
        placeholder="Proficiency in this langugae"
        options={[
          "Native",
          "Daily Conversation Level",
          "Can Speak in Business Settings",
        ]}
      />
    </div>
  );
}

export default Proficiency;
