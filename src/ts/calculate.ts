import ExtractDob from "./dob";
import ExtractGender from "./gender";
import ExtractGovernorate from "./governorate";
import type { OutputData } from "./types";
import UpdateDOM from "./updateDom";

export default function Calculate(id: string): OutputData {
    const dob = ExtractDob(id)
    const governorate = ExtractGovernorate(id)
    const gender = ExtractGender(id)

    UpdateDOM({
            "dob": dob,
            "gender": gender,
            "governorate": governorate
        })
    return(
        {
            "dob": dob,
            "gender": gender,
            "governorate": governorate
        }
    )
}