// Fonction de recherche
export const searchRecipes = (query, recipes) => {
  // conversion de la recherche en miniscule pour le case sensitive
  return recipes.filter(recipe => {
    const titleFilter = recipe.name.toLowerCase().includes(query.toLowerCase())
    const descriptionFilter = recipe.description.toLowerCase().includes(query.toLowerCase())
    const ingredientFilter = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(query.toLowerCase()))

    return titleFilter || descriptionFilter || ingredientFilter
  })
}

const isRecipeIncludesForEachTagIngredient = (recipe, tags) => tags.ingredients.every(ingredient => recipe.ingredients.map(element => element.ingredient).includes(ingredient))
const isRecipeIncludesForEveryTagDevice = (recipe, tags) => tags.devices.every(device => recipe.appliance.includes(device))
const isRecipeIncludesForEveryTagUstensil = (recipe, tags) => tags.ustensils.every(ustensil => recipe.ustensils.includes(ustensil))

export const filterByTags = (recipes, tags) => recipes.filter(recipe =>
  isRecipeIncludesForEachTagIngredient(recipe, tags) &&
  isRecipeIncludesForEveryTagDevice(recipe, tags) &&
  isRecipeIncludesForEveryTagUstensil(recipe, tags)
)
