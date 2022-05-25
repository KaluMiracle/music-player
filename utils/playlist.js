import image1 from '../images/unreleased_cover.png'
import cover1 from '../images/cover-1.png'
import cover from '../images/cover.png'
// TODO: VERIFY IMAGES
class Music {

    constructor (title, artist, duration, album, image, src ){
        this.title = title; 
        this.artist = artist; 
        this.duration = duration; 
        this.album = album;
        this.image = image;
        this.src = src ? src : "https://raw.githubusercontent.com/KaluMiracle/audiofiles/main/all_of_the_lights.mp3"
         
    }

    convertDurationToSeconds = (duration) =>{
        
        try{
            const arr = duration.split(":")
            const min = parseInt(arr[0])
            const secs = parseInt(arr[1])
            const result = (min * 60) + secs
            return result
        }catch(e){
            console.error(e)
            return 0
        }
        
        
    }
}

const artist = "KANYE WEST"
const album = 'untitled'


export const playlistArray = [

    new Music(
        "Livin' In a Movie",
        artist,
        '3:27',
        "Freshmen Adjustment", cover1, 'https://raw.githubusercontent.com/KaluMiracle/audiofiles/main/livin_in_a_movie.mp3'
    ),
    new Music(
        "Dark Fantasy",
        artist,
        '5:12',
        album, cover, 'https://raw.githubusercontent.com/KaluMiracle/audiofiles/main/all_of_the_lights.mp3'
    ),
    new Music(
        "All of the Lights",
        artist,
        '2:54',
        'My Beautiful Dark Twisted Fantasy', 
        cover1, 
        'https://raw.githubusercontent.com/KaluMiracle/audiofiles/main/all_of_the_lights.mp3'
    ),
    new Music(
        "So Appalled",
        artist,
        '3:51',
        'My Beautiful Dark Twisted Fantasy', image1
    ),
    new Music(
        "Devil in a New Dress",
        artist,
        '4:51',
        album, cover1
    ),
    new Music(
        "Runaway",
        artist,
        '3:46',
        album, image1
    ),
    new Music(
        "Hell of a Life",
        artist,
        '3:09',
        album, cover
    ),
    new Music(
        "Blame Game",
        artist,
        '7:02',
        album, cover1
    ),
    new Music(
        "Who will Survive in America",
        artist,
        '3:37',
        album,image1
    ),
    new Music(
        "Dark Fantasy",
        artist,
        '3:51',
        album, cover,
        'https://raw.githubusercontent.com/KaluMiracle/audiofiles/main/dark_fantasy.mp3'
    ),
    new Music(
        "Self Concious",
        artist,
        '3:51',
        album, image1
    )

]

