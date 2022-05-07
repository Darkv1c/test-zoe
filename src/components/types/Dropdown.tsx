export type props = {
    label?: string,
    options: {
        label: string,
        value: string | number
    }[],
    onChange: Function
}

export type containerProps = {
    isOpen: boolean
}