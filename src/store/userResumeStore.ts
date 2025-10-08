import { create } from "zustand";
import { persist } from "zustand/middleware";

// ------------------------- //
//  Interfaces (from your code)
// ------------------------- //

interface PersonalInfo {
  name: string;
  jpName: string;
  dob: string;
  gender: string;
  country: string;
  married: string;
  spouse: string;
  photo: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  add: string;
  addJpn: string;
  station: string;
}

export interface MonthYear {
  month?: string;
  year?: string;
  date?: string;
}

export interface EducationInfo {
  id: string;
  from: MonthYear;
  until?: MonthYear;
  isEnrolled?: boolean;
  school: string;
  major: string;
}

export interface ExperienceInfo {
  id: string;
  from: MonthYear;
  until?: MonthYear;
  isWorking?: boolean;
  company: string;
  tasks: string;
  reason: string;
}

export interface CertificationInfo {
  id: string;
  title: string;
  date: MonthYear;
}

export interface OtherInfo {
  status: string;
  until: MonthYear;
  native: string;
  english: string;
}

export interface OtherInfoLangs {
  id: string;
  language: string;
  proficiency: string;
}

interface Summaries {
  shibou: string;
  pr: string;
}

// ------------------------- //
//  Zustand Store Definition
// ------------------------- //

interface ResumeState {
  // ✅ Sections
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  education: EducationInfo[];
  experience: ExperienceInfo[];
  certifications: CertificationInfo[];
  otherInfo: OtherInfo;
  otherLangs: OtherInfoLangs[];
  summaries: Summaries;

  // ✅ Actions
  setPersonalInfo: (info: Partial<PersonalInfo>) => void;
  setContactInfo: (info: Partial<ContactInfo>) => void;

  addEducation: (edu: EducationInfo) => void;
  updateEducation: (id: string, data: Partial<EducationInfo>) => void;
  deleteEducation: (id: string) => void;

  addExperience: (exp: ExperienceInfo) => void;
  updateExperience: (id: string, data: Partial<ExperienceInfo>) => void;
  deleteExperience: (id: string) => void;

  addCertification: (cert: CertificationInfo) => void;
  updateCertification: (id: string, data: Partial<CertificationInfo>) => void;
  deleteCertification: (id: string) => void;

  setOtherInfo: (info: Partial<OtherInfo>) => void;
  addLanguage: (lang: OtherInfoLangs) => void;
  updateLanguage: (id: string, data: Partial<OtherInfoLangs>) => void;
  deleteLanguage: (id: string) => void;

  setSummaries: (data: Partial<Summaries>) => void;

  clearAll: () => void;
}

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      // --------------------- //
      // 🧱 Default Empty State
      // --------------------- //
      personalInfo: {
        name: "",
        jpName: "",
        dob: "",
        gender: "",
        country: "",
        married: "",
        spouse: "",
        photo: "",
      },
      contactInfo: {
        email: "",
        phone: "",
        add: "",
        addJpn: "",
        station: "",
      },
      education: [],
      experience: [],
      certifications: [],
      otherInfo: {
        status: "",
        until: {},
        native: "",
        english: "",
      },
      otherLangs: [],
      summaries: {
        shibou: "",
        pr: "",
      },

      // --------------------- //
      // ⚙️ Actions
      // --------------------- //

      // Personal & Contact
      setPersonalInfo: (info) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...info },
        })),

      setContactInfo: (info) =>
        set((state) => ({
          contactInfo: { ...state.contactInfo, ...info },
        })),

      // Education
      addEducation: (edu) =>
        set((state) => ({ education: [...state.education, edu] })),

      updateEducation: (id, data) =>
        set((state) => ({
          education: state.education.map((e) =>
            e.id === id ? { ...e, ...data } : e
          ),
        })),

      deleteEducation: (id) =>
        set((state) => ({
          education: state.education.filter((e) => e.id !== id),
        })),

      // Experience
      addExperience: (exp) =>
        set((state) => ({ experience: [...state.experience, exp] })),

      updateExperience: (id, data) =>
        set((state) => ({
          experience: state.experience.map((e) =>
            e.id === id ? { ...e, ...data } : e
          ),
        })),

      deleteExperience: (id) =>
        set((state) => ({
          experience: state.experience.filter((e) => e.id !== id),
        })),

      // Certifications
      addCertification: (cert) =>
        set((state) => ({ certifications: [...state.certifications, cert] })),

      deleteCertification: (id) =>
        set((state) => ({
          certifications: state.certifications.filter((c) => c.id !== id),
        })),

      updateCertification: (id, data) =>
        set((state) => ({
          certifications: state.certifications.map((c) =>
            c.id === id ? { ...c, ...data } : c
          ),
        })),

      // Others
      setOtherInfo: (info) =>
        set((state) => ({
          otherInfo: { ...state.otherInfo, ...info },
        })),

      addLanguage: (lang) =>
        set((state) => ({ otherLangs: [...state.otherLangs, lang] })),

      updateLanguage: (id, data) =>
        set((state) => ({
          otherLangs: state.otherLangs.map((l) =>
            l.id === id ? { ...l, ...data } : l
          ),
        })),

      deleteLanguage: (id) =>
        set((state) => ({
          otherLangs: state.otherLangs.filter((l) => l.id !== id),
        })),

      // Summaries
      setSummaries: (data) =>
        set((state) => ({
          summaries: { ...state.summaries, ...data },
        })),

      // Clear Everything
      clearAll: () =>
        set({
          personalInfo: {
            name: "",
            jpName: "",
            dob: "",
            gender: "",
            country: "",
            married: "",
            spouse: "",
            photo: "",
          },
          contactInfo: {
            email: "",
            phone: "",
            add: "",
            addJpn: "",
            station: "",
          },
          education: [],
          experience: [],
          certifications: [],
          otherInfo: {
            status: "",
            until: {},
            native: "",
            english: "",
          },
          otherLangs: [],
          summaries: { shibou: "", pr: "" },
        }),
    }),
    {
      name: "resume-storage", // 🧠 localStorage key
    }
  )
);
