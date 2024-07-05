import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

/**
 * Splits an array into multiple parts
 * @param arr The array to split
 * @param numParts The number of parts to split the array into (default 2)
 * @returns The array split into multiple parts
 */
export const splitArray = <T extends unknown>(
  arr: T[],
  numParts: number = 2,
): T[][] => {
  const result = []
  const baseSize = Math.floor(arr.length / numParts)
  let remainder = arr.length % numParts
  let startIndex = 0

  for (let i = 0; i < numParts; i++) {
    let partSize = baseSize
    if (remainder > 0) {
      partSize += 1
      remainder -= 1
    }
    const part = arr.slice(startIndex, startIndex + partSize)
    result.push(part)
    startIndex += partSize
  }

  return result
}
