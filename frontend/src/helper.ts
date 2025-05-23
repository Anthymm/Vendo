export function compareTarget(expectedTarget: String, target: String) {
  if (expectedTarget == target) {
    return true
  } else {
    return false
  }
}

export function stringContains(inputString: String, comparator: string) {
  if (inputString && comparator) {
    return inputString.includes(comparator)
  } else {
    console.warn('InputString or Comparator missing')
  }
}

export async function fetchApi(
  api: string,
  method: string,
  urlParameters: string | null,
  postContent: object | null,
) {
  let cb
  if (method !== 'FETCH') {
    const response = await fetch('/api/' + api, {
      method: method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postContent),
    })
    return await response.json()
  } else {
    const response = await fetch('/api/' + api + (urlParameters || ''))
    return await response.json()
  }
}

export function readFile(event: any) {
  const el = event.target
  const file = el.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    el.style.backgroundImage = `url(${reader.result})`
  }
}
