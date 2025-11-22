import titaniumDesign from "../../public/img/titanium-design.jpg"
import iosFeatures from "../../public/img/ios-features.jpg"
import chipA18Pro from "../../public/img/chip-a18-pro.jpg"

function Highlights() {

    const cameraSpecs = [
        { value: "48MP", label: "Principal", info: "Sensor quad-pixel com foco automático", color: "text-blue-600" },
        { value: "12MP", label: "Ultra Wide", info: "Campo de visão de 120° com modo noturno", color: "text-orange-500" },
        { value: "12MP", label: "Telefoto 5x", info: "Zoom óptico de 5x com estabilidade", color: "text-blue-600" },
    ]

    return (
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">Design revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiência</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src={titaniumDesign} alt="iphone-titanium"></img>
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura de titânio de grau aeroespacial. O smartphone mais forte e leve.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src={iosFeatures} alt="ios 2025"></img>
                        <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
                        <p className="text-gray-300">O sistema operacional mais avançado do mundo com IA integrada.</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso em um smartphone</p>
                    <img className="w-full rounded-2xl mb-4" src={chipA18Pro} alt="chip a18"></img>

                    <ul className="space-y-3 text-gray-300">
                        <li>CPU 20% mais rápida</li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural Engine com 16 núcleos</li>
                        <li>Ray tracing acelerado por hardware</li>
                    </ul>
                </div>

                <div className="mx-auto max-w-xl md:max-w-5xl text-center" id="camera">
                    <h3 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-xs md:max-w-5xl">
                        {cameraSpecs.map((spec, index) => (
                            <div key={index} className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer">
                                <p className={`text-4xl font-bold mb-4 ${spec.color}`}>{spec.value}</p>
                                <p className="text-xl font-semibold mb-2">{spec.label}</p>
                                <p className="text-gray-400">{spec.info}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Highlights