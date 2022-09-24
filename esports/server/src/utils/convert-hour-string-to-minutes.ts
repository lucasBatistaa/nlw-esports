export function convertHourStringToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(":").map(Number);

    const minutesAmont = (hours * 60) + minutes;

    return minutesAmont;
}