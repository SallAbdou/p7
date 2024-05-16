import './styles/main.scss'
import { getIngredients, getRecipes, getDevices, getUstensils } from './components/recipesHandler'
import {
  recipesContainer, searchInput, deleteButton, recipesCounter,
  dropdownIngredients, ingredientsSearchBar, deleteIngredientsSearchBar, dropdownIngredientsCollapsed,
  dropdownDevices, devicesSearchBar, deleteDevicesSearchBar, dropdownDevicesCollapsed,
  dropdownUstensils, ustensilsSearchBar, deleteUstensilsSearchBar, dropdownUstensilsCollapsed
} from './components/domLinker'
import { createCard, displayErrorMessage } from './templates/card'
import { createItem } from './templates/dropdown.js'
import { state } from './components/state.js'

/**
 * Update UI
 */
const updateSearch = () => {
  const recipes = getRecipes(searchInput.value)
  displayRecipes(recipes)
  // Met à jour les dropdown en fonction du prompt dans la search bar
  displayDeleteButton(searchInput.value)
  updateCategorySearch('ingredients')
  updateCategorySearch('devices')
  updateCategorySearch('ustensils')

  console.log(state.tags)
}

const displayRecipes = data => {
  recipesContainer.innerHTML = ''

  updateRecipesCounter(data)

  if (data.length === 0) {
    recipesContainer.appendChild(displayErrorMessage(searchInput.value))
  }

  data.forEach(item => recipesContainer.appendChild(createCard(item)))
}

const init = () => {
  updateSearch()
}

// Ajout de l'événement pour afficher la croix
searchInput.addEventListener('input', updateSearch)

const updateRecipesCounter = data => {
  recipesCounter.innerHTML = `${data.length} recettes`
}

const displayDeleteButton = () => searchInput.value ? deleteButton.classList.add('show') : deleteButton.classList.remove('show')
const displayDeleteCategoryButton = (value, category) => {
  console.log('displayDeleteCategoryButton - :', category, value)
  const deleteCategoryButton = document.querySelector(`#dropdown-${category} .delete`)
  deleteCategoryButton.style.display = value.length > 0 ? 'flex' : 'none'
}

// EventListener de la croix main searchbar
deleteButton.addEventListener('click', () => {
  searchInput.value = ''
  updateSearch()
})

ingredientsSearchBar.addEventListener('input', () => updateCategorySearch('ingredients'))
deleteIngredientsSearchBar.addEventListener('click', () => {
  ingredientsSearchBar.value = ''
  updateCategorySearch('ingredients')
})

// EventListener pour afficher la liste des ingrédients
dropdownIngredients.addEventListener('click', () => {
  dropdownIngredients.classList.toggle('down')
  dropdownIngredientsCollapsed.style.display = dropdownIngredients.classList.contains('down') ? 'flex' : 'none'
  updateCategorySearch('ingredients')
})

dropdownDevices.addEventListener('click', () => {
  dropdownDevices.classList.toggle('down')
  dropdownDevicesCollapsed.style.display = dropdownDevices.classList.contains('down') ? 'flex' : 'none'
  updateCategorySearch('devices')
})

devicesSearchBar.addEventListener('input', () => updateCategorySearch('devices'))
deleteDevicesSearchBar.addEventListener('click', () => {
  devicesSearchBar.value = ''
  updateCategorySearch('devices')
})

dropdownUstensils.addEventListener('click', () => {
  dropdownUstensils.classList.toggle('down')
  dropdownUstensilsCollapsed.style.display = dropdownUstensils.classList.contains('down') ? 'flex' : 'none'
  updateCategorySearch('ustensils')
})

ustensilsSearchBar.addEventListener('input', () => updateCategorySearch('ustensils'))
deleteUstensilsSearchBar.addEventListener('click', () => {
  ustensilsSearchBar.value = ''
  updateCategorySearch('ustensils')
})

const updateCategorySearch = category => {
  let data

  if (category === 'ingredients') {
    data = getIngredients(searchInput.value, ingredientsSearchBar.value)
  }
  if (category === 'devices') {
    data = getDevices(searchInput.value, devicesSearchBar.value)
  }
  if (category === 'ustensils') {
    data = getUstensils(searchInput.value, ustensilsSearchBar.value)
  }

  // afficher le container de la categorie
  const categoryToDisplay = document.querySelector(`#dropdown-${category} .items-container`)

  createItem(data, categoryToDisplay, category, updateSearch)
  displayDeleteCategoryButton(ingredientsSearchBar.value, category)
  displayDeleteCategoryButton(devicesSearchBar.value, category)
  displayDeleteCategoryButton(ustensilsSearchBar.value, category)
}

init()
