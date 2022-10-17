import { Header } from './components/Header'
import { Post } from './components/Post'
import {  Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css';

function App() {
  

  return (
    <>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
        <main>
          <Post author="Bruno Vieira" content="post very nice"/>
          <Post author="Stephanie Vieira" content="Thats is so nice"/>

        </main>
      </div>
    

     
    
    </>
    )
  }

export default App
