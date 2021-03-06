import Head from 'next/head';
import Avatar from '../components/Avatar';
import {ViewGridIcon, MicrophoneIcon} from '@heroicons/react/solid';
import {SearchIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <header className="flex flex-wrap w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 rounded-full transition-all duration-150 ease-in-out hover:bg-gray-100 cursor-pointer p-2" />

          {/* Avatar */}
          <Avatar url="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col mt-40 items-center flex-grow w-4/5">
        <Image 
        width={300} height={100} className="max-w-lg"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 sm:flex-row sm:space-x-4 justify-center mt-8 mb-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm feeling lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
