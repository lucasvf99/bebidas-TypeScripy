import {streamText} from 'ai'
import { openRouter } from '../lib/ai'
 

export default {
    async generateRecipeService(prompt: string) {
        const result = streamText({
            model: openRouter('google/gemma-3-4b-it:free'),
            prompt,
            system: 'Eres un bartender que tiene 50 años de experiencia '
        })
        return result.textStream  
    }
}