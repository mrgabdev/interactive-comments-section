/* eslint-disable multiline-ternary */
import React from 'react'
import { Score } from './Score'
import replyIcon from '../assets/icons/icon-reply.svg'
import deleteIcon from '../assets/icons/icon-delete.svg'
import editIcon from '../assets/icons/icon-edit.svg'
import { useComments } from '../store/comments'
import { useEditable } from '../hooks/useEditable'

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
  const [editable, handleEditable] = useEditable()

  return (
    <section className='bg-white p-6 flex flex-col md:flex-row justify-between md:h-40 rounded-lg gap-6'>
      <Score score={score} styles='hidden md:flex' />

      <article className='flex flex-col gap-2 w-full h-full'>
        <header className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img
              className='w-[32px] h-[32px]'
              src={userthumbnail}
              alt='user photo'
            />

            <h2 className='font-medium text-darkBlue'>{username}</h2>
            {user !== username ? null : <CurrentUser />}
            <p className='text-grayishBlue'>{createdAt}</p>
          </div>
          {user !== username ? (
            <ReplyButton />
          ) : (
            <CommentOptions styles='hidden md:flex'>
              <DeleteButton clickFunction={handleEditable} />
              <EditButton clickFunction={handleEditable} />
            </CommentOptions>
          )}
        </header>
        <p
          className='text-grayishBlue'
          contentEditable={user === username && editable}
        >
          {!replyingTo ? null : (
            <span className='text-moderateBlue font-medium mr-1'>
              @{replyingTo}
            </span>
          )}
          {content}
        </p>
      </article>
      <CommentOptions styles='md:hidden'>
        <DeleteButton clickFunction={handleEditable} />
        <EditButton clickFunction={handleEditable} />
      </CommentOptions>
    </section>
  )
}

const CurrentUser = () => (
  <p className='text-white bg-moderateBlue text-xs font-medium px-[6px] h-fit pb-[3px] pt-[1px] rounded-sm flex items-center'>
    you
  </p>
)

const ReplyButton = () => (
  <div className='flex justify-center gap-1 items-center cursor-pointer hover:opacity-40'>
    <img className='h-[13px]' src={replyIcon} alt='reply' />
    <p className='text-moderateBlue font-medium'>Reply</p>
  </div>
)

interface OptionsProps {
  styles?: string
  children: React.JSX.Element | React.JSX.Element[]
}

const CommentOptions: React.FC<OptionsProps> = ({ children, styles }) => {
  return (
    <section className={`flex gap-2 md:gap-4 ${styles}`}>{children}</section>
  )
}

type OptionProp = { clickFunction: () => void }

const DeleteButton = ({ clickFunction }: OptionProp) => {
  return (
    <div
      className='flex justify-center gap-1 items-center cursor-pointer hover:opacity-40'
      onClick={clickFunction}
    >
      <img className='h-[13px]' src={deleteIcon} alt='delete' />
      <p className='text-softRed font-medium'>Delete</p>
    </div>
  )
}

const EditButton = ({ clickFunction }: OptionProp) => {
  return (
    <div
      className='flex justify-center gap-1 items-center cursor-pointer hover:opacity-40'
      onClick={clickFunction}
    >
      <img className='h-[13px]' src={editIcon} alt='edit' />
      <p className='text-moderateBlue font-medium'>Edit</p>
    </div>
  )
}
