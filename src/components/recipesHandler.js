import { recipes } from '../data/recipes'
import { searchRecipes } from './search'

export const getRecipes = (value = '') => value.length >= 3 ? searchRecipes(value, recipes) : recipes

export const getIngredients = (main = '', value = '') => {
  const recipes = getRecipes(main)
  let ingredients = []
  // Récupérer tous les ingredients uniques
  recipes.forEach(element => {
    ingredients = [...new Set([...ingredients, ...element.ingredients.map(item => item.ingredient)])]
  })

  return value.length >= 3 ? ingredients : ingredients
}

export const getDevices = (main = '', value = '') => {
  const recipes = getRecipes(main)
  let devices = []
  // Récupérer tous les appareils
  recipes.forEach(element => {
    devices = [...new Set([...devices, element.appliance])]
  })

  return value.length >= 3 ? devices : devices
}

export const getUstensils = (main = '', value = '') => {
  const recipes = getRecipes(main)
  let ustensils = []
  // Récupérer tous les ustensiles
  recipes.forEach(element => {
    ustensils = [...new Set([...ustensils, ...element.ustensils])]
  })

  return value.length >= 3 ? ustensils : ustensils
}
