import { useComments } from '../store/comments'

export const CreateComment = () => {
  const userThumbnail = useComments((state) => state.userThumbnail)
  return (
    <footer className='bg-white p-6 flex justify-between items-start w-full md:gap-3 md:h-36 rounded-lg'>
      <img
        src={userThumbnail}
        alt='user photo'
        className='min-w-[32px] min-h-[32px] md:w-[40px] md:h-[40px]'
      />
      <textarea
        className='flex-grow px-4 py-2 border border-lightGray outline-none focus:border-moderateBlue rounded-md h-full resize-none'
        name='content'
        id=''
        placeholder='Add a comment...'
      />
      <button className='uppercase py-2 px-3'>send</button>
    </footer>
  )
}
