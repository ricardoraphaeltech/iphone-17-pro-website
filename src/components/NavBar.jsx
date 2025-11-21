import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 hidden sm:flex items-center justify-center gap-8">
                    <a href="#design" className="hover:text-gray-300">Design</a>
                    <a href="#camera" className="hover:text-gray-300">Câmera</a>
                    <a href="#performance" className="hover:text-gray-300">Performance</a>
                    <a href="#colors" className="hover:text-gray-300">Cores</a>

                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer">Comprar</button>
                </div>
            </nav>

            <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-51 sm:hidden">
                <div className="relative h-[72px] w-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (<IoMdClose size={28} className="text-white hover:text-gray-300 cursor-pointer" />) : (<RxHamburgerMenu size={28} className="text-white hover:text-gray-300 cursor-pointer" />)}
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} bg-black mx-auto px-6 py-4 sm:hidden flex flex-col items-center justify-center gap-4 transition-all duration-300 overflow-hidden`}>
                    <a href="#design" className="hover:text-gray-300">Design</a>
                    <a href="#camera" className="hover:text-gray-300">Câmera</a>
                    <a href="#performance" className="hover:text-gray-300">Performance</a>
                    <a href="#colors" className="hover:text-gray-300">Cores</a>

                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer">Comprar</button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar