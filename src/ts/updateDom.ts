import type { OutputData } from "./types";
import { dobLabel, genderLabel, governorateLabel } from "../main";

export default function UpdateDOM(data: OutputData) {
    const parsedDate: string = (new Date(data.dob.y, data.dob.m - 1, data.dob.d)).toLocaleDateString()
    const gender: string = data.gender
    const governorate: string = data.governorate

    dobLabel.innerText = parsedDate
    governorateLabel.innerText = governorate
    genderLabel.innerText = gender
}