export const createCard = data => {
  const card = document.createElement('article')
  card.setAttribute('class', 'card')

  const img = document.createElement('img')
  img.src = `/assets/${data.image}`
  img.alt = data.name
  card.appendChild(img)

  const cardBody = document.createElement('div')
  cardBody.setAttribute('class', 'card-body')
  card.appendChild(cardBody)

  const title = document.createElement('h2')
  title.innerHTML = data.name
  cardBody.appendChild(title)

  const underTitleRecipe = document.createElement('span')
  underTitleRecipe.setAttribute('class', 'under-title')
  underTitleRecipe.innerHTML = 'Recette'
  cardBody.appendChild(underTitleRecipe)

  const description = document.createElement('p')
  description.innerHTML = data.description
  cardBody.appendChild(description)

  const underTitleIngredient = document.createElement('span')
  underTitleIngredient.setAttribute('class', 'under-title')
  underTitleIngredient.innerHTML = 'Ingrédients'
  cardBody.appendChild(underTitleIngredient)

  const ingredientsContainer = document.createElement('div')
  ingredientsContainer.setAttribute('class', 'ingredients-container')
  cardBody.appendChild(ingredientsContainer)

  // Loop on ingredients to create list of ingredients
  data.ingredients.forEach(item => {
    const ingredientContainer = document.createElement('div')
    ingredientsContainer.appendChild(ingredientContainer)

    const ingredientName = document.createElement('span')
    ingredientName.setAttribute('class', 'ingredient-name')
    ingredientName.innerHTML = item.ingredient
    ingredientContainer.appendChild(ingredientName)

    if (item.quantity || item.unit) {
      const ingredientQuantity = document.createElement('span')
      ingredientQuantity.setAttribute('class', 'ingredient-quantity')
      ingredientQuantity.innerHTML = `${item.quantity || ''} ${item.unit || ''}`
      ingredientContainer.appendChild(ingredientQuantity)
    }
  })

  const time = document.createElement('span')
  time.setAttribute('class', 'time')
  time.innerHTML = `${data.time} min`
  card.appendChild(time)

  return card
}
