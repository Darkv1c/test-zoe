export function formatPrice(price: number):string|any {
    const priceString = price.toString().split('').reverse().join('')
    return priceString.replace(/(.{3})/g, '$1,').split('').reverse().join('')
}