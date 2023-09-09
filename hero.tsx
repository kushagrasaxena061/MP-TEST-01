'use client'

import React , {useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useRegisterModal from '@/hooks/useRegisterModal'



const Hero = () => {
    const registerModal = useRegisterModal();

    const onLogin = useCallback(() => {
        registerModal.onOpen();
      }, [registerModal]);

    return (
        <div>
            <div className="pb-6 sm:pb-8 lg:pb-12 bg-teal-950">
                <header className="text-gray-600 body-font bg-black">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link href="/">
                            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                <Image src="/images/logo.png" alt="no logo" width={100} height={100} />
                            </div>
                        </Link>
                        <nav className="md:ml-auto md:flex flex-wrap items-center text-base justify-center">
                            <Link href="/about">
                                <div className="mr-5 md:inline hidden p-4 rounded-lgtext-sm font-bold  hover:from-sky-500 hover:bg-gradient-to-r to-yellow-500 rounded-lg text-white">About</div>
                            </Link>
                            <Link href="/contact">
                                <div className="mr-5 md:inline hidden p-4 rounded-lgtext-sm font-bold  hover:from-pink-500 hover:bg-gradient-to-r to-yellow-500 rounded-lg text-white">Contact</div>
                            </Link>
                        </nav>
                        <button onClick={onLogin} className="hidden md:inline items-center border-0 p-4 focus:outline-none  rounded-lg text-sm font-bold mt-4 md:mt-0 button bg-gradient-to-r from-cyan-400 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-black hover:text-white">Sign Innnn
                        </button>
                    </div>
                </header>
                <section className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-gradient-to-b from-black from-10% via-zinc-900 via-30% to-teal-950 to-90%">
                    <div className="flex flex-wrap justify-between">
                        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
                            <h1 className="text-red-600 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">Where Melodies lies,<br />NFTs Reside.</h1>
                            <p className="max-w-md leading-relaxed text-white xl:text-lg mb-8">Embark on a musical journey like never before. Explore, buy, sell, and trade NFTs while enjoying your favorite tunes.</p>
                            <button onClick={onLogin} className="md:hidden items-center border-0 p-4 focus:outline-none  rounded-lg text-sm font-bold mt-4 md:mt-0 button bg-gradient-to-r from-cyan-400 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-black hover:text-white">Sign Up
                            </button>
                        </div>
                        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                            <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:top-16 md:left-16 lg:ml-0">
                                <Image src="/images/main-1.jpg" width={500} height={500} alt="no main-1" />
                            </div>
                            <div className="overflow-hidden rounded-lg  shadow-lg">
                                <Image src="/images/main-2.jpg" width={500} height={500} alt="no main-1" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className=' bg-gradient-to-t from-zinc-900 from-10% via-black via-70% to-zinc-900 to-90%'>
                <section className="text-red-600 body-font font-bold relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font">Revolutionizing the Music Industry</h1>
                        </div>
                    </div>
                </section>
                <section className="text-white font-semibold body-font overflow-hidden">
                    <div className="container px-5 py-2 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="p-3 md:w-1/2 flex flex-col items-start">
                                <p className="leading-relaxed">Welcome to the ultimate music platform designed to redefine the music industry. We're integrating music streaming with NFT-powered buying, selling, and a full-featured marketplace.</p>
                            </div>
                            <div className="p-3 md:w-1/2 flex flex-col items-start">
                                <p className="leading-relaxed">Dive into our dark-themed interface adorned with vibrant images and concise explanatory texts that'll walk you through our groundbreaking vision for the music world.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className=" body-font bg-gradient-to-b from-zinc-900 to-black">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg hidden lg:inline overflow-hidden">
                        <Image src="/images/music.jpg" width={400} height={400} alt='no music image' />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-red-600 text-lg title-font font-bold mb-3">Seamless Streaming.</h2>
                                <p className="leading-relaxed text-white text-base">Uninterrupted harmonies flow effortlessly, embracing you in a seamless streaming experience like no other.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-red-600 text-lg title-font font-bold mb-3">NFT Marketplace.</h2>
                                <p className="leading-relaxed text-white text-base">Own a piece of musical history with NFTs, where digital art and music intertwine for unparalleled collectible experiences.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">

                            <div className="flex-grow">
                                <h2 className="text-red-600 text-lg title-font font-bold mb-3">Global Support.</h2>
                                <p className="leading-relaxed text-white text-base">From every corner, harmonies unite. Our global support connects music lovers, bridging cultures and melodies in a unique symphony.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-lg text-indigo-500 tracking-widest font-bold title-font mb-1">Ready For Bliss?</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-600">Join the Global Music Revolution</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Unleash the future of music streaming and embrace the dawn of a transformative era. Immerse yourself in boundless innovation as NFT technology unlocks limitless possibilities, reshaping your musical journey. Don't hesitate—seize this extraordinary opportunity to revolutionize your audio experience. Sign up now and embark on a remarkable musical odyssey.</p>
                    </div>

                    <button onClick={onLogin} className="flex mx-auto mt-16 md:w-1/6 text-xl justify-center bg-indigo-500  py-3 px-8 items-center border-0 p-4 w-full focus:outline-none  rounded-lg font-bold  md:mt-0 button bg-gradient-to-r from-cyan-400 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-black hover:text-white">Sign In</button>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image src="/images/outro-3.jpg" className='w-full' width={300} height={300} alt="outro-3 missing" />
                            </div>
                            <p className="leading-relaxed text-base mt-3 text-white">Ownership, exclusivity, royalties—NFTs empower artists, amplify discovery, and redefine music monetization.</p>

                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image src="/images/outro-2.jpg" className='w-full' width={300} height={300} alt="outro-2 missing" />
                            </div>
                            <p className="leading-relaxed text-base mt-3 text-white">Discover, explore, and indulge in a vast world of music with our cutting-edge streaming platform.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body-font relative">
                <div className="container px-5 mt-4 py-3 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-600">Follow us On</h1>
                        <p className="lg:w-2/3 mx-auto text-white leading-relaxed text-base">Stay connected and follow us on social media for updates and more!</p>
                    </div>
                </div>
            </section>
            <section className=" body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <Image src="/images/insta-logo-1.jpg" className="rounded-full" width={500} height={500} alt="no insta logo" />
                                <Link href="/">
                                    <p className="mt-8 font-bold hover:text-pink-600 text-white text-3xl">INSTAGRAM</p>
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <Image src="/images/twitter-logo-2.jpg" className="rounded-full" width={500} height={500} alt="no twitter logo" />
                                <Link href="/">
                                    <p className="mt-8 font-bold text-white text-3xl hover:text-sky-500">TWITTER</p>
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <Image src="/images/youtube-logo-2.jpg" className="rounded-full" width={500} height={500} alt="no youtube logo" />
                                <Link href='/'>
                                    <p className="mt-8 font-bold text-white text-3xl hover:text-red-600">YOUTUBE</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Hero