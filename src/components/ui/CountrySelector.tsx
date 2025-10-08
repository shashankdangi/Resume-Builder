import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Country {
  en: string;
  jp: string;
}

const countries: Country[] = [
  { en: "Japan", jp: "日本" },
  { en: "United States", jp: "アメリカ合衆国" },
  { en: "United Kingdom", jp: "イギリス" },
  { en: "Canada", jp: "カナダ" },
  { en: "Australia", jp: "オーストラリア" },
  { en: "France", jp: "フランス" },
  { en: "Germany", jp: "ドイツ" },
  { en: "India", jp: "インド" },
  { en: "China", jp: "中国" },
  { en: "South Korea", jp: "韓国" },
  { en: "Italy", jp: "イタリア" },
  { en: "Spain", jp: "スペイン" },
  { en: "Brazil", jp: "ブラジル" },
  { en: "Mexico", jp: "メキシコ" },
  { en: "Singapore", jp: "シンガポール" },
  { en: "Philippines", jp: "フィリピン" },
  { en: "Thailand", jp: "タイ" },
  { en: "Vietnam", jp: "ベトナム" },
  { en: "Indonesia", jp: "インドネシア" },
  { en: "Malaysia", jp: "マレーシア" },
  { en: "Russia", jp: "ロシア" },
  { en: "Sweden", jp: "スウェーデン" },
  { en: "Norway", jp: "ノルウェー" },
  { en: "Finland", jp: "フィンランド" },
  { en: "Denmark", jp: "デンマーク" },
  { en: "Switzerland", jp: "スイス" },
  { en: "Netherlands", jp: "オランダ" },
  { en: "Belgium", jp: "ベルギー" },
  { en: "Austria", jp: "オーストリア" },
  { en: "New Zealand", jp: "ニュージーランド" },
];

interface CountrySelectProps {
  id?: string;
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export default function CountrySelect({
  id = "country",
  label = "Country",
  onChange,
  value,
}: CountrySelectProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Select onValueChange={(val) => onChange && onChange(val)} value={value}>
        <SelectTrigger id={id} className="w-full">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.jp} value={country.jp}>
              {country.en}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
