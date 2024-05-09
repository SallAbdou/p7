export const searchRecipes = (query, recipes) => {
  const filteredRecipes = []

  // Parcourt chaque recette dans le tableau
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i]

    const titleFilter = recipe.name.toLowerCase().includes(query.toLowerCase())
    const descriptionFilter = recipe.description.toLowerCase().includes(query.toLowerCase())

    let ingredientFilter = false
    // Parcourt les ingrédients de toutes les recettes
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j]
      if (ingredient.ingredient.toLowerCase().includes(query.toLowerCase())) {
        ingredientFilter = true
        break
      }
    }

    if (titleFilter || descriptionFilter || ingredientFilter) {
      filteredRecipes.push(recipe)
    }
  }

  return filteredRecipes
}

const isRecipeIncludesForEachTagIngredient = (recipe, tags) => tags.ingredients.every(ingredient => recipe.ingredients.map(element => element.ingredient).includes(ingredient))
const isRecipeIncludesForEveryTagDevice = (recipe, tags) => tags.devices.every(device => recipe.appliance.includes(device))
const isRecipeIncludesForEveryTagUstensil = (recipe, tags) => tags.ustensils.every(ustensil => recipe.ustensils.includes(ustensil))

export const filterByTags = (recipes, tags) => recipes.filter(recipe =>
  isRecipeIncludesForEachTagIngredient(recipe, tags) &&
  isRecipeIncludesForEveryTagDevice(recipe, tags) &&
  isRecipeIncludesForEveryTagUstensil(recipe, tags)
)
