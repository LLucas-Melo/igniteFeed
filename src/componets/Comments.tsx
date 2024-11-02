import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar.tsx'
import { useState } from 'react';


interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}
export function Comment({content, onDeleteComment}: CommentProps){
  const [LikeCount, setLikeCount] = useState(0);
  function handleDeleteComment(){
    console.log("delete");

    onDeleteComment(content);

  }
  function handfleLikeCount(){
    setLikeCount((state =>{
      return state + 1 
    }));
  }
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false}
      src="https://github.com/llucas-melo.png"      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong> Lucas Melo</strong>
            <time title='Publicado em 11.10.2024' dateTime="2022-05-11">Cerca de 1h atras</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>

        </div>

          <footer>
            <button onClick={handfleLikeCount}>
              <ThumbsUp />
              Aplaudir <span> {LikeCount}</span>
            </button>
          </footer>
      </div>
    </div>
  )

}