export default function getDateFomat(date: Date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const offsetHours = String(Math.floor(date.getTimezoneOffset() / 60)).padStart(2, '0');
    const offsetMinutes = String(date.getTimezoneOffset() % 60).padStart(2, '0');
    const offsetSign = date.getTimezoneOffset() > 0 ? '-' : '+';
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}:${offsetMinutes}`;
  }