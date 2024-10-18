import React, { useState } from 'react'
import { Button } from '../ui/button'
import SearchBar from './SearchBar'

export default function Hamburguesa() {
    const [dropdown, setDropDown] = useState(false)
    const showDropDown = () => {
        setDropDown(!dropdown)
    }
    return (
        <>
            {/* menu amburguesa */}
            {
                dropdown ? (
                    <div onClick={showDropDown} className="lg:hidden flex justify-end">
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
                        </Button>
                    </div>
                ) : (
                    <div onClick={showDropDown} className="lg:hidden flex justify-end">
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="currentColor" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z" /><path fill="currentColor" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97" /></svg>
                        </Button>
                    </div>

                )
            }
            {/* menu desplegable */}
            {

                dropdown ? (


                    <div className="absolute  z-50 bottom-0 top h-screen  left-0 top-0 lg:hidden  w-[60%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="p-10" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <SearchBar isMobile={true}/>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Inicio </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Contactos</a>
                            <div className="border-t border-gray-200"></div>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Share</a>
                            <div className="border-t border-gray-200"></div>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Print</a>
                        </div>
                    </div>


                ) : (null)
            }
        </>
    )
}
