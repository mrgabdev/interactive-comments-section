/* eslint-disable multiline-ternary */
import React from 'react'
import { Score } from './Score'
import replyIcon from '../assets/icons/icon-reply.svg'
import { useComments } from '../store/comments'

interface CommentProps {
  username: string
  userthumbnail: string
  createdAt: string
  content: string
  score: number
  replyingTo?: string
}

export const Comment: React.FC<CommentProps> = ({
  username,
  userthumbnail,
  createdAt,
  content,
  score,
  replyingTo
}) => {
  const user = useComments((state) => state.currentUser)

  return (
    <section className='bg-white p-6 flex justify-between w-full md:h-40 rounded-lg gap-6'>
      <Score score={score} />
      <article className='flex flex-col gap-4 w-auto'>
        <header className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img
              className='w-[32px] h-[32px]'
              src={userthumbnail}
              alt='user photo'
            />

            <h2 className='font-medium text-darkBlue'>{username}</h2>
            {user === username ? (
              <p className='text-white bg-moderateBlue text-xs font-medium px-[6px] h-fit pb-[3px] pt-[1px] rounded-sm flex items-center'>
                you
              </p>
            ) : null}
            <p className='text-grayishBlue'>{createdAt}</p>
          </div>
          <div className='flex justify-center gap-1 items-center cursor-pointer'>
            <img className='h-[13px]' src={replyIcon} alt='reply' />
            <p className='text-moderateBlue font-medium'>Reply</p>
          </div>
        </header>
        <p className='text-grayishBlue'>
          {!replyingTo ? null : (
            <span className='text-moderateBlue font-medium mr-1'>
              @{replyingTo}
            </span>
          )}
          {content}
        </p>
      </article>
    </section>
  )
}
