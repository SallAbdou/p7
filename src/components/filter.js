// import { getRecipes } from './recipesHandler.js'
// import { searchRecipes } from './search.js'
// import { activeTags } from '../main.js'

// export const filterRecipesByTags = (main = '') => {
//   let filteredRecipes = searchRecipes(main, getRecipes())

//   if (activeTags.length > 0) {
//     filteredRecipes = filteredRecipes.filter(recipe => {
//       return activeTags.every(tag => {
//         // Vérifie si le tag est présent dans les datas
//         return recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(tag.toLowerCase())) || recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(tag.toLowerCase()))
//       })
//     })
//   }

//   return filteredRecipes
// }
