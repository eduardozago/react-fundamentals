import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src='https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <div className={styles.authoInfo}>
                        <strong>John Doe</strong>
                        <span>Worker</span>
                    </div>
                </div>

                <time title='November 28 at 10:20 PM' dateTime='2024-11-28 10:20:30'>
                    Published at 1h
                </time>
            </header>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet.</p>

                <p><a href='#'>ipsum.dolor/sit</a></p>

                <p>
                    <a href='#'>#lorem</a>{' '} 
                    <a href=''>#ipsum</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave you feedback</strong>

                <textarea
                    placeholder='Leave a comment'
                />

                <footer>
                    <button type='submit'>Publish</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}