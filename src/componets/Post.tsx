import { format, formatDistanceToNow } from 'date-fns'
import {ptBR}from 'date-fns/locale/pt-BR';

import style from './Post.module.css'
import { Comment } from './Comments.tsx'
import { Avatar } from './Avatar.tsx'
import { ChangeEvent, FormEvent, InvalidEvent, useState, } from 'react'

//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
// content: string

interface Author{
  
 
  name :string
  role: string
  avatarUrl: string
}
interface PostProps {
  author: Author
  content: {
    type: string
    content: string
  }[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  const [NewCommentText, setNEwCommentText] = useState('');
  const publishedDateFormatted = format(publishedAt, " dd 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  //padrao legal a ser seguido, quando uma funcao que tem alguma acao do usuario comecar com o handle
  function HandleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    
    //imutalidade
    setComments([...comments, NewCommentText]);
    setNEwCommentText('');
  }



  function handleNewCommentChange(event: ChangeEvent< HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNEwCommentText(event.target.value)

  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo e obrigatorio')
  }


  function deleteComment(commentToDelete:string) {

    //imutabilidade -> as variaveis nao podem ser modificado, nos criamos um novo valor( um novo espaco na memoria)
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpy = NewCommentText.length === 0

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar
            src={author.avatarUrl} hasBorder={false} alt={''}          />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role} </span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={style.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return (
              <p key={line.content}> {line.content}</p>
            )
          } else if (line.type === 'link') {
            return (
              <p key={line.content}> <a href="#">{line.content}</a></p>
            )
          }
        })}

      </div>


      <form onSubmit={HandleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder='Deixe um comentaário'
          value={NewCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button
            disabled={isNewCommentEmpy}
            type='submit'>
            Publicar
          </button>
        </footer>


      </form>

      <div className={style.commentList}>
        {comments.map(comment => {
          return (
            <Comment key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />)
        })}
      </div>

    </article>
  )
}