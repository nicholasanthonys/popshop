import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className="bg-blue">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Hamburger Menu */}
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src="./sbcr-logo-transparent-white-bg.png" alt="Surf Break Costa Rica Logo"></img>
                                <img className="hidden lg:block h-8 w-auto" src="./sbcr-logo-transparent-white-bg.png" alt="Surf Break Costa Rica logo"></img>
                            </div>
                            {/* Nav Items */}
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <a href="/home" className="bg-turquoise text-white hover:bg-turquoise-dark px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                    <a href="/flightinfo" className="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Flight Info</a>
                                    <a href="/releaseform" className="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Release Form</a>
                                    <a href="/itinerary" className="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Itinerary</a>
                                    <a href="/photos" className="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Photos</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* Notification Icon */}
                            <button className="bg-turquoise p-1 rounded-full text-white hover:bg-turquoise-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="/" className="bg-blue text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                        <a href="/flightinfo" className="text-white hover:bg-turquoise hover:text-white block px-3 py-2 rounded-md text-base font-medium">Flight Info</a>
                        <a href="/releaseforms" className="text-white hover:bg-turquoise hover:text-white block px-3 py-2 rounded-md text-base font-medium">Release Forms</a>
                        <a href="/itinerary" className="text-white hover:bg-turquoise hover:text-white block px-3 py-2 rounded-md text-base font-medium">Itinerary</a>
                        <a href="/photos" className="text-white hover:bg-turquoise hover:text-white block px-3 py-2 rounded-md text-base font-medium">Photos</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};