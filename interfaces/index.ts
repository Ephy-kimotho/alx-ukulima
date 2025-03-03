import type { ReactNode, ComponentType } from "react"

export interface ButtonProps {
    children: ReactNode,
    moreStyles?: string
    action: () => void
}

export interface CompanyInfoProps {
    Icon: ComponentType<{ size: number, color: string, strokeWidth?: number }>,
    title: string,
    text: string
}
