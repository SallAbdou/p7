import { tagContainer } from '../components/domLinker'

export const createItem = (data, parent, category) => {
  parent.innerHTML = ''

  const existingTags = Array.from(tagContainer.querySelectorAll('span')).map(tag => tag.innerHTML.toLowerCase())

  data.forEach(item => {
    const itemName = item.toLowerCase()

    // Vérifie si le tag existe déjà
    if (!existingTags.includes(itemName)) {
      const article = document.createElement('article')
      article.innerHTML = item

      // TODO add event listener to create Tag
      article.addEventListener('click', () => createTag(item, category))

      parent.appendChild(article)

      // Met à jour la liste des tags existants
      existingTags.push(itemName)
      console.log(itemName)
    }
  })
}

const createTag = (data, category) => {
  const article = document.createElement('article')
  const span = document.createElement('span')
  span.innerHTML = data
  article.appendChild(span)
  const img = document.createElement('img')
  img.src = '/icons/x.png'
  img.alt = 'supprimer tag'
  img.addEventListener('click', () => deleteTag(article, data, category))

  article.appendChild(img)

  tagContainer.appendChild(article)
}

const deleteTag = (article, data, category) => {
  article.remove()
  console.log()
}
