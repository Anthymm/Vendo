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

export function fetchApi(
  api: string,
  method: string,
  urlParameters: string | null,
  postContent: object | null,
) {
  let cb
  if (method != 'FETCH') {
    fetch('/api/' + api, {
      method: method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postContent),
    })
      .then((resp) => resp.json())
      .then((data) => {
        cb = data
      })
  } else {
    console.log(api + urlParameters)
    fetch('/api/' + api + urlParameters)
      .then((resp) => resp.json())
      .then((data) => {
        cb = data
      })
  }
  return cb
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
