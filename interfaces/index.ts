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

export interface InputProps {
    Icon: ComponentType<{ size: number, color: string, strokewidth?: number, onClick?: () => void, className?: string }>,
    name: string,
    type: string,
    placeholder: string,
    togglePassword?: () => void
}


export interface SignUpInitialValues {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
}

export type LoginInitialValues = Pick<SignUpInitialValues, "email" | "password">
export type AuthButtonProps = Pick<ButtonProps, "children" | "moreStyles">
