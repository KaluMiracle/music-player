/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/index.module.scss'

const Menu = ({
    menuClassname =' animate__animated animate__fadeInDown ',
    currentIndex,
    setShowPlaylist,
    playlistArray,
    setShowMenu,
}) =>{

    const handleShowPlaylist = () => {
        setShowMenu(false)
        setShowPlaylist(true)

    }
    

    return (
        <div className={styles.menu_container}>

            <div className={styles.menu + menuClassname} >
                <div className={styles.slider}>
                    <img alt='' className={styles.image + ' ' + styles.large + ' animate__animated animate__pulse '} src={playlistArray[currentIndex].image.src}/>
        
                </div>
                <p className={styles.title}>
                    {playlistArray[currentIndex].title}
                </p>
                <p  className={styles.grey_text}>
                    {playlistArray[currentIndex].artist}
                </p>
                <p className={styles.menu_item + ' ' + styles.dots}>...</p>

                <div className={styles.menu_item}>
                    Add to playlist
                </div>

                <div className={styles.menu_item} onClick={handleShowPlaylist}>
                    Show album
                </div>

                <div className={styles.menu_item}>
                    Share with friends
                </div>
            </div>
        </div>
    )
}

export default Menu;