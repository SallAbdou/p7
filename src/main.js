import './styles/main.scss'
import { getRecipes } from './components/recipesHandler'
import { recipesContainer } from './components/domLinker'
import { createCard } from './templates/card'

const displayRecipes = data => {
  recipesContainer.innerHTML = ''

  data.forEach(item => {
    recipesContainer.appendChild(createCard(item))
  })
}

const init = () => {
  const recipes = getRecipes()
  displayRecipes(recipes)
}

init()
