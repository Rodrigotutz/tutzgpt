import { ChatMessage } from "@/types/ChatMessage"
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai"

const config = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
})

delete config.baseOptions.headers['User-Agent'];

const api = new OpenAIApi(config)

export const openai = {
    generate: async (messages: ChatCompletionRequestMessage[]) => {
        try{
            const response = await api.createChatCompletion({
                model: 'gpt-4',
                temperature: 2,
                messages
            })
            
            return response.data.choices[0]?.message?.content

        }catch(error){
            return undefined
        }
    },

    translateMessages: (messages: ChatMessage[]) => {
        let reqMessages: ChatCompletionRequestMessage[] = []

        for(let i in messages) {
            reqMessages.push({
                role: messages[i].author === 'me' ? 'user' : 'assistant',
                content: messages[i].body
            })
        }

        return reqMessages
    }
}