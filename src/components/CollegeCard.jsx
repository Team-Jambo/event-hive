import React from 'react'

const CollegeCard = ({ image, name, date, note }) => {

    return (
        <div className="relative">
            <div className="h-[20px] w-[22px] bg-white absolute shadow-2xl top-8 leftt-2 rounded-[5px] flex justify-center items-center ">
            </div>
            <p className='bg-white'>FREE</p>
            <img src={image} alt={name} />
            <p className="absolute left-2 bottom-2 text-white font-bold ">{date}</p>
            <p>{date}</p>
            <h1>{note}</h1>
        </div>
    )
}

export default CollegeCard