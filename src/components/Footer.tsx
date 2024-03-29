import { ChatMessageInput } from "./ChatMessageInput"

type Props = {
    disabled: boolean
    onSendMessage: ( message: string) => void
}

export const Footer = ({disabled, onSendMessage }: Props)  => {

    return (
        <footer className="border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput
                disabled={disabled}
                onSend={onSendMessage} />
                <div className="pt-3 text-xs text-center text-gray-300">
                    Desenvolvido por <a className="underline" href="https://rodrigotutz.com" target="__blank">Rodrigo Tutz</a>
                </div>
            </div>
        </footer>
    )
}