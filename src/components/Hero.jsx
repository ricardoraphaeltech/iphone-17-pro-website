import iphone17ProIntro from "../../src/assets/iphone-17-pro-intro.mp4"
import iphone17Video from "../../src/assets/iphone-17-video.mp4"
import iphoneBackgroundMobile from "../../public/img/iphone-background-mobile.jpg"

function Hero() {

    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute top-18 bottom-0 right-0 left-0 z-0">
                <video className="w-full h-full object-cover" autoPlay muted loop src={iphone17ProIntro}></video>
            </div>

            <div className="absolute top-18 bottom-0 right-0 left-0 z-1">
                <video className="block md:hidden w-full h-full object-cover" autoPlay muted loop src={iphone17Video}></video>
            </div>

            <div className="absolute top-18 bottom-0 right-0 left-0 z-2">
                <img src={iphoneBackgroundMobile} className="block sm:hidden w-full h-full object-cover" alt="iphone-17-pro"></img>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </section>
    )
}

export default Hero