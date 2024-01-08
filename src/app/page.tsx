"use client"

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SidebarChatButton } from "@/components/SidebarChatButton";
import { Chat } from "@/types/Chat";
import { useEffect, useState } from "react";
import { v4 as uuidv4} from 'uuid'

const Page = () => {

  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [chatList, setChatList] = useState<Chat[]>([])
  const [chatActiveId, setChatActiveId] = useState<string>('')
  const [chatActive, setChatActive] = useState<Chat>()
  const [AiLoading, setAiLoading] = useState(false)

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId))
  }, [chatActiveId, chatList])

  useEffect(() => {
    if(AiLoading) getAiResponse()
  }, [AiLoading])

  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)
 
  const getAiResponse = () => {
    setTimeout(() => {
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId)
      if(chatIndex > -1) {
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),
          author: 'ai',
          body: 'Aqui vai a resposta da AI :)'
        })
      }
      setChatList(chatListClone)
      setAiLoading(false)
    }, 2000)
  }

  const handleClearConversations = () => {
    if(AiLoading) return

    setChatActiveId('')
    setChatList([])
  }

  const handleNewChat = () => {
    if(AiLoading) return

    setChatActiveId('')
    closeSidebar()
  }

  const handleSendMessage = (message: string) => {
    if(!chatActiveId) {
      let newChatid = uuidv4()
      setChatList([{
        id: newChatid,
        title: message,
        messages: [
          {id: uuidv4(), author: 'me', body: message}
        ]
      },...chatList])

      setChatActiveId(newChatid)
    }else {
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId)
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'me',
        body: message
      })

      setChatList(chatListClone)
    }

    setAiLoading(true)
  }

  const handleSelectChat = () => {

  }

  const handleDeleteChat = () => {

  }

  const handleEditChat = () => {

  }

  return (
    <main className="flex min-h-screen bg-gpt-grey">
      <Sidebar open={sidebarOpened} onClose={closeSidebar} 
      onClear={handleClearConversations}
      onNewChat={handleNewChat}>
        ...
      </Sidebar>

      <section className="flex flex-col w-full dvh">

        <Header openSidebarClick={openSidebar}  
        title={chatActive ? chatActive.title : 'Nova Conversa'}
        newChatClick={handleNewChat}/>

        <ChatArea chat={chatActive}  loading={AiLoading}/>

        <Footer disabled={AiLoading} onSendMessage={handleSendMessage} />

      </section>
    </main>
  )
}

export default Page;