"use client";

import React, { useState } from 'react'
import Image from 'next/image';


const Gallery = () => {


    const photos = Array.from({ length: 109 }, (_, index) => `gallery_${index + 1}.jpg`);

    const [currentPage, setCurrentPage] = useState(1);

    const next = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
        if (currentPage < Math.ceil(photos.length / 15)) {
            setCurrentPage(prev => prev + 1);
        }
    };
    const previous = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const startIndex = (currentPage - 1) * 15;
    const endIndex = Math.min(startIndex + 15, photos.length);


    const currentPhotos = photos.slice(startIndex, endIndex);


    return (
        <>
            <div className='mt-20 w-screen pb-20 lg:text-center lg:px-10'>
                <div className="flex flex-col text-[#E03932] mt-5 px-5">
                    <div className=" font-bernier lg:text-[200px] text-8xl ">Shishir 2023 gallery</div>
                    <div className="white-box mt-5">
                        <div className=" font-blogger mb-4 text-[#186B80] text-[20px] lg:text-2xl leading-6">View last year&apos;s <span className="font-bloggerBold">best moments</span> captured by the talented <span className="font-bloggerBold">photography team</span> and other <span className="font-bloggerBold">attendees</span></div>
                    </div>
                </div>
            </div>

            <div className="px-4 photos-container lg:text-center">
                {currentPhotos.map(photo => (
                    <Image 
                        src={`/gallery/${photo}`}
                        key={photo} 
                        loading="lazy"
                        height={500}
                        width={500}
                        alt={`Gallery ${photo}`} 
                        className='mb-4 lg:mx-auto'
                    />
                ))}

                {/* Previous button */}
                <button onClick={previous} disabled={currentPage === 1} className={`${(currentPage === 1)?"bg-gray-400":"bg-[#e03932]"} text-white px-4 py-2 rounded-lg mr-2`}>
                    Previous
                </button>

                {/* Next button */}
                <button onClick={next} disabled={currentPage === Math.ceil(photos.length / 15)} className={`${(currentPage === Math.ceil(photos.length / 15))?"bg-gray-400":"bg-[#e03932]"} text-white px-4 py-2 rounded-lg`}>
                    Next
                </button>
            </div>
        </>
    )
}

export default Gallery