"use client"

import { ChatArea } from "@/components/ChatArea";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { useState } from "react";

const Page = () => {

  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123',
    title: 'bla blu',
    messages: [
      {id: '99', author: 'me', body: "Opa tudo bem?"},
      {id: '100', author: 'ai', body: "Tudo ótimo, em que posso te ajudar?"}
    ]
  })

  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)

  const handleClearConversations = () => {

  }

  const handleNewChat = () => {

  }

  return (
    <main className="flex min-h-screen bg-gpt-grey">
      <Sidebar open={sidebarOpened} onClose={closeSidebar} 
      onClear={handleClearConversations}
      onNewChat={handleNewChat}>
        ...
      </Sidebar>

      <section className="flex flex-col w-full">

        <Header openSidebarClick={openSidebar}  
        title={`Bla Bla Bla`}
        newChatClick={handleNewChat}/>

        <ChatArea chat={chatActive} />

      </section>
    </main>
  )
}

export default Page;