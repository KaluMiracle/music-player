import styles from '../../styles/index.module.scss'
import Image from 'next/image'
import playIco from '../../images/Play_active.png'
import backIco from '../../images/back_ico.svg'

import arrowDown from '../../images/hide_ico.svg'
import { useState } from 'react'

const Item =({
    no =1,
    title= "Livin' In a Movie",
    duration = '3:27',
    index,
    setCurrentIndex,
    setShowPlaylist,
}) => {

    const handleClick= (index) => {
        setCurrentIndex(index)
        setShowPlaylist(false)
    }
    return(
        <article className={styles.list_item +  ' animate__animated animate__fadeInLeft '} onClick={()=>handleClick(index)} >
            <p className={styles.grey_text}>{no}.</p>
            <p className={styles.grey_text + " " + styles.bold}>{title}</p>
            <p className={styles.grey_text + " " + styles.duration}>{duration}</p>
        </article>
    )
}

const Playlist = ({
    setShowPlaylist,
    showPlaylist,
    playlistArray,
    setCurrentIndex
}) =>{

    const [classname,setClassname] = useState(' animate__animated animate__bounceInLeftfadeInLeft ')

    const handleHide = () => {
        setClassname(' animate__animated animate__fadeOutDown')
        setTimeout(() => {
            setShowPlaylist(false)
        }, 500);
        
    }
    return (
        <div className={styles.playlist + classname} >
            <div className={styles.header_container}>
                <div className={styles.header}>
                    <div className={styles.ico} onClick={()=>setShowPlaylist(!showPlaylist)} >
                        <div><Image src={backIco}layout='fill'  alt=''/></div>
                    </div>

                    <div style={{
                        flexGrow: 2,
                    }}>
                        <p className={styles.title}>Self Conscious</p>
                        <p className={styles.grey_text}>Kanye west</p>
                        
                    </div>

                    <div className={styles.ico +  ' ' + styles.play} >
                        <div><Image src={playIco} layout='fill' alt=''/></div>
                    </div>

                    
                </div>
            </div>

            
            <div className={styles.container_list}>
                <div className={styles.list_overlay}></div>
                
                <div className={styles.list}>
                    {playlistArray.map((item, index)=>{
                        return <Item key={index} 
                                    no={index + 1}
                                    title={item.title}
                                    duration={item.duration}
                                    index={index}
                                    setCurrentIndex={setCurrentIndex}
                                    setShowPlaylist={setShowPlaylist}
                                />
                    })}
                
                </div>
                
                <div className={styles.button}>
                    shuffle play
                </div>

                <div className={styles.ico} onClick={handleHide}>
                    <div><Image src={arrowDown}layout='fill'  alt=''/></div>
                </div>
            </div>


        </div>
    )
}

export default Playlist;