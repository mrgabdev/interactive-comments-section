/* eslint-disable multiline-ternary */
import data from '../data.json'
import { Comment } from './components/Comment'
import { CreateComment } from './components/CreateComment'
import { useComments } from './store/comments'

function App() {
  const currentUser = useComments((state) => state.currentUser)

  return (
    <main className='md:w-[730px] w-full h-auto flex flex-col justify-between gap-5'>
      <section className='py-8 px-4 md:px-0 flex flex-col items-center gap-5'>
        {data.comments.map((comment) => (
          <div className='flex flex-col gap-5 w-auto' key={comment.id}>
            <Comment
              key={comment.id}
              username={comment.user.username}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              userthumbnail={comment.user.image.webp || comment.user.image.png}
              currentUser={currentUser}
            />
            {!comment.replies.length ? null : (
              <section className='flex flex-col gap-5 border-l-2 border-l-lightGray md:ml-10 pl-4 md:pl-10'>
                {comment.replies.map((reply) => (
                  <Comment
                    key={reply.id}
                    username={reply.user.username}
                    content={reply.content}
                    createdAt={reply.createdAt}
                    score={reply.score}
                    userthumbnail={
                      reply.user.image.webp || reply.user.image.png
                    }
                    replyingTo={reply.replyingTo}
                    currentUser={currentUser}
                  />
                ))}
              </section>
            )}
          </div>
        ))}
        <CreateComment>
          <CreateComment.Button />
        </CreateComment>
      </section>
    </main>
  )
}

export default App
