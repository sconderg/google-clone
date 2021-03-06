import { GlobeIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import axios from 'axios';

function Footer () {

    const [visCountry,setVisCountry] = useState(null);

    const getCountry = _ => {
        // fetch('http://ip-api.com/json')
        // .then(response => response.json())
        // .then(data => setVisCountry(`${data.city}, ${data.country}`));
        axios.get('http://ip-api.com/json')
        .then((response) => setVisCountry(`${response.data.city}, ${response.data.country}`));
    }

    useEffect(() => {
        getCountry();
    }, [visCountry]);

    return(
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
            <div className="px-8 py-3">
                <p>{visCountry}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                    <GlobeIcon className="h-5 mr-1 text-green-700"/> Carbon neutral since 2007
                </div>
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search works</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

