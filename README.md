> Easy lightweight library to replace web content without reloading page

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
| replaceContainer    | String: selector for content replacement               | '#container'                       |
| linksNodeList       | NodeList: links to pages                               | document.querySelectorAll('.link') |
| history             | bool: use browser history API                          | true                               |
| onprogress          | function: progress event handler                       | undefined                          |
| onloadstart         | function: loadstart event handler                      | undefined                          |
| onloadend           | function: onloadend event handler                      | undefined                          |
