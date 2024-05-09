import { tagContainer } from '../components/domLinker'
import { state } from '../components/state'

export const createItem = (data, parent, category, callback) => {
  parent.innerHTML = ''

  data.forEach(item => {
    const article = document.createElement('article')
    article.innerHTML = item

    // add event listener to create Tag
    article.addEventListener('click', () => createTag(item, category, callback))

    parent.appendChild(article)
  })
}

const createTag = (data, category, callback) => {
  if (!state.tags[category].find(element => element === data)) {
    // add tag to state
    state.tags[category].push(data)

    const article = document.createElement('article')
    const span = document.createElement('span')
    span.innerHTML = data
    article.appendChild(span)
    const img = document.createElement('img')
    img.src = '/icons/x.png'
    img.alt = 'supprimer tag'
    // add event listener to delete tag on click
    img.addEventListener('click', () => {
      // remove tag from UI
      article.remove()
      // delete from state
      state.tags[category] = state.tags[category].filter(item => item !== data)
      // update UI
      callback()
    })

    article.appendChild(img)

    tagContainer.appendChild(article)

    // update UI
    callback()
  }
}
