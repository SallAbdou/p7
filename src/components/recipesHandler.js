import { recipes } from '../data/recipes'
import { searchRecipes } from './search'

export const getRecipes = (value = '') => value.length >= 3 ? searchRecipes(value, recipes) : recipes
