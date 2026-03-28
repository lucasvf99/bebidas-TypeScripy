import {create} from 'zustand' // crea un slice
import { devtools } from 'zustand/middleware'
import { createRecipeSlice, type RecipeSliceType } from './recipeSlice'
import { createFavoritesSlice, type FavoriteSliceType } from './favoriteSlice'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice'
import {createAiSlice, type AiSliceType } from './aiSlice'

                                  // copia los argumentos(set,get,api)
export const useAppStore = create<RecipeSliceType & FavoriteSliceType & NotificationSliceType & AiSliceType>()(devtools( (...a) => ({
      // toma una copia
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAiSlice(...a)
})))  