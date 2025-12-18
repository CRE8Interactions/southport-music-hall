import { utcToZonedTime } from "date-fns-tz";
import moment from "moment";

// currency changes to what the host is set to
// rounds decimals to 2
// adds comma separator
export const formatCurrency = (num) => {
    return parseFloat(num ? num : 0).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// Map US abbreviations to canonical IANA time zones
const ABBR_TO_IANA = {
  CDT: "America/Chicago",
  CST: "America/Chicago"
};

function isIana(tz) {
    return typeof tz === "string" && tz.includes("/");
}

export function ensureIanaTimeZone(tzLike, fallback = "UTC") {
    try {
        if (!tzLike) return fallback;
        // If object with abbr or utc list
        if (typeof tzLike === "object") {
            console.log('tz is object');
            if (tzLike.utc && Array.isArray(tzLike.utc) && tzLike.utc.length > 0) {
                return tzLike.utc[0];
            }
            if (tzLike.abbr && ABBR_TO_IANA[tzLike.abbr]) {
                return ABBR_TO_IANA[tzLike.abbr];
            }
            if (typeof tzLike.value === "string" && ABBR_TO_IANA[tzLike.value]) {
                return ABBR_TO_IANA[tzLike.value];
            }
        }
        if (typeof tzLike === "string") {
            if (isIana(tzLike)) return tzLike;
            const upper = String(tzLike).toUpperCase();
            if (ABBR_TO_IANA[upper]) return ABBR_TO_IANA[upper];
        }
    } catch (_e) { }
    return fallback;
}

export function toZonedTime(dateInput, tz) {
  return utcToLocal(dateInput, tz);
}

export function utcToLocal(utcInput, tz) {
  const date = typeof utcInput === "string" ? new Date(utcInput) : utcInput;
  return utcToZonedTime(date, tz);
}

// converts date to timezone using IANA tz (no fixed offsets)
// returns moment object - used with other format dates helper methods
export const getTimezoneDate = (date, timezone) => {
  if (!date || !timezone) return;
  const tz = ensureIanaTimeZone(timezone, "UTC");
  console.log(tz);
  // shift the instant into the target zone for display
    const dateObj =
        typeof date === "string"
            ? new Date(date)
            : date instanceof Date
                ? date
                : new Date(date);
    const zoned = toZonedTime(dateObj, tz);
  return moment(zoned);
};

// format full date 
// display full date with start and end time and/or time only
// assumed an event is one day
export const formatDateTime = (date, formatter) => {
    switch (formatter) {
        case 'timeOnly':
            return date.format('h:mma')

        default:
            return date.format('dddd, MMM D | h:mma')
    }
}
