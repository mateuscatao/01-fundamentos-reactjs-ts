import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikedComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://avatars.githubusercontent.com/u/51727745?v=4" 
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mateus Catão</strong>
              <time title='20 de Janeiro às 17:56h' dateTime='2023-01-20'>Cerca de 2h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar cometário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikedComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}