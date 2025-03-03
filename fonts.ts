/* Setting up fonts to be used in the application */
import { Mulish, Nunito, Quicksand, Montserrat } from "next/font/google";

export const mulish = Mulish({
    weight: ["400", "700"],
    subsets: ["latin"]
})

export const nunito = Nunito({
    weight: ["400", "600", "800"],
    subsets: ["latin"]
})

export const quicksand = Quicksand({
    weight: ["400", "700"],
    subsets: ["latin"]
})

export const montserrat = Montserrat({
    weight: ["400", "600", "800"],
    subsets: ["latin"]
})