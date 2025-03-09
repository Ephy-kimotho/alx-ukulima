import type { ReactNode, ComponentType } from "react"
import { StaticImageData } from "next/image"

export interface ButtonProps {
    children: ReactNode,
    action: () => void
    moreStyles?: string
    disabled?: boolean
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
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    password: string,
}

export interface CategoryCardProps {
    categoryImage: StaticImageData,
    categoryName: string
}

export interface Categories {
    id: number,
    name: string,
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

export interface ProductDetailProps {
    id: number | string,
    image: string | StaticImageData,
    name: string,
    price: string,
    description: string
    category: Categories,
    stock: number
}

export interface CartProductProps {
    imageUrl: string | StaticImageData,
    name: string,
    price: number | string,
    quantity: number
}

export interface OrderSummaryProps {
    subtotal: number,
    deliveryFee: number,
    grandTotal: number
}

export interface CheckoutInitialValues {
    destination: string,
    phone: string
}

export interface LoginResponseData {
    refresh: string,
    access: string
}

export interface ProductListingResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: ProductDetailProps[]
}

export type LoginInitialValues = Pick<SignUpInitialValues, "email" | "password">
export type AuthButtonProps = Pick<ButtonProps, "children" | "moreStyles">
export type ContactFormValues = Pick<SignUpInitialValues, "first_name" | "email"> & Pick<TestimonialCardProps, "message">
export type User = Omit<SignUpInitialValues, "password">
