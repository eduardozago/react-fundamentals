import { Header } from "./components/Header"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="John Doe" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium distinctio eligendi quis veniam iure numquam voluptatem repellendus dignissimos eum, doloremque molestias tempora molestiae architecto debitis ipsum a voluptas! Nisi."
          />
        </main>
      </div>
      
    </>
  )
}

