import type {StateCreator} from "zustand"
import AiService from "../services/AiService"

export type AiSliceType = {
    recipe: string
    isGenerating: boolean
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAiSlice : StateCreator<AiSliceType> = (set) => ({
    recipe: "",
    isGenerating: false,
    generateRecipe: async (prompt) => {
        set({recipe: '', isGenerating: true}) // reseteamos la receta para mostrar el nuevo resultado y ponemos isGenerating en true para deshabilitar el botón mientras se genera la receta
        const data = await AiService.generateRecipeService(prompt)
        //mientras llega el resultado, se va actualizando el estado con cada fragmento de texto que se recibe
        for await (const textPart of data){
            set((state => ({
                recipe: state.recipe + textPart
            })))
        }
        set({isGenerating: false})
    }
})