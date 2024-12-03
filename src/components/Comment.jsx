import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>John Doe</strong>
                            <time title='November 28 at 10:20 PM' dateTime='2024-11-28 10:20:30'>
                                Published at 1h
                            </time>
                        </div>

                        <button title='Delete comment'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>5</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}