import { FaCarBattery } from "react-icons/fa6";
import { Logotipo } from "./organismos/Logotipo"
import Hamburguesa from "./organismos/Hamburguesa" 
import SearchBar from "./organismos/SearchBar"
import ButtonIcon from "./organismos/ButttonIcon"
import Option from "./organismos/Option";
export const Navbar = () => {
    const options:Array<String> = [        "Drones",
        "Cámaras",
        "Gimbals",
        "Accesorios",
        "Software",
        "Soporte",
        "Comparar",
        "Noticias"
]
    return (
        <>
            <nav className=" w-full h-24  flex flex-col justify-center items-center sticky top-0 z-50 bg-white">
                <div className=" container mx-auto lg:px-3 w-full">
                    <div className=" lg:w-full w-11/12 mx-auto h-full grid lg:grid-cols-3 grid-cols-2  justify-between items-center ">
                        {/* logoti`po */}
                        <Logotipo />
                        {/* menu */}
                        <SearchBar/>
                        
                        <div className=" flex gap-4 max-lg:hidden justify-between lg:px-10  w-full">
                            <ButtonIcon label="Cheers!"  >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#666666" fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m.514 2.63a4 4 0 1 0-6.028 0A4 4 0 0 0 2 11.5V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5a4 4 0 0 0-2.986-3.87M8 9H6a2.5 2.5 0 0 0-2.5 2.5V13a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.5A2.5 2.5 0 0 0 10 9z" clip-rule="evenodd" /></svg>
                            </ButtonIcon>
                            <ButtonIcon label="Cheers!"  >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></g></svg>
                            </ButtonIcon>
                            <ButtonIcon label="Cheers!"  >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#666666" fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m.514 2.63a4 4 0 1 0-6.028 0A4 4 0 0 0 2 11.5V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5a4 4 0 0 0-2.986-3.87M8 9H6a2.5 2.5 0 0 0-2.5 2.5V13a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.5A2.5 2.5 0 0 0 10 9z" clip-rule="evenodd" /></svg>
                            </ButtonIcon>
                            <ButtonIcon label="Heart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#666666" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3C200.7 23 111.4 15.6 53.6 64.3C-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9c14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3m-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7c38.9-32.7 98.9-27.8 136.5 10.5l35 35.7l35-35.7c37.8-38.5 97.8-43.2 136.5-10.6c51.1 43.1 43.5 113.9 7.3 150.8" /></svg>
                            </ButtonIcon>
                            <ButtonIcon label="Cheers!" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24.21875" viewBox="0 0 512 496"><path fill="#666666" d="M448 69H137l-3-12q-5-23-22.5-37.5T70 5H21q-9 0-15 6T0 27q0 9 6 15t15 6h49q19 0 22 17l49 256q6 21 23.5 34t38.5 13h202q10 0 16-6t6-15q0-22-22-22H203q-14 0-20-12l-2-9h214q20 0 36.5-12t22.5-31l58-123v-5q0-27-18.5-45.5T448 69m-32 175v2q-3 15-21 15H173l-28-149h303q18 0 21 17zM256 432q0 18-12.5 30.5T213 475q-17 0-29.5-12.5T171 432t12.5-30.5T213 389q18 0 30.5 12.5T256 432m171 0q0 18-12.5 30.5T384 475t-30.5-12.5T341 432t12.5-30.5T384 389t30.5 12.5T427 432" /></svg>
                            </ButtonIcon>
                        </div>
                        <Hamburguesa  />
                    </div>
                    <div className="flex  lg:flex-row max-lg:hidden gap-6 -mt-2 ">
                            {options.map((option, index) => (
                                <Option key={index} label={option.toUpperCase()} />
                            ))}
                 </div>
                </div>
            </nav>
        </>
    )
}