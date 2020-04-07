> Easy lightweight library to replace web content without reload page

[Example](https://an3park.github.io/shadowreplace)

## Install

```html
<script src="/shadowreplace.js"></script>
```

## Usage

```js
shadowReplace({
  activeLinkAttribute: 'active',
  targetSelector: 'main#shadow',
  linksNodeList: document.querySelectorAll('.link'),
  history: true
})
```

## Property description

| property            | description                                            | default                            |
| ------------------- | :----------------------------------------------------- | :--------------------------------- |
| activeLinkAttribute | String: provide to add attribute for last clicked link | undefined                          |
| targetSelector      | String: HTMLElement selector for content replacement   | '#container'                       |
| linksNodeList       | NodeList: links to pages                               | document.querySelectorAll('.link') |
| history             | bool: use browser history API                          | true                               |
