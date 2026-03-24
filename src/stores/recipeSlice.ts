import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearcFilter } from "../types"

export type RecipeSliceType= {
    categories : Categories
    drinks : Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearcFilter) => Promise<void>
    selectRecipe : (id: Drink['idDrink']) => Promise<void> 
    closeModal : () => void
}
                                //type 
export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) => ({
    // estado
    //la llamada viene como objeto y dentro el array 
    categories: {
        drinks: []
    },
    drinks : {
        drinks: []
    },
    selectedRecipe : {} as Recipe,
    modal: false,
    fetchCategories : async () => {
        const categories = await getCategories() //obtiene las categorias
        set({
            categories
        })
    },
    searchRecipes : async (filters) => {
        const drinks =  await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe : async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal : () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})