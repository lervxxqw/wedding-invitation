const countdown = document.getElementById("countdown");

const weddingDate = new Date("July 4, 2026 15:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.innerHTML = `${days}д ${hours}год ${minutes}хв ${seconds}с`;
}, 1000);
let isPlay = false
let audio = new Audio('music/paulyudin-wedding-485932.mp3');


function PlayMusic(){
    const btn = document.getElementById("music-btn");
    if (isPlay){
        audio.pause();
        isPlay = false;
        btn.classList.remove("animate__rotateIn",  "animate__animated", "animate__infinite", "wow");
    }
    else{
        audio.play();
        isPlay = true;
        btn.classList.add("animate__rotateIn",  "animate__animated", "animate__infinite", "wow");

    }
}

