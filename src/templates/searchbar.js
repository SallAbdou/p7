import { searchInput, deleteButton } from '../components/domLinker'

// Fonction de recherche
export function searchRecipes (query, recipes) {
  if (query.length < 3) {
    return []
  }

  // conversion de la recherche en miniscule pour le case sensitive
  query = query.toLowerCase()

  return recipes.filter(recipe => {
    const titleFilter = recipe.name.toLowerCase().includes(query)
    const descriptionFilter = recipe.description.toLowerCase().includes(query)
    const ingredientFilter = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(query))

    return titleFilter || descriptionFilter || ingredientFilter
  })
}

export const sortRecipes = (recipes, displayRecipes) => {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value
    const matchedRecipes = searchRecipes(query, recipes)
    displayRecipes(matchedRecipes)
  })

  // EventListener de la croix
  deleteButton.addEventListener('click', () => {
    searchInput.value = ''
    displayRecipes(recipes)
  })
}
