export interface Dob {
  y: number,
  m: number,
  d: number
}

export type Governorate = "القاهرة" | "الإسكندرية" | "بورسعيد" | "السويس" | "دمياط" | "الدقهلية" | "الشرقية" | "القليوبية" | "كفر الشيخ" | "الغربية" | "المنوفية" | "البحيرة" | "الإسماعيلية" | "الجيزة" | "بني سويف" | "الفيوم" | "المنيا" | "أسيوط" | "سوهاج" | "قنا" | "أسوان" | "الأقصر" | "البحر الأحمر" | "الوادى الجديد" | "مطروح" | "شمال سيناء" | "جنوب سيناء" | "خارج الجمهورية"

export type Gender = "ذكر" | "أنثى"

export interface OutputData {
  dob: Dob,
  governorate: Governorate,
  gender: Gender
}