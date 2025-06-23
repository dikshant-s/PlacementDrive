import React from 'react'
import photo1 from '../Assets/photo1.png'
import photo2 from '../Assets/photo2.png'
import photo3 from '../Assets/photo3.jpeg'
import photo4 from '../Assets/img2.jpg'
const CurrentDrives = () => {
    return (
        <div>
            <div class="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
                <div class="container mx-auto mx-auto p-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg border p-4">
                            <img src={photo1} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover" />
                            <div class="px-1 py-4">
                                <div class="font-bold text-xl mb-2">Tata Steel TomorrowLab (Student Track)</div>
                                <p class="text-gray-700 text-base">
                                Tata Steel TomorrowLab is hiring for the role of Junior Operator - Packing!
                                </p>
                            </div>
                            <div class="px-1 py-4">
                                <a href="/Companydetails1" class="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg border p-4">
                            <img src={photo2} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover" />
                            <div class="px-1 py-4">
                                <div class="font-bold text-xl mb-2">Cipla:
Junior Operator - Packing</div>
                                <p class="text-gray-700 text-base">
                                Cipla is hiring for the role of Junior Operator - Packing!
                                </p>
                            </div>
                            <div class="px-1 py-4">
                                <a href="Companydetails2" class="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg border p-4">
                            <img src={photo3} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover" />
                            <div class="px-1 py-4">
                                <div class="font-bold text-xl mb-2">CITI BANK:Quality Analyst 2!</div>
                                <p class="text-gray-700 text-base">
                                Citi Bank is hiring for the role of IT Quality Analyst 2!
                                </p>
                            </div>
                            <div class="px-1 py-4">
                                <a href="/Companydetails3" class="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg border p-4">
                            <img src={photo4} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover" />
                            <div class="px-1 py-4">
                                <div class="font-bold text-xl mb-2">Lakshmi:Sales Consultant</div>
                                <p class="text-gray-700 text-base">
                                Srilakshmi Auto Enterprises is hiring for the role of Sales Consultant!
                                </p>
                            </div>
                            <div class="px-1 py-4">
                                <a href="/Companydetails4" class="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentDrives
