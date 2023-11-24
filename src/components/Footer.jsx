import { Link } from "react-router-dom";
import { _ } from "../lang";

export default function Footer() {
    return (

        <footer className="bg-dark2 shadow text-white mt-6">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

                <span className="block text-sm text-white sm:text-center dark:text-gray-400"> {_("Este es un proyecto de prácticas, es mi primer proyecto en React pero no el último")} </span>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-dark lg:my-2" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2023 MovieDB by <a target="_blank" href="https://github.com/adricorrea17">https://github.com/adricorrea17</a>.</span>
            </div>
        </footer>

    )
}