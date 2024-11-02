
import { Post } from './componets/Post'

import Header from './componets/Header'

import Sidebar from './componets/sidebar/Sidebar.tsx'
import './global.css'
import style from './App.module.css'


const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/llucas-melo.png',
      name: 'Lucas Melo',
      role: 'Front-end Developer'
    },
    content:[
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: '👉 jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2024-11-01 20:00:00'),
  
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://i.pinimg.com/736x/6c/7d/cb/6c7dcbbe0342fb03b1b0b7bc32787416.jpg',
      name: 'superChoque',
      role: 'full-stack Developer'
    },
    content:[
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: '👉 jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2024-06-11 20:00:00'),
  
  },
  

];
function App() {


  return (

    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
            return (
              <Post 
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

export default App
