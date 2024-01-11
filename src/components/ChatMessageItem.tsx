import { ChatMessage } from "@/types/ChatMessage"
import IconUser from "./icons/IconUser"
import IconRobot from "./icons/IconRobot"
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter' 
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
    item: ChatMessage
}

export const ChatMessageItem = ({item}: Props) => {

    const response = item.body

    return (
        <div className={`py-5 ${item.author === 'ai' && 'bg-gray-600/50'}`}>
            <div className="max-w-4xl m-auto flex">
                <div className={`text-white w-10 h-10 flex justify-center items-center mx-4
                md:ml-0 rounded ${item.author === 'ai' ? 'bg-green-900' : 'bg-blue-900'}`}>
                    {item.author === 'me' && <IconUser width={24}  height={24}/>}
                    {item.author === 'ai' && <IconRobot width={24}  height={24}/>}
                </div>

                <div className="flex-1 text-base whitespace-pre-wrap">
                    <ReactMarkdown children={response} remarkPlugins={remarkGfm} 
                    components={{
                        code(props) {
                          const {children, className, node, ...rest} = props
                          const match = /language-(\w+)/.exec(className || '')
                          return match ? (
                            <SyntaxHighLighter
                              {...rest}
                              PreTag="div"
                              children={String(children).replace(/\n$/, '')}
                              language={match[1]}
                              style={twilight}
                            />
                          ) : (
                            <code {...rest} className={className}>
                              {children}
                            </code>
                          )
                        }
                      }}
                        
                    />
                </div>
            </div>
        </div>
    )
}