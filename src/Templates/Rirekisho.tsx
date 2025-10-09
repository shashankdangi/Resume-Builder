import { useResumeStore } from "@/store/userResumeStore";

function Rirekisho() {
  //@ Calling the DB
  const {
    personalInfo,
    contactInfo,
    education,
    experience,
    certifications,
    otherInfo,
    otherLangs,
    summaries,
  } = useResumeStore();

  //@ VISA TYPES
  const japanVisaTypesJP: Record<string, string> = {
    Diplomat: "外交官",
    Official: "公用",
    Professor: "教授",
    Artist: "芸術家",
    "Religious Activities": "宗教活動",
    Journalist: "報道関係者",
    "Highly Skilled Professional": "高度専門職",
    "Business Manager": "経営管理",
    "Legal/Accounting Services": "法律・会計業務",
    "Medical Services": "医療業務",
    Researcher: "研究者",
    Instructor: "教育者",
    "Engineer / Specialist in Humanities / International Services":
      "技術・人文知識・国際業務",
    "Intra-company Transferee": "企業内転勤",
    "Nursing Care": "介護",
    Entertainer: "興行・芸能",
    "Skilled Labor": "技能実習",
    "Specified Skilled Worker": "特定技能",
    "Technical Intern Training": "技能実習生",
    "Cultural Activities": "文化活動",
    "Temporary Visitor": "短期滞在",
    Student: "留学",
    Trainee: "研修生",
    Dependent: "家族滞在",
    "Designated Activities": "指定活動",
    "Permanent Resident": "永住者",
    "Spouse or Child of Japanese National": "日本人配偶者等",
    "Spouse or Child of Permanent Resident": "永住者の配偶者等",
    "Long-Term Resident": "定住者",
  };

  //@ Get Month Number from String
  const getMonth = (monthString: string) => {
    if (!monthString) return null;

    const month = monthString.trim().toLowerCase();

    const monthMap = {
      january: 1,
      jan: 1,
      february: 2,
      feb: 2,
      march: 3,
      mar: 3,
      april: 4,
      apr: 4,
      may: 5,
      june: 6,
      jun: 6,
      july: 7,
      jul: 7,
      august: 8,
      aug: 8,
      september: 9,
      sep: 9,
      sept: 9,
      october: 10,
      oct: 10,
      november: 11,
      nov: 11,
      december: 12,
      dec: 12,
    };

    return monthMap[month as keyof typeof monthMap] || null;
  };
  //@ Birthday Section Date in Already JP Form
  const today = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //@ GET DATE from ISO String
  const getDatePart = (iso: string, part: "y" | "m" | "d") => {
    if (!iso) return "";
    const date = new Date(iso);
    switch (part) {
      case "y":
        return date.getFullYear();
      case "m":
        return date.getMonth() + 1;
      case "d":
        return date.getDate();
      default:
        return "";
    }
  };

  //@ GET MARITIAL Status EN-> JP
  const getMarried = (status: string): string => {
    if (!status) return "";
    switch (status) {
      case "No":
        return "無";
      case "Yes":
        return "有";
      default:
        return "";
    }
  };

  //@ Get Health Status EN -> JP
  const getHealth = (status: string) => {
    if (!status) return "";
    switch (status) {
      case "Healthy":
        return "良好";
      case "Fair":
        return "普通";
      case "Needs Attention":
        return "要注意";

      default:
        break;
    }
  };

  //@ Change Proficiency EN -> JP
  const proff = (prof: string) => {
    if (!prof) return "";
    switch (prof) {
      case "Native":
        return "母語";
      case "Daily Conversation Level":
        return "日常的な場面の会話であれば充分なコミュニケーションがおこなえる。";
      case "Can Speak in Business Settings":
        return "ビジネスにおいても場面に応じた正しい敬語や単語を使用することができる。";
      default:
        return "";
    }
  };

  //@ Get GENDER
  const getGender = (gen: string) => {
    if (!gen) return "";
    switch (gen) {
      case "Male":
        return "男";
      case "Female":
        return "女";
      default:
        break;
    }
  };

  //@ Get Age from DOB ISO string
  const getAge = (dob: string): number | "" => {
    if (!dob) return "";

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // If birthday hasn't occurred yet this year, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  return (
    <div className="md:block hidden print:block ">
      {/* //! Front Page */}
      <div className="Page1  ">
        <div className="resume-container  py-7 w-[210mm] h-[297mm] flex justify-center text-[12px] ">
          <div className="container w-full h-full grid grid-rows-6 gap-5">
            {/* Personal Info */}
            <div className="personal-info border-2 row-span-2 grid grid-cols-4 w-full h-full overflow-hidden ">
              {/* Left column */}
              <div className="left border-r-2 col-span-3 grid grid-rows-2">
                {/* Top Part */}
                <div className="border-b-2 flex flex-col">
                  <div className="border-b-2 flex-[2] flex flex-row justify-between items-center px-2">
                    <div className="text-3xl pl-5">履歴書</div>
                    <div className="text-xs">{today} 現在</div>
                  </div>
                  <div className="border-b-2 flex-[6] flex flex-col ">
                    <div className="border-dotted border-b-2 flex px-2 ">
                      <div className="w-[20%] border-r-2 text-center  p-1">
                        ふりがな
                      </div>
                      <div className="pl-3 p-1">{personalInfo.jpName}</div>
                    </div>
                    <div className="flex-[2] flex flex-row px-2 ">
                      <div className="border-r-2 w-[20%] text-center flex justify-center items-center text-xl">
                        氏名
                      </div>
                      <div className="flex justify-center items-center px-3 text-3xl">
                        {personalInfo.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex-[2] flex flex-row px-2">
                    <div className="w-[20%] border-r-2 flex justify-center items-center">
                      生年月日
                    </div>
                    <div className="w-[60%] flex justify-center items-center ">
                      <div className="flex px-3  items-center flex-2">
                        {personalInfo.dob
                          ? `${getDatePart(
                              personalInfo.dob,
                              "y"
                            )}年${getDatePart(
                              personalInfo.dob,
                              "m"
                            )}月${getDatePart(personalInfo.dob, "d")}日`
                          : "―"}
                      </div>
                      <div className="flex  items-center flex-1">
                        年齢 {getAge(personalInfo.dob)} 歳
                      </div>
                    </div>
                    <div className="w-[20%]  border-l-2 flex ">
                      <div className="border-r-2 border-dotted flex-1 flex justify-center items-center">
                        性別
                      </div>
                      <div className="flex-1 flex justify-center items-center">
                        {getGender(personalInfo.gender)}
                      </div>
                    </div>
                  </div>
                </div>
                {/* BottomPart */}
                <div className="grid grid-rows-2">
                  <div className="border-b-2 flex flex-col">
                    <div className="border-b-2 border-dotted flex-1 flex flex-row px-2">
                      <div className="w-[20%] border-r-2 border-dotted flex justify-center items-center  p-2">
                        フリガナ
                      </div>
                      <div className="flex px-3  justify-between w-[80%] text-[11px]">
                        <div className="border-r-2 w-[77%] flex items-center">
                          {contactInfo.addJpn}
                        </div>
                        <div className="w-[20%] flex justify-center items-center font-bold">
                          最寄駅
                        </div>
                      </div>
                    </div>
                    <div className="flex-2 flex flex-row pl-1.5">
                      <div className="w-[20%] border-r-2 border-dotted flex justify-center items-center font-bold">
                        現住所
                      </div>
                      <div className="flex justify-between w-[80%]">
                        <div className="w-[74%] border-r-2">
                          <div className="flex flex-col ">
                            <div className="border-b-2 flex">
                              <div className="w-[10%] border-r-2 border-dotted flex justify-center items-center">
                                〒
                              </div>
                              <div className="px-3  flex items-center"></div>
                            </div>
                            <div className="pl-13 mt-2">{contactInfo.add}</div>
                          </div>
                        </div>
                        <div className="w-[26.5%] flex items-center justify-center">
                          {contactInfo.station}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="border-b-2 border-dotted flex-1 flex flex-row px-2">
                      <div className="w-[20%] border-r-2 border-dotted flex justify-center items-center  p-2">
                        フリガナ
                      </div>
                      <div className="flex px-3  justify-between w-[80%] text-]">
                        <div className="border-r-2 w-[77%] flex items-center"></div>
                        <div className="w-[20%] flex justify-center items-center font-bold">
                          国籍
                        </div>
                      </div>
                    </div>
                    <div className="flex-2 flex flex-row pl-1.5">
                      <div className="w-[20%] border-r-2 border-dotted flex justify-center items-center">
                        現住所
                      </div>
                      <div className="flex justify-between w-[80%]">
                        <div className="w-[74%] border-r-2 flex justify-center items-center">
                          <div className="text-md font-bold">同上</div>
                        </div>
                        <div className="w-[26.5%] flex justify-center items-center">
                          {personalInfo.country}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="right col-span-1 grid grid-rows-2 h-full ">
                {/* Top Photo */}
                <div className="top border-b-2  flex items-center justify-center overflow-hidden ">
                  <img
                    className="w-[30mm] h-[40mm] object-cover block"
                    src={personalInfo.photo}
                    alt="Profile"
                  />
                </div>

                {/* Bottom: Email & Phone */}
                <div className="grid grid-rows-2 w-full text-center overflow-hidden">
                  <div className="border-b-2 h-full">
                    <div className="flex justify-center  items-center border-b-2 h-[35%]">
                      E-mail
                    </div>
                    <div className="min-w-0 flex justify-center items-center p-3 break-all  h-[65%]">
                      {contactInfo.email}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center items-center border-b-2 h-[35%]">
                      携帯電話
                    </div>
                    <div className="flex justify-center items-center h-[65%]">
                      {contactInfo.phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education / Experience */}
            <div className="education-info border-2 row-span-4  grid grid-rows-2">
              {/* Education */}
              <div className="Education Section">
                <div className="border-b-2 h-full overflow-hidden grid grid-rows-9">
                  {/* Top */}
                  <div className="border-b-2 row-span-1  flex  flex-row font-bold text-[14px]">
                    <div className="w-[20%] border-r-2 border-dotted flex justify-center items-center p-1">
                      年　月
                    </div>
                    <div className="flex justify-center items-center p-1  w-full">
                      学　歴　（高校卒業から記入）
                    </div>
                  </div>
                  {/* Middle */}
                  <div className="row-span-7 border-b-2 overflow-hidden h-full  text-[14px]">
                    {education.map((edu) => (
                      <div key={edu.id}>
                        {/* From  */}
                        <div className="border-b-2  flex  flex-row h-[30.3px]">
                          <div className="w-[20%] border-r-2 border-dotted flex justify-center ">
                            <div className="border-r-2 border-dotted flex-1 flex justify-center items-center p-1">
                              {edu.from.year}
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                              {getMonth(edu.from.month!)}
                            </div>
                          </div>
                          <div className="flex justify-center  w-full">
                            <div className="flex-4 border-r-1 pl-3 p-1">
                              {` ${edu.school},  ${edu.major}`}
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                              入学
                            </div>
                          </div>
                        </div>
                        {/*Untill */}
                        <div className="border-b-2  flex  flex-row">
                          <div className="w-[20%] border-r-2 border-dotted flex justify-center ">
                            <div className="border-r-2 border-dotted flex-1 flex justify-center items-center p-1">
                              {edu.until!.year!}
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                              {getMonth(edu.until!.month!)}
                            </div>
                          </div>
                          <div className="flex justify-center  w-full">
                            <div className="flex-4 border-r-1 pl-3 p-1">
                              {` ${edu.school},  ${edu.major}`}
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                              {edu.isEnrolled ? "卒業予定" : "卒業"}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}{" "}
                    <div className="filler-cols-edu">
                      <div className="border-b-2 flex flex-row h-[30px]">
                        <div className="w-[20%] border-r-2 border-dotted flex justify-center">
                          <div className="border-r-2 border-dotted flex-1 flex justify-center items-center p-1"></div>
                          <div className="flex-1 flex justify-center items-center"></div>
                        </div>
                        <div className="flex justify-center w-full">
                          <div className="flex-4 border-r-1 pl-3 p-1 font-bold justify-center flex">
                            {" "}
                            現在に至る
                          </div>
                          <div className="flex-1 flex justify-center items-center"></div>
                        </div>
                      </div>
                      {Array(11)
                        .fill(null)
                        .map((_, index) => (
                          <div
                            key={index}
                            className="border-b-2 flex flex-row h-[30px]"
                          >
                            <div className="w-[20%] border-r-2 border-dotted flex justify-center ">
                              <div className="border-r-2 border-dotted flex-1 flex justify-center items-center p-1"></div>
                              <div className="flex-1 flex justify-center items-center"></div>
                            </div>
                            <div className="flex justify-center w-full">
                              <div className="flex-4 border-r-1 pl-3 p-1"></div>
                              <div className="flex-1 flex justify-center items-center"></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  {/* End */}
                  <div className="row-span-1 flex">
                    <div className="w-[20%] border-r-2 flex  justify-center items-center"></div>
                    <div className="w-full flex justify-center items-center font-bold"></div>
                  </div>
                </div>
              </div>
              {/* Experience  */}
              <div className="Experience Section text-[14px]">
                <div className="border-b-2 h-full overflow-hidden grid grid-rows-9">
                  {/* Top */}
                  <div className="border-b-2 row-span-1  flex  flex-row font-bold">
                    <div className="w-[20%] border-r-2 border-dotted flex justify-center items-center p-1">
                      年　月
                    </div>
                    <div className="flex justify-center items-center p-1  w-full">
                      職歴　及び　インターンシップ、アルバイト歴
                    </div>
                  </div>
                  {/* Middle */}
                  <div className="border-b-2 row-span-7  overflow-hidden">
                    <div>
                      {experience.map((exp) => (
                        <div key={exp.id}>
                          {/* From  */}
                          <div className="border-b-2  flex  flex-row">
                            <div className="w-[20%] border-r-2 border-dotted flex justify-center ">
                              <div className="border-r-2 border-dotted flex-1 flex justify-center items-center p-1">
                                {exp.from.year}
                              </div>
                              <div className="flex-1 flex justify-center items-center">
                                {getMonth(exp.from!.month!)}
                              </div>
                            </div>
                            <div className="flex justify-center  w-full">
                              <div className="flex-4 border-r-1 pl-3 p-1">
                                {` ${exp.company}`}
                              </div>
                              <div className="flex-1 flex justify-center items-center">
                                入社
                              </div>
                            </div>
                          </div>
                          {/* Tasks */}
                          <div className="border-b-2  flex   flex-row">
                            <div className="w-[20%] border-r-2 border-dotted flex justify-center ">
                              <div className="border-r-2 border-dotted flex-1 flex justify-center items-center p-1"></div>
                              <div className="flex-1 flex justify-center items-center"></div>
                            </div>
                            <div className="flex justify-center  w-full">
                              <div className="flex-4 border-r-1 pl-3 p-1 text-[12px]">
                                {`内： ${exp.tasks}`}
                              </div>
                              <div className="flex-1 flex justify-center items-center"></div>
                            </div>
                          </div>
                          {/*Untill */}
                          <div className="border-b-2  flex  flex-row">
                            <div className="w-[20%] border-r-2 border-dotted flex justify-center ">
                              <div className="border-r-2 border-dotted flex-1 flex justify-center items-center p-1">
                                {exp.until!.year}
                              </div>
                              <div className="flex-1 flex justify-center items-center">
                                {getMonth(exp.until!.month!)}
                              </div>
                            </div>
                            <div className="flex justify-center  w-full">
                              <div className="flex-4 border-r-1 pl-3 p-1">
                                {` ${exp.company},  ${exp.reason}`}
                              </div>
                              <div className="flex-1 flex justify-center items-center">
                                {exp.isWorking ? "　" : "退社"}
                              </div>
                            </div>
                          </div>
                          {/* Reason To Leave */}
                          <div className="border-b-2  flex  flex-row">
                            <div className="w-[20%] border-r-2 border-dotted flex justify-center ">
                              <div className="border-r-2 border-dotted flex-1 flex justify-center items-center p-1"></div>
                              <div className="flex-1 flex justify-center items-center"></div>
                            </div>
                            <div className="flex justify-center  w-full">
                              <div className="flex-4 border-r-1 pl-3 p-1 text-[12px]">
                                {`理由： ${exp.reason}`}
                              </div>
                              <div className="flex-1 flex justify-center items-center"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="filler-cols-edu">
                      {Array(13)
                        .fill(null)
                        .map((_, index) => (
                          <div
                            key={index}
                            className="border-b-2 flex flex-row h-[26.5px]"
                          >
                            <div className="w-[20%] border-r-2 border-dotted flex justify-center">
                              <div className="border-r-2 border-dotted flex-1 flex justify-center items-center p-1"></div>
                              <div className="flex-1 flex justify-center items-center"></div>
                            </div>
                            <div className="flex justify-center w-full">
                              <div className="flex-4 border-r-1 pl-3 p-1"></div>
                              <div className="flex-1 flex justify-center items-center"></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  {/* End */}
                  <div className="row-span-1 flex">
                    <div className="w-[20%] border-r-2 flex  justify-center items-center"></div>
                    <div className="w-full flex justify-center items-center font-bold"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //! Last Page */}
      <div className="Page2">
        <div className="resume-container py-7   w-[210mm] h-[297mm] flex justify-center text-[12px] ">
          <div className="border-2 w-full h-full grid grid-rows-9">
            {/* Top  */}
            <div className="border-b-2 row-span-4 grid grid-rows-7">
              {/* Certificates */}
              <div className="border-b-2 row-span-3 grid grid-cols-[5%_95%]">
                <div className="border-r-2 flex  font-bold text-[17px] flex-col items-center justify-center">
                  <div>免</div>
                  <div>許</div>
                  <div>・</div>
                  <div>資</div>
                  <div>格</div>
                </div>

                <div className="grid grid-rows-[15%_85%] overflow-hidden">
                  {/* Top Heading */}
                  <div className="border-b-2 flex w-full font-bold text-[14px] ">
                    <div className="flex w-[20%] border-r-2">
                      <div className="flex-1 border-r-1 border-dotted flex justify-center items-center">
                        年
                      </div>
                      <div className="flex-1 flex justify-center items-center">
                        月
                      </div>
                    </div>
                    <div className="w-full flex items-center pl-4">
                      内　　　　容（日本語能力試験、TOEIC、簿記、運転免許など）
                    </div>
                  </div>
                  {/* Certifications Names */}

                  <div>
                    {/* Certificate Names */}
                    {certifications.map((cert) => (
                      <div key={cert.id}>
                        <div className="flex w-full border-b-1 h-[27px] text-[14px]">
                          <div className="flex w-[20%] border-r-2 border-dotted">
                            <div className="border-r-1 border-dotted flex-1 flex justify-center items-center">
                              {getDatePart(cert.date.date!, "y")}
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                              {getDatePart(cert.date.date!, "m")}
                            </div>
                          </div>
                          <div className="flex w-full p-1 pl-3">
                            {cert.title}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Fillers */}
                    <div className="filler-cols ">
                      {" "}
                      {Array(7)
                        .fill(null)
                        .map((_, idx) => (
                          <div key={idx}>
                            <div className="flex w-full border-b-1 h-[24px]">
                              <div className="flex w-[20%] border-r-2 border-dotted">
                                <div className="border-r-1 border-dotted flex-1 flex justify-center items-center"></div>
                                <div className="flex-1 flex justify-center items-center"></div>
                              </div>
                              <div className="flex w-full p-1"></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="border-b-2 row-span-3 grid grid-cols-[5%_95%] overflow-hidden">
                <div className="border-r-2  flex items-center gap-5  pt-15  flex-col  font-bold text-[17px]">
                  <div>語</div>
                  <div>学</div>
                </div>
                <div className="">
                  {/* Native */}
                  <div className="border-b-1 flex">
                    <div className="w-[9%] border-r-1 p-1 flex justify-center items-center">
                      母 語
                    </div>
                    <div className="w-full p-2 flex items-center pl-3">
                      {`${otherInfo.native} 語`}
                    </div>
                  </div>
                  {/* Japanese */}
                  <div className="border-b-1 flex">
                    <div className="w-[9%] border-r-1 p-1 flex justify-center items-center">
                      日 本 語
                    </div>
                    <div className="w-full p-2 flex items-center pl-3">
                      {proff(otherInfo.japanese)}
                    </div>
                  </div>
                  {/* English */}
                  <div className="border-b-1 flex">
                    <div className="w-[9%] border-r-1 p-1 flex justify-center items-center">
                      英 語
                    </div>
                    <div className="w-full p-2 flex items-center pl-3">
                      {proff(otherInfo.english)}
                    </div>
                  </div>
                  {/* Other Langs */}
                  <div className="other-langs">
                    {/* OtherLangs */}
                    {otherLangs.map((lang) => (
                      <div className="flex border-b-2" key={lang.id}>
                        <div className="flex w-[30%] border-r-2 h-[30.3px] ">
                          <div className="w-[57%] border-r-1 p-1 flex justify-center items-center ">
                            そ の 他
                          </div>
                          <div className="w-full p-1 flex items-center pl-3">
                            {`${lang.language} 語`}
                          </div>
                        </div>
                        <div className="flex w-full items-center pl-3">
                          <div>{proff(lang.proficiency)}</div>
                        </div>
                      </div>
                    ))}
                    {/* Filler */}
                    <div>
                      {Array(5)
                        .fill(null)
                        .map((_, idx) => (
                          <div className="flex border-b-2" key={idx}>
                            <div className="flex w-[30%] border-r-2 h-[30.3px] ">
                              <div className="w-[57%] border-r-1 p-1 flex justify-center items-center ">
                                そ の 他
                              </div>
                              <div className="w-full p-1 flex items-center pl-3"></div>
                            </div>
                            <div className="flex w-full items-center pl-3">
                              <div></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Current Status */}
              <div className="row-span-1 grid grid-cols-4">
                <div className="border-r-2 flex flex-col  w-full">
                  <div className="flex-1 flex justify-center items-center p-1 font-bold">
                    在留資格
                  </div>
                  <div className="flex-2 flex items-center justify-center truncate ">
                    {japanVisaTypesJP[otherInfo.status]}
                  </div>
                </div>
                <div className="border-r-2 flex flex-col  w-full">
                  <div className="flex-1 flex justify-center font-bold items-center p-1">
                    在留期限（mm/yy）
                  </div>
                  <div className="flex-2 flex items-center justify-center ">
                    {`${getDatePart(
                      otherInfo.until.date!,
                      "m"
                    )} /  ${getDatePart(otherInfo.until.date!, "y")}`}
                  </div>
                </div>
                <div className="border-r-2 flex flex-col  w-full">
                  <div className="flex-1 flex justify-center items-center p-1 font-bold">
                    健康状態
                  </div>
                  <div className="flex-2 flex items-center justify-center ">
                    {getHealth(personalInfo.health)}
                  </div>
                </div>
                <div className=" flex flex-col  w-full">
                  <div className="flex-1 flex justify-center items-center p-1 font-bold">
                    配偶者
                  </div>
                  <div className="flex-2 flex items-center justify-center ">
                    {getMarried(personalInfo.spouse)}
                  </div>
                </div>
              </div>
            </div>
            {/* Summaries */}
            <div className="row-span-5 grid grid-rows-2 overflow-hidden text-[14px]">
              {/* Shiboudoki */}
              <div className="border-b-2 grid grid-rows-[10%_90%]">
                <div className="border-b-1 border-dotted flex items-center pl-3 font-bold">
                  希望職種、志望動機
                </div>
                <div className="flex flex-wrap px-3 pt-3 text-[12px]">
                  {summaries.shibou}
                </div>
              </div>
              {/* JIKOPR */}
              <div className="border-b-2 grid grid-rows-[10%_90%]">
                <div className="border-b-1 border-dotted flex items-center pl-3 font-bold">
                  自己ＰＲ、自分の強み・長所、セールスポイント など
                </div>
                <div className="flex flex-wrap px-3 pt-3 text-[12px]">
                  {summaries.pr}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rirekisho;
