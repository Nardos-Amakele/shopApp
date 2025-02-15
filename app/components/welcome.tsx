// A simple welcome page 
"use client";
import React from 'react';

interface WelcomeProps {
    scrollToNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ scrollToNext }) => {
    return (
        <div className="flex  flex-col items-center justify-center h-screen  "
            style={{
                backgroundImage: 'url(/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}

        >
            <div className=' flex flex-col items-center p-6 justify-center '>
                <h1 className="text-6xl font-bold mb-6 text-[#864cf8]">Shopify</h1>

                <p className="text-xl mb-10 text-[#864cf8]">Welcome to our beautiful shop!</p>
                <div
                    className="cursor-pointer bg-[#864cf8] p-4 rounded-full shadow-lg hover:bg-[#6a34d3] transition transform hover:scale-110 animate-bounce"
                    onClick={scrollToNext}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>

            </div>
        </div>
    );
};

export default Welcome;