const player = document.querySelector(".play-track"),
    playBtn = document.querySelector(".play__pause"),
    prevBtn = document.querySelector(".play__previous"),
    nextBtn = document.querySelector(".play__next"),
    audio = document.querySelector(".audio"),
    progressConteiner = document.querySelector(".play__progress"),
    progress = document.querySelector(".play__curr-progress"),
    name = document.querySelector(".play__name"),
    author = document.querySelector(".play__author"),
    cover = document.querySelector(".play__image img")

function playSong(){
    player.classList.add("play")
    audio.play()
}

function stopSong(){
    player.classList.remove("play")
    audio.pause()
}

playBtn.addEventListener("click", () => {
    const isPlaying = player.classList.contains("play")
    if (isPlaying) {
        stopSong()
    }else{
        playSong()
    }
})

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`

}

audio.addEventListener("timeupdate", updateProgress)

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}

progressConteiner.addEventListener("click", setProgress)