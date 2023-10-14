import React, { ReactNode } from 'react'
import { useComments } from '../store/comments'

interface CreateCommentProps {
  children: React.JSX.Element | React.JSX.Element[] | ReactNode
}

interface Composition {
  Button: React.FC
}

export const CreateComment: React.FC<CreateCommentProps> & Composition = ({
  children
}) => {
  const userThumbnail = useComments((state) => state.userThumbnail)
  return (
    <footer className='bg-white create-comment-grid p-4 md:p-6 w-full gap-y-7 md:gap-3 md:h-36 rounded-lg shadow-sm'>
      <img
        src={userThumbnail}
        alt='user photo'
        className='create-user w-[32px] h-[32px] md:w-[40px] md:h-[40px]'
      />
      <textarea
        className='create-input flex-grow px-4 py-2 border border-lightGray outline-none focus:border-moderateBlue rounded-md h-[110px] md:h-full resize-none'
        name='content'
        id=''
        placeholder='Add a comment...'
      />
      {children}
    </footer>
  )
}

const SendButton = () => {
  return (
    <button className='create-button uppercase py-3 px-8 h-fit text-white rounded-md bg-moderateBlue'>
      send
    </button>
  )
}

CreateComment.Button = SendButton
