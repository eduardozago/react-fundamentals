import { format, formatDistanceToNow } from 'date-fns'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "MMMM dd 'at' hh:mm aa")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authoInfo}>
                        <strong>{ author.name }</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p>{item.content}</p>
                    } else if (item.type === 'url') {
                        return <p><a href=''>{item.content}</a></p>
                    }
                })}
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
            </div>
        </article>
    )
}