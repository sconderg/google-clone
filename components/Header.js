import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return;
        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                    onClick={() => router.push('/')}
                    width={120}
                    height={40}
                    className="cursor-pointer"
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
                <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">
                    <input type="text" className="flex-grow w-full focus:outline-none"  ref={searchInputRef} /> 
                    <XIcon 
                        onClick={() => searchInputRef.current.value = ''} 
                        className="sm:mr-3 h-7 cursor-pointer text-gray-700 transition duration-100 transform hover:scale-125" 
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon onClick={search} className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto"
                    url="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
            </div>
            <HeaderOptions />
        </header>
    )
}

export default Header
