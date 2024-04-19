import './styles/main.scss'
import { getRecipes } from './components/recipesHandler'
import { recipesContainer, searchInput, deleteButton, recipesCounter } from './components/domLinker'
import { createCard, displayErrorMessage } from './templates/card'
import { updateDropdowns } from './components/dropdown.js'

const updateSearch = () => {
  const recipes = getRecipes(searchInput.value)
  displayRecipes(recipes)
}

const displayRecipes = data => {
  recipesContainer.innerHTML = ''

  updateRecipesCounter(data)

  if (data.length === 0) {
    recipesContainer.appendChild(displayErrorMessage(searchInput.value))
  }

  data.forEach(item => recipesContainer.appendChild(createCard(item)))
  // Met à jour les dropdown en fonction du prompt dans la search bar
  updateDropdowns(data)
}

const init = () => {
  updateSearch()
}

// Ajout de l'événement pour afficher la croix
searchInput.addEventListener('input', () => {
  updateSearch()
  displayDeleteButton()
})

const updateRecipesCounter = data => {
  recipesCounter.innerHTML = `${data.length} recettes`
}

const displayDeleteButton = () => searchInput.value ? deleteButton.classList.add('show') : deleteButton.classList.remove('show')

// EventListener de la croix
deleteButton.addEventListener('click', () => {
  searchInput.value = ''
  updateSearch()
})

init()
