import IconFaceSmileBeam from "./icons/IconFaceSmileBeam"
import IconFileCodeFill from "./icons/IconFileCodeFill"
import IconMoon from "./icons/IconMoon"
import IconSunTwentyFour from "./icons/IconSunTwentyFour"

export const ChatPlaceholder = () => {
    return (
        <div className="m-5">
            <h3 className="text-4xl text-white font-bold text-center my-8">TutzGPT</h3>

            <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
                <div className="w-full">
                    <div className="text-white flex justify-center items-center text-lg mb-3">
                        <IconSunTwentyFour width={24} height={24} className="mr-3" />
                        Perguntas Diversas
                    </div>

                    <div className="bg-white/5 rounded text-center text-sm text-white
                    mb-3 p-3">"Explique o sentido da vida"</div>

                    <div className="bg-white/5 rounded text-center text-sm text-white
                    mb-3 p-3">"Como fazer um bolo de laranja"</div>

                    <div className="bg-white/5 rounded text-center text-sm text-white
                    mb-3 p-3">"O que é marte?"</div>
                </div>

                <div className="w-full">
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconFileCodeFill width={24} height={24} className="mr-3" />
                        Crie Códigos
                    </div>

                    <div className="bg-white/5 rounded text-center text-sm text-white
                    mb-3 p-3">"Crie um componente em Python"</div>

                    <div className="bg-white/5 rounded text-center text-sm text-white
                    mb-3 p-3">"O que é PHP"</div>
                    
                    <div className="bg-white/5 rounded text-center text-sm text-white
                    mb-3 p-3">"Como iniciar os estudos em PHP"</div>
                </div>

                <div className="w-full">
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconFaceSmileBeam width={24} height={24} className="mr-3" />
                        Entretenimento
                    </div>

                    <div className="bg-white/5 rounded text-center text-sm text-white
                    mb-3 p-3">"Me conte uma piada"</div>

                    <div className="bg-white/5 rounded text-center text-sm text-white
                    mb-3 p-3">"Quem é o messi?"</div>
                    
                    <div className="bg-white/5 rounded text-center text-sm text-white
                    mb-3 p-3">"O que é o que é?..."</div>
                </div>
            </div>
        </div>
    )
}