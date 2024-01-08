import { Chat } from "@/types/Chat"

type Props = {
    chatItem: Chat
    active: boolean
    onClick: (id: string) => void
    onDelete: (id: string) => void
    onEdit: (id: string, newTitle:string) => void
}

export const SidebarChatButton = ({chatItem, active, onClick, onDelete, onEdit}: Props) => {
    return (
        <div>
            
        </div>
    )
}