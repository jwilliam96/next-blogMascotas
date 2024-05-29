import { PT_Sans, Roboto, Playfair_Display } from "next/font/google"

export const sans = PT_Sans({
    subsets: ["latin"],
    weight: ["400", "700"]
})

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "400", "700"]
})

export const fontTitle = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "600"]
})