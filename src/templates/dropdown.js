export const createItem = (data, parent, category) => {
  parent.innerHTML = ''

  data.forEach(item => {
    const article = document.createElement('article')
    article.innerHTML = item

    // TODO add event listener to create Tag

    parent.appendChild(article)
  })
}
