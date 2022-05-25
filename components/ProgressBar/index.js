import styles from '../../styles/index.module.scss'
import { useRef, useState, useEffect } from 'react';


const ProgressBar= ({
  isPlaying,
  audioPlayer, 
  duration, 
  currentItem
}) => {
  const progressRef = useRef();

  const [currentTime, setCurrentTime] = useState( 0)

  useEffect(()=>{
    if (progressRef.current.value){
      setInterval(() => {
        setCurrentTime( progressRef.current.value)

        progressRef.current.value = audioPlayer.current ? audioPlayer.current.currentTime : 0
      }, 1000);
    }
    
  }, [audioPlayer, progressRef, duration ])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }
  const changeRange = () => {
    audioPlayer.current.currentTime = progressRef.current.value;
    if (isPlaying) audioPlayer.current.play();
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressRef.current.style.setProperty('--seek-before-width', `${progressRef.current.value / duration * 100}%`)
  }

  return (
    <div className={styles.progress_container}>
      <p className={styles.time + " " + styles.grey_text}>{calculateTime(currentTime)}</p>
      <input className={styles.progress} defaultValue="0" ref={progressRef}  onChange={changeRange} max={duration} type={'range'}/>
      <p className={styles.time + " " + styles.grey_text}>{duration ? calculateTime(duration) : currentItem.duration }</p>


    </div>

  )
}

export default ProgressBar;