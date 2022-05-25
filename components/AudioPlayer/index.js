
import styles from '../../styles/index.module.scss'
import Image from 'next/image'

import shuffleIco from '../../images/shuffle_ico.svg'
import previousIco from '../../images/previous_ico.svg'
import playIco from '../../images/Play_inactive.png'
import pauseIco from '../../images/pause-button.png'
import nextIco from '../../images/next_ico.svg'
import repeatIco from '../../images/repeat_ico.svg'
import loadingIco from '../../images/refresh.png'

import { useState, useRef, useEffect } from 'react'
import ProgressBar from '../ProgressBar'




const AudioPlayer = ({
  currentIndex,
  setCurrentIndex,
  playlistArray
}) => {

  const nextIndex = currentIndex === playlistArray.length - 1 ? 0 : currentIndex + 1
  const previousIndex =  currentIndex === 0 ? playlistArray.length - 1 : currentIndex - 1

  const [isPlaying, setIsPlaying] = useState(true);

  const [duration, setDuration] = useState(0);
  let [classname,setClassname] = useState('')

  const currentItem = playlistArray[currentIndex]

  const togglePlayPause = () => {
    setClassname(' animate__animated animate__heartBeat ')
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (prevValue) {
      audioPlayer.current.play();
      
    } else {
      audioPlayer.current.pause();
    }
  }


  const audioPlayer = useRef();
  



  useEffect(()=>{
    
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    audioPlayer.current.src = currentItem.src
    setIsPlaying(true)
    
  }, [audioPlayer, currentItem.src, duration, currentIndex])

  

  const playNext = () => {
    
    setClassname(' animate__animated animate__pulse')
    
    setCurrentIndex(nextIndex)

    setTimeout(() => {
      setClassname(' ')
    }, 500);
    
  }

  const playPrevious = () => {
    setCurrentIndex(previousIndex)
    setClassname(' animate__animated animate__pulse ')

    setTimeout(() => {
      setClassname(' ')
    }, 2000);

  }

  return (
    <div className={styles.audio_player}>
        
      <audio className={currentIndex} ref={audioPlayer} src={currentItem.src} preload="metadata"/>
        <div className={styles.slider } >

            <img className={styles.image + ' ' + styles.first_image } src={playlistArray[previousIndex].image.src} onClick={()=>setCurrentIndex(previousIndex)} />
            <div className={styles.current } >
                <img className={styles.image + ' ' + styles.large  + classname} src={playlistArray[currentIndex].image.src}/>
                <div className={styles.circle}></div>
            </div>
            <img className={styles.image + ' ' + styles.last_image } src={playlistArray[nextIndex].image.src}  onClick={()=>setCurrentIndex(nextIndex)}/>
            
        </div>

        <div className={styles.details}>
            <p className={styles.title}>
            {playlistArray[currentIndex].title}
            </p>
            <p  className={styles.grey_text}>
            {playlistArray[currentIndex].artist}
            </p>
        </div>
        

        <div className={styles.controls}>
            <div className={styles.ico}>
            <div><Image src={shuffleIco} layout='fill' alt=''/></div>
            </div>

            <div className={styles.ico} onClick={playPrevious}>
            <div><Image src={previousIco} layout='fill' alt=''/></div>
            </div>


            <div className={styles.ico + ' ' + styles.play } onClick={togglePlayPause}>
                <div><Image src={isPlaying ? playIco : pauseIco} layout='responsive' quality={100}  alt=''/></div>

            </div>

            <div className={styles.ico} onClick={playNext}>
            <div><Image src={nextIco} layout='fill' alt=''/></div>
            </div>

            <div className={styles.ico}>
            <div><Image src={repeatIco} layout='fill' alt=''/></div>
            </div>

            
        </div>

        <ProgressBar {...{isPlaying, duration, audioPlayer}}  currentItem = {playlistArray[currentIndex]} />

    </div>
  )
}

export default AudioPlayer