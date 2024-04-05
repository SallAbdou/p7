import './styles/main.scss'
import { recipes } from './recipes.js'

// Fonction pour générer les cartes des recettes
function recipeCardsTemplate (recipesData) {
  const recipeSection = document.getElementById('recipe-section')

  recipesData.forEach(recipeItem => {
    const recipeCard = document.createElement('article')
    recipeCard.classList.add('recipe-card')

    const recipeImage = document.createElement('img')
    recipeImage.classList.add('recipe-image')
    recipeImage.src = `../assets/${recipeItem.image}`
    recipeImage.alt = recipeItem.name
    recipeCard.appendChild(recipeImage)

    const recipeDetails = document.createElement('div')
    recipeDetails.classList.add('recipe-details')
    recipeCard.appendChild(recipeDetails)

    const recipeName = document.createElement('h2')
    recipeName.textContent = recipeItem.name
    recipeDetails.appendChild(recipeName)

    const recipeDuration = document.createElement('p')
    recipeDuration.classList.add('recipe-duration')
    recipeDuration.textContent = `${recipeItem.time} min`
    recipeDetails.appendChild(recipeDuration)

    const recipeDiv = document.createElement('div')
    recipeDiv.classList.add('recipe-div')
    recipeDetails.appendChild(recipeDiv)

    const recipeHeading = document.createElement('p')
    recipeHeading.classList.add('recipe-heading')
    recipeHeading.textContent = 'RECETTE'
    recipeDiv.appendChild(recipeHeading)

    const recipeDesc = document.createElement('p')
    recipeDesc.classList.add('recipe-desc')
    recipeDesc.textContent = recipeItem.description
    recipeDiv.appendChild(recipeDesc)

    const ingredientsHeading = document.createElement('p')
    ingredientsHeading.classList.add('recipe-heading')
    ingredientsHeading.textContent = 'INGRÉDIENTS'
    recipeDiv.appendChild(ingredientsHeading)

    const ingredientsList = document.createElement('div')
    ingredientsList.classList.add('ingredients-list')
    recipeDiv.appendChild(ingredientsList)

    recipeItem.ingredients.forEach(ingredientItem => {
      const ingredientDiv = document.createElement('div')

      const ingredientName = document.createElement('p')
      ingredientName.classList.add('ingredient-name')
      ingredientName.textContent = ingredientItem.ingredient
      ingredientDiv.appendChild(ingredientName)

      const ingredientAmount = document.createElement('p')
      ingredientAmount.classList.add('ingredient-amount')
      ingredientAmount.textContent = `${ingredientItem.quantity || '0'} ${ingredientItem.unit || ''}`
      ingredientDiv.appendChild(ingredientAmount)

      ingredientsList.appendChild(ingredientDiv)
    })

    recipeSection.appendChild(recipeCard)
  })
}

recipeCardsTemplate(recipes)
