import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"

// Plugins
dayjs.extend(advancedFormat)

type dateFormats = "onlyDate" | "standard" | "extended"

const KNOWN_FORMATS: { [key in dateFormats]: string } = {
  onlyDate: "YYYY/MM/DD",
  standard: "YYYY/MM/DD HH:mm",
  extended: "dddd, MMMM Do, YYYY h:mm:ss A",
}

export const toMs = (seconds: number): number => seconds * 1000

export function dateFormat(
  date: string | number | Date,
  format: dateFormats = "onlyDate"
): string {
  return dayjs(date).format(KNOWN_FORMATS[format] || format)
}
