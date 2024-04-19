import { dropdownIngredients, dropdownAppareils, dropdownUstensiles } from './domLinker.js'

// Fonction pour mettre à jour les dropdowns en fonction des recettes affichées
const updateDropdowns = (recipes) => {
  // Pour éviter les doublons
  const ingredients = new Set()
  const appareils = new Set()
  const ustensiles = new Set()

  // Parcoure toutes les recettes et ajoute les éléments
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => ingredients.add(ingredient.ingredient))
    appareils.add(recipe.appliance)
    recipe.ustensils.forEach(ustensil => ustensiles.add(ustensil))
  })

  // Met à jour les dropdowns avec les valeurs des sets
  dropdownIngredients.innerHTML = Array.from(ingredients).map(ingredient => `<option value="${ingredient}">${ingredient}</option>`).join('')
  dropdownAppareils.innerHTML = Array.from(appareils).map(appareil => `<option value="${appareil}">${appareil}</option>`).join('')
  dropdownUstensiles.innerHTML = Array.from(ustensiles).map(ustensil => `<option value="${ustensil}">${ustensil}</option>`).join('')
}

// Fonction pour filtrer les résultats
const filterOptions = (dropdown) => {
  const query = dropdown.value.toLowerCase()
  const options = dropdown.querySelectorAll('option')
  options.forEach(option => {
    const value = option.value.toLowerCase()
    if (value.includes(query)) {
      option.style.display = ''
    } else {
      option.style.display = 'none'
    }
  })
}

// Ajout des events listeners pour filtrer les options des dropdowns
dropdownIngredients.addEventListener('input', () => filterOptions(dropdownIngredients))
dropdownAppareils.addEventListener('input', () => filterOptions(dropdownAppareils))
dropdownUstensiles.addEventListener('input', () => filterOptions(dropdownUstensiles))

export { updateDropdowns }
