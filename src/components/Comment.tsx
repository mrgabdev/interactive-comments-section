/* eslint-disable multiline-ternary */
import React, { ReactNode } from 'react'
import { Score } from './Score'
import replyIcon from '../assets/icons/icon-reply.svg'
import deleteIcon from '../assets/icons/icon-delete.svg'
import editIcon from '../assets/icons/icon-edit.svg'
import { useCommentUser } from '../hooks/useEditable'

interface CommentProps {
  currentUser: string
  username: string
  userthumbnail: string
  createdAt: string
  content: string
  score: number
  replyingTo?: string
}

export const Comment = ({
  currentUser,
  username,
  userthumbnail,
  createdAt,
  content,
  score,
  replyingTo
}: CommentProps) => {
  const { editable, handleEdit, handleDelete } = useCommentUser()

  return (
    <section className='bg-white p-4 md:p-6 md:h-[167px] rounded-lg shadow-sm'>
      <article className='comment-grid w-full h-full gap-6 gap-y-4'>
        <Score score={score} />
        <CommentUserInfo>
          <CommentUserImg userthumbnail={userthumbnail} />
          <CommentUsername>{username}</CommentUsername>
          <CurrentUser username={username} currentUser={currentUser} />
          <CommentCreatedAt>{createdAt}</CommentCreatedAt>
        </CommentUserInfo>
        {currentUser !== username ? (
          <ReplyButton />
        ) : (
          <CommentControls>
            <DeleteButton clickFunction={handleDelete} />
            <EditButton clickFunction={handleEdit} />
          </CommentControls>
        )}

        <CommentContent
          username={username}
          currentUser={currentUser}
          editable={editable}
          replyingTo={replyingTo}
        >
          {content}
        </CommentContent>
      </article>
    </section>
  )
}

interface UserInfo {
  children: ReactNode[] | ReactNode
}

const CommentUserInfo: React.FC<UserInfo> = ({ children }) => {
  return (
    <header className='comment-user flex items-center gap-2'>{children}</header>
  )
}

interface UsernameProps {
  children: ReactNode | string
}

const CommentUsername: React.FC<UsernameProps> = ({ children: username }) => {
  return <h2 className='font-medium text-darkBlue'>{username}</h2>
}

interface UserImgProps {
  userthumbnail: string
}

const CommentUserImg: React.FC<UserImgProps> = ({ userthumbnail }) => {
  return (
    <img className='w-[32px] h-[32px]' src={userthumbnail} alt='user photo' />
  )
}

interface CurrentUserProps {
  username: string
  currentUser: string
}
const CurrentUser: React.FC<CurrentUserProps> = ({ username, currentUser }) => {
  if (currentUser !== username) return null

  return (
    <p className='text-white bg-moderateBlue text-xs font-medium px-[6px] h-fit pb-[3px] pt-[1px] rounded-sm flex items-center'>
      you
    </p>
  )
}

interface CreatedAtProps {
  children: ReactNode | string
}
const CommentCreatedAt: React.FC<CreatedAtProps> = ({
  children: createdAt
}) => {
  return <p className='text-grayishBlue ml-1'>{createdAt}</p>
}

interface Content {
  children: ReactNode | ReactNode[]
  username: string
  currentUser: string
  editable: boolean
  replyingTo: string | undefined
}

const CommentContent: React.FC<Content> = ({
  children: content,
  username,
  currentUser,
  editable,
  replyingTo
}) => {
  return (
    <p
      className='text-grayishBlue comment-content'
      contentEditable={currentUser === username && editable}
    >
      {!replyingTo ? null : (
        <span className='text-moderateBlue font-medium mr-1'>
          @{replyingTo}
        </span>
      )}
      {content}
    </p>
  )
}

const ReplyButton = ({ styles }: { styles?: string }) => (
  <div
    className={`comment-controls flex justify-center gap-1 items-center cursor-pointer hover:opacity-40 ${styles}`}
  >
    <img className='h-[13px]' src={replyIcon} alt='reply' />
    <p className='text-moderateBlue font-medium'>Reply</p>
  </div>
)

interface CommentButtonsProps {
  clickFunction?: () => void
}

const DeleteButton = ({ clickFunction }: CommentButtonsProps) => {
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

const EditButton = ({ clickFunction }: CommentButtonsProps) => {
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
interface OptionsProps {
  styles?: string
  children: React.JSX.Element | React.JSX.Element[] | ReactNode
}

const CommentControls = ({ styles, children }: OptionsProps) => {
  return (
    <section className={`comment-controls flex gap-5 ${styles}`}>
      {children}
    </section>
  )
}
