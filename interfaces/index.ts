import type { ReactNode, ComponentType } from "react"
import { StaticImageData } from "next/image"

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

export interface CategoryCardProps {
    categoryImage: StaticImageData,
    categoryName: string

}

export interface TestimonialCardProps {
    image: StaticImageData,
    name: string,
    message: string
}

export interface FAQ_QuestionProps {
    question: string,
    answer: string
}

export type LoginInitialValues = Pick<SignUpInitialValues, "email" | "password">
export type AuthButtonProps = Pick<ButtonProps, "children" | "moreStyles">
