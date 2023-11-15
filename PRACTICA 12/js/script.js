const songs = [
    {
        title: 'Fear for Nobody',
        artist: 'Måneskin',
        src: 'music/Måneskin - Fear for Nobody.opus',
        cover: 'img/Maneskin Fear For Nobody.jpg' 
    },
    {
        title: 'Black Catcher',
        artist: 'Vicke Blanka',
        src: 'music/Black-Catcher_Vicke Blanka-Black-Catcher.mp3',
        cover: 'img/Black Catcher Vicke Blanka.jpg' 
    },
    {
        title: 'MARK CHAPMAN',
        artist: 'Måneskin',
        src: 'music/Måneskin - MARK CHAPMAN.opus',
        cover: 'img/Maneskin Mark chapman.jpg' 
    },
    { 
        title: 'Moriro da re',
        artist: 'Måneskin', 
        src: 'music/moriro-da-re.mp3', 
        cover: 'img/moriro-da-re.jpg' 
    },
    {
        title: 'La costa del silencio',
        artist: 'Mago de Oz',
        src: 'music/La costa del silencio.mp3',
        cover: 'img/Mago de Oz la costa del silencio.jpg' 
    },
    {
        title: 'I wanna be your slave',
        artist: 'Måneskin',
        src: 'music/i-wanna-be-your-slave.mp3',
        cover: 'img/i-wanna-be-your-slave.jpg' 
    },
    {
        title: 'Hombre con alas',
        artist: 'Cuarteto de Nos',
        src: 'music/Hombre con alas - cuarteto de nos.mp3',
        cover: 'img/Cuarteto de nos Hombre con alas.jpg' 
    }

];

let currentSongIndex = 0;

let isPlaying = false;

let audio;

function playCurrentSong() {
    if (audio) {
        audio.stop();
    }

    audio = new Howl({          
        src: [songs[currentSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function () {
            playNextSong();
        }
    });
    updateSongInfo();
}

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumCover = document.querySelector('.card-img-top');

playButton.addEventListener('click', () => {
    isPlaying = true;
    playCurrentSong();
});


pauseButton.addEventListener('click', () => {
    isPlaying = false;
    audio.pause();
});


nextButton.addEventListener('click', () => {
    playNextSong();
});


prevButton.addEventListener('click', () => {
    if (audio.seek() > 5) {
        audio.seek(0);
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playCurrentSong();
    }
});


volumeSlider.addEventListener('input', () => {
    audio.volume(volumeSlider.value);
});

function updateSongInfo() {
    songTitle.textContent = songs[currentSongIndex].title;
    songArtist.textContent = songs[currentSongIndex].artist;
    albumCover.src = songs[currentSongIndex].cover;
};

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
};

playCurrentSong();