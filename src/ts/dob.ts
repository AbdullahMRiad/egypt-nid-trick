import type { Dob } from "./types";

export default function ExtractDob(id: string): Dob {
    const c: number = parseInt(id.charAt(0))
    const y: number = (parseInt(id[1]) * 10) + (parseInt(id[2]))
    const m: number = (parseInt(id[3]) * 10) + (parseInt(id[4]))
    const d: number = (parseInt(id[5]) * 10) + (parseInt(id[6]))

    return(
        {
            "y": ((c - 1) * 1000) + y,
            "m": m,
            "d": d
        }
    )
}