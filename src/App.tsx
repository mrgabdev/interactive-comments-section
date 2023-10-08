/* eslint-disable multiline-ternary */
import data from '../data.json'
import { Comment } from './components/Comment'
import { CreateComment } from './components/CreateComment'

function App() {
  return (
    <main className='pt-8 pb-8 md:min-w-[642px] md:max-w-[730px] flex flex-col justify-between gap-5'>
      <section className='flex flex-col items-center gap-5'>
        {data.comments.map((comment) => (
          <div className='flex flex-col gap-5' key={comment.id}>
            <Comment
              key={comment.id}
              username={comment.user.username}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              userthumbnail={comment.user.image.webp || comment.user.image.png}
            />
            {!comment.replies.length ? null : (
              <section className='flex flex-col gap-5 border-l-2 border-l-lightGray md:ml-10 md:pl-10'>
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
                  />
                ))}
              </section>
            )}
          </div>
        ))}
      </section>
      <CreateComment />
    </main>
  )
}

export default App
