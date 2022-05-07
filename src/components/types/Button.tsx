import { MouseEventHandler, ReactNode } from "react";

export type props = {
    onClick?: MouseEventHandler<HTMLDivElement> | undefined,
    children?: ReactNode,
    className?: string
}