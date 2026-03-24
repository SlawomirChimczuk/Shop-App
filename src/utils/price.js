export function toDecimal(amount){
    return `£${(amount / 100).toFixed(2)}`;
}