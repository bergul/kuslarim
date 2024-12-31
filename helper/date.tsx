export function datgetformatDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}   // 2023-07-30

export function getLastWeek(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}