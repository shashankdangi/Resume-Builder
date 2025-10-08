import Selection from "./Selection";

interface ProficiencyProps {
  id: string;
  value: string;
  onChange: (val: string) => void;
}

function Proficiency({ id, value, onChange }: ProficiencyProps) {
  return (
    <div>
      <Selection
        id={id}
        value={value}
        onChange={onChange}
        placeholder="Proficiency in this language"
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
