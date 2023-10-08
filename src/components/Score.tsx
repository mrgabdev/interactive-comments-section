import React, { useState } from 'react'

interface Props {
  score: number
}

export const Score: React.FC<Props> = ({ score }) => {
  const [commentScore, setCommentScore] = useState<number>(score)

  const increaseScore = (): void => setCommentScore((prev) => prev + 1)

  const decreaseScore = (): void =>
    setCommentScore((prev) => {
      if (prev === 0) return prev
      return prev - 1
    })

  return (
    <div className='grow-0 shrink-0 basis-[40px] md:h-[100px] items-center justify-evenly flex flex-col bg-veryLightGray rounded-lg font-medium'>
      <div
        className='fill-lightGrayishBlue hover:fill-moderateBlue cursor-pointer w-full h-full flex items-center justify-center'
        onClick={increaseScore}
      >
        <IconPlus />
      </div>
      <p className='text-moderateBlue'>{commentScore}</p>
      <div
        className='fill-lightGrayishBlue hover:fill-moderateBlue cursor-pointer w-full h-full flex items-center justify-center'
        onClick={decreaseScore}
      >
        <IconMinus />
      </div>
    </div>
  )
}

const IconMinus = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='11' height='3'>
      <path d='M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 00-.53-.167H.76a.859.859 0 00-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 00.53.167h8.495z'></path>
    </svg>
  )
}

const IconPlus = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11'>
      <path d='M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149a.484.484 0 00.148-.354V5.272a.483.483 0 00-.148-.354.483.483 0 00-.354-.149H6.833V1.4a.483.483 0 00-.149-.354.483.483 0 00-.354-.149H4.915a.483.483 0 00-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 00-.354.15.48.48 0 00-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33z'></path>
    </svg>
  )
}
