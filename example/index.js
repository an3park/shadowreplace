shadowReplace({
  activeLinkAttribute: 'active',
  replaceContainer: 'main#shadow',
  linksNodeList: document.querySelectorAll('.link'),
  onprogress: e => console.log(Date.now()),
  onloadstart: e => console.log(Date.now())
})
