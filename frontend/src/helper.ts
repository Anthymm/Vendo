export function compareTarget(expectedTarget: string, target: string) {
  if (expectedTarget == target) {
    return true
  } else {
    return false
  }
}

export function stringContains(inputString: string, comparator: string) {
  if (inputString && comparator) {
    return inputString.includes(comparator)
  } else {
    console.warn('InputString or Comparator missing')
  }
}
