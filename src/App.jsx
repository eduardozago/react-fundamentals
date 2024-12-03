import { Header } from "./components/Header"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Doe',
      role: 'CEO'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet'},
      { type: 'url', content: 'ipsum.dolor/sit'},
    ],
    publishedAt: new Date('2024-12-02 18:50:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1536084006720-6c105926e135?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      role: 'Worker'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iusto.'},
      { type: 'url', content: 'ipsum.dolor.com/sit/amet'},
    ],
    publishedAt: new Date('2024-10-20 16:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </>
  )
}

