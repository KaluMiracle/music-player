import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'

import backIco from '../images/back_ico.svg'
import moreIco from '../images/more_ico.svg'

import menuIco from '../images/menu_ico.svg'
import beats from '../images/beats.svg'
import { useState} from 'react'
import Menu from '../components/Menu'
import Playlist from '../components/PlayList'
import { playlistArray } from '../utils/playlist'

import 'animate.css'
import AudioPlayer from '../components/AudioPlayer'



const App = () => {
  
  const [showMenu, setShowMenu] =  useState(false)
  const [showPlaylist, setShowPlaylist] =  useState(false)
  const [currentIndex, setCurrentIndex] = useState(playlistArray.length - 1)
  const nextIndex = currentIndex === playlistArray.length - 1 ? 0 : currentIndex + 1

  const [menuClassname, setMenuClassname] = useState(' animate__animated animate__fadeInDown ')

  
  const states = {
    showMenu, 
    setShowMenu, 
    currentIndex, 
    setShowPlaylist, 
    playlistArray, 
    menuClassname,
    setCurrentIndex,
    playlistArray

  }
  const toggleShowMenu = () => {
    showMenu ? setMenuClassname(' animate__animated animate__fadeOutUp') : null
      
    setTimeout(() => {
      setShowMenu(!showMenu)
      setMenuClassname(' animate__animated animate__fadeInDown')

        
    }, 400);
      
  }
  return (

    <div className={styles.index}>
      <Head>
        <title>Music Player</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.container}>


        <div className={styles.header}>
          <div className={styles.ico}>
            <div><Image src={backIco}layout='fill'  alt=''/></div>
          </div>

          {
              !showMenu? 
                
                <div>
                  <p  className={styles.grey_text}>Album</p>
                  <p className={styles.title}>{playlistArray[currentIndex].album}</p>
                </div>

              : null
            }


          <div className={styles.ico} onClick={toggleShowMenu}>
            <div><Image src={moreIco} layout='fill' alt=''/></div>
          </div>
          
        </div>

        {
          showMenu? 
            <Menu {...states}/> : <AudioPlayer {...states}/> 

          
        }

        <div style={{
            width: '100%',
          }}>

            {
              !showMenu? 
                <div className={styles.ico + ' ' + styles.beats}>
                  <div><Image src={beats} layout='fill' objectFit='cover' alt=''/></div>
                </div> 

              : null
            }
            

          
            <div className={styles.footer}>

            
              <div className={styles.ico} onClick ={ ()=> setShowPlaylist(!showPlaylist)}>
                <div><Image src={menuIco} layout='fill' alt=''/></div>
              </div>

              
              <div style={{
                flexGrow: 2,
              }}>
                <p  className={styles.grey_text}>
                  next
                </p>
                <p className={styles.title}>
                  {playlistArray[nextIndex].title}
                </p>
              </div>
              
              <p  className={styles.grey_text + ' ' +   styles.duration}>
                {playlistArray[nextIndex].duration}
              </p>

            </div>
          </div>

        {
          showPlaylist? 
            <Playlist 
              {...states}
            /> : null 

          
        }

      </div>


    </div>


  )
}

export default App