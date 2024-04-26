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

const updateSearch = () => {
  const recipes = getRecipes(searchInput.value)
  displayRecipes(recipes)
  // Met à jour les dropdown en fonction du prompt dans la search bar
  displayDeleteButton(searchInput.value)
  updateCategorySearch('ingredients')

  // TODO foreach category
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
searchInput.addEventListener('input', () => {
  updateSearch()
  displayDeleteButton()
})

const updateRecipesCounter = data => {
  recipesCounter.innerHTML = `${data.length} recettes`
}

const displayDeleteButton = () => searchInput.value ? deleteButton.classList.add('show') : deleteButton.classList.remove('show')
const displayDeleteCategoryButton = (value, category) => {
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
  let searchBarValue

  if (category === 'ingredients') {
    searchBarValue = ingredientsSearchBar.value
    data = getIngredients(searchInput.value, searchBarValue)
  } else if (category === 'devices') {
    searchBarValue = devicesSearchBar.value
    data = getDevices(searchInput.value, searchBarValue)
  } else if (category === 'ustensils') {
    searchBarValue = ustensilsSearchBar.value
    data = getUstensils(searchInput.value, searchBarValue)
  }

  // afficher le container de la categorie
  const categoryToDisplay = document.querySelector(`#dropdown-${category} .items-container`)

  // Filtrer les données en fonction de searchBarValue
  const filteredData = data.filter(item => item.toLowerCase().includes(searchBarValue.toLowerCase()))

  createItem(filteredData, categoryToDisplay, category)
  displayDeleteCategoryButton(searchBarValue, category)
}

init()
