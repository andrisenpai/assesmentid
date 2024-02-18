export const transformDate = (date) => {
    // convert '2023-03-07T22:14:12.003Z' into MAR 7, 2023
    const inputDate = new Date(date);
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const outputDate = monthNames[inputDate.getMonth()] + ' ' + inputDate.getDate() + ', ' + inputDate.getFullYear();
    return outputDate
}

export function roundHalfDown(num) {
    return -Math.round(-num);
}