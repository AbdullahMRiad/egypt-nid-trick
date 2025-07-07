import Calculate from "./ts/calculate"

export const dobLabel:         HTMLSpanElement   = document.getElementById("dob")    as HTMLSpanElement
export const governorateLabel: HTMLSpanElement   = document.getElementById("gov")    as HTMLSpanElement
export const genderLabel:      HTMLSpanElement   = document.getElementById("gen")    as HTMLSpanElement
       const nationalIdInput:  HTMLInputElement  = document.getElementById("id-number")     as HTMLInputElement
       const submitButton:     HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement

submitButton.addEventListener("click", () => Calculate(nationalIdInput.value.toString()))