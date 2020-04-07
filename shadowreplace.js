window.shadowReplace = function (o) {
  if (o === null || typeof o !== 'object') o = {}
  const props = {
    activeLinkAttribute: o.activeLinkAttribute,
    targetSelector: o.targetSelector || '#container',
    linksSelector: o.linksNodeList || document.getElementsByClassName('link'),
    history: o.history !== false
  }

  function fetche(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.responseType = 'text'
      xhr.open('GET', url)
      xhr.addEventListener('load', () => resolve(xhr.response))
      xhr.addEventListener('error', reject)
      xhr.send()
    })
  }

  function pushContent(dom) {
    const shadow = document.createElement('div').attachShadow({ mode: 'closed' })
    shadow.innerHTML = dom
    document.title = shadow.querySelector('title').innerText
    const target = document.querySelector(props.targetSelector)
    target.parentElement.replaceChild(shadow.querySelector(props.targetSelector), target)
  }

  function fetchAndPush(url) {
    const promise = fetche(url).then(pushContent)
    if (props.activeLinkAttribute) {
      promise.then(() => {
        links.forEach(el =>
          el.href === url
            ? el.setAttribute(props.activeLinkAttribute, '')
            : el.removeAttribute(props.activeLinkAttribute)
        )
      })
    }
    return promise
  }

  const links = props.linksSelector
  if (props.activeLinkAttribute) {
    links.forEach(el => {
      if (el.href === window.location.href) el.setAttribute(props.activeLinkAttribute, '')
    })
  }

  links.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault()
      if (props.history && window.location.href === a.href) return
      fetchAndPush(a.href).then(() => {
        if (props.history) {
          ;(window.history.state && window.history.state.shadowReplace) ||
            window.history.replaceState({ shadowReplace: true }, '')
          window.history.pushState({ shadowReplace: true }, '', a.href)
        }
      })
    })
  })

  if (props.history) {
    window.addEventListener('popstate', e => {
      if (!e.state || !e.state.shadowReplace) return
      fetchAndPush(document.location)
    })
  }
}
