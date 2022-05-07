import { ChangeEventHandler } from "react"

export type props = {
    icon?: string,
    type?: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
    error?: string
}