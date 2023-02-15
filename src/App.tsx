import { Header } from './components/Header';
import { Post, PostProps } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mateuscatao.png",
      name: "Mateus Catão",
      role: "Front End Developer"
    },
    content: [
      { type: "paragraph", content: "Novo post"},
      { type: "paragraph", content: "Testando parágrafos"},
      { type: "link", content: "github.com/mateuscatao"},         
    ],
    publishedAt: new Date("2023-01-31 15:24:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rafaelpapastamatiou.png",
      name: "Rafael Papastamatiou",
      role: "Full Stack Senior Developer"
    },
    content: [
      { type: "paragraph", content: "Mais um post"},
      { type: "paragraph", content: "testando mais parágrafos"},
      { type: "link", content: "github.com/rafaelpapastamatiou"},         
    ],
    publishedAt: new Date("2023-01-30 10:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                id={post.id}
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
