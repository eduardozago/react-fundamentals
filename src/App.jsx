import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="John Doe" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium distinctio eligendi quis veniam iure numquam voluptatem repellendus dignissimos eum, doloremque molestias tempora molestiae architecto debitis ipsum a voluptas! Nisi."
      />
    </>
  )
}

