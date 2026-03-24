import {z} from 'zod'
import { CategoriesAPIResponseSchema, DrinkAPIRsponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema, SearchFilterSchema } from '../schemas/recipe-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearcFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>
export type Drink = z.infer<typeof DrinkAPIRsponseSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>