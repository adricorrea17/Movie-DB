import { Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import { GetLenguages } from "../MoviedbReposity";
import { useEffect, useState } from "react";
import SelectLenguages from "./SelectLenguages";

export default function Header() {

    return (

        <header className="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-dark2 border-b border-dark text-sm py-2.5 sm:py-4">
            <nav className="container flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
                <div className="mr-5 md:mr-8">
                    <Link to={'/'} className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">MovieDB</Link>
                </div>
                <div className="w-full flex items-center justify-end ml-auto md:justify-evenly md:w-1/2 md:gap-x-3 md:order-3">

                    <SearchMovie />

                    <div className="flex flex-row items-center justify-end gap-2">
                        <SelectLenguages />
                        <a href="https://github.com/adricorrea17/Movie-DB" type="button" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 0.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                />
                            </svg>
                        </a>

                    </div>
                </div>
            </nav>
        </header>


    )


}