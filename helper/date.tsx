export function datgetformatDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}   // 2023-07-30

export function getLastWeek(date, days) {


    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}
export function getFormattedDate(isoString) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Aylar 0-11 arası olduğu için +1 ekliyoruz
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}