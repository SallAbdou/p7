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
