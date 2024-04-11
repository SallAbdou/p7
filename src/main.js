import './styles/main.scss'
import { getRecipes } from './components/recipesHandler'
import { recipesContainer, searchInput, deleteButton } from './components/domLinker'
import { createCard } from './templates/card'
import { sortRecipes } from './templates/searchbar'

const displayRecipes = data => {
  recipesContainer.innerHTML = ''
  if (data.length === 0) {
    const message = document.createElement('span')
    message.textContent = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.'
    message.classList.add('no-recipes-message')
    recipesContainer.appendChild(message)
  } else {
    data.forEach(item => {
      recipesContainer.appendChild(createCard(item))
    })
  }
}

const init = () => {
  const recipes = getRecipes()
  displayRecipes(recipes)
  sortRecipes(recipes, displayRecipes)

  // Ajout de l'événement pour afficher la croix
  searchInput.addEventListener('input', () => {
    if (searchInput.value) {
      deleteButton.classList.add('show')
    } else {
      deleteButton.classList.remove('show')
    }
  })
}
init()
