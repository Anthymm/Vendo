import { h, createVNode, type Component, render, type VNode, type VNodeProps } from 'vue'

const app: Element | null = document.getElementById('app')
let currentVNode: VNode | null = null

function createModalDom() {
  const modalDom = document.createElement('div')
  modalDom.setAttribute('id', 'modalDom')
  modalDom.style.width = '100vw'
  modalDom.style.height = '100vh'
  modalDom.style.position = 'absolute'
  app?.appendChild(modalDom)
  return modalDom
}

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

export function openModal(modal: any, props: VNodeProps | null) {
  currentVNode = createVNode(modal, props)
  render(currentVNode, createModalDom())
}

export function closeModal() {
  const modalDom = document.querySelector('#modalDom')
  modalDom?.remove()
}
