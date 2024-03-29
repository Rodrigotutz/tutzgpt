import { KeyboardEvent, useEffect, useRef, useState } from "react"
import IconSend from "./icons/IconSend"

type Props = {
    disabled: boolean
    onSend: (message: string) => void
}

export const ChatMessageInput = ({ disabled, onSend}: Props) => {

    const [text, setText] = useState('')
    const textEl = useRef<HTMLTextAreaElement>(null)

    useEffect(() =>  {
        if(textEl.current) {
            textEl.current.style.height = '0px'
            let scrollHeigth = textEl.current.scrollHeight
            textEl.current.style.height = scrollHeigth + 'px'
        }
    }, [text, textEl])

    const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(event.code.toLowerCase() === 'enter' && !event.shiftKey) {
            event.preventDefault()
            handleSendMessage()
        }
    }

    const handleSendMessage = () => {
        if(!disabled && text.trim() !== '') {
            onSend(text)
            setText('')
        }
    }

    return (
        <div className={`text-white flex border border-gray-800/50 
        bg-gpt-ligthgray p-2 rounded-md ${disabled && 'opacity-50'}`}>

            <textarea ref={textEl} className="text-white flex-1 border-0 bg-transparent resize-none 
            outline-none h-7 max-h-48 overflow-auto z-0" placeholder="Digite uma mensagem"
            value={text} onChange={e => setText(e.target.value)} 
            onKeyUp={handleTextKeyUp} disabled={disabled}></textarea>

            <div onClick={handleSendMessage} className={`text-white 
            self-end p-1 cursor-pointer
            rounded ${text.length ? 'opacity:100 hover:bg-black/20' : 'opacity-20'}`}>
                <IconSend width={14} height={14} />
            </div>
        </div>
    )
}