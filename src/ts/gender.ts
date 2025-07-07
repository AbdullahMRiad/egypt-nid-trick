import type { Gender } from "./types";

export default function ExtractGender(id: string): Gender {
    const genderDigit: number = (parseInt(id[12]))
    const gender     : Gender = genderDigit % 2 === 0 ? "أنثى" : "ذكر"

    return(
        gender
    )
}