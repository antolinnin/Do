export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInSpain(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Spain's time
  const offsetSpain = 2; // Spain is in UTC+5:30, but you might need to adjust this based on Daylight Saving Time.
  now.setHours(now.getUTCHours() + offsetSpain);

  return now;
}

export function formatTimeForSpain(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Europe/Madrid",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Spain Standard Time is abbereviated as "IST".
  formattedTime += "";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
