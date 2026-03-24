import type {StateCreator} from 'zustand'
import type { Recipe } from '../types'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice'


export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoritesExist: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoriteSliceType  & NotificationSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoritesExist(recipe.idDrink)){
            set((state)=> ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink) // se hace una copia del array y se filtra el elemento a eliminar
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Receta eliminada de favoritos',
                error: false,
            })
        }else {
            set((state) => ({
                favorites: [...state.favorites, recipe] // se hace una copia del array y se agrega el nuevo elemento
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Receta agregada a favoritos',
                error: false,
            })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites)) 
    },
    favoritesExist: (id) => {
        return get().favorites.some( favorite => favorite.idDrink === id) // se verifica si el elemento existe en el array
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})


// SLICE PATTERN 