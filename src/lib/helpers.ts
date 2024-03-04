export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInIndia(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to India's time
  const offsetIndia = 5.5; // India is in UTC+5:30, but you might need to adjust this based on Daylight Saving Time.
  now.setHours(now.getUTCHours() + offsetIndia);

  return now;
}

export function formatTimeForIndia(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Asia/Kolkata",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Indian Standard Time is abbereviated as "IST".
  formattedTime += " IST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
