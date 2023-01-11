const play = document.querySelector(".play");
const next = document.querySelector(".play-next");
const prev = document.querySelector(".play-prev");
const playList = document.querySelector(".play-list");
const list = document.querySelector(".list");
const audio = new Audio();
const source = document.querySelector(".source");
const musics = [
    "Aqua Caelestis",
    "Ennio Morricone",
    "River Flows In You",
    "Summer Wind",
];

export const playMusic = () => {
    let zero = 0;
    play.addEventListener("click", (e) => {
        if (document.querySelector(".play.pause")) {
            audio.pause();
            playList.innerHTML = `${musics[zero]}`;
            play.classList.remove("pause");
            list.classList.remove("display");
            playList.classList.remove("play-list-add");
        } else {
            list.classList.add("display");
            audio.src = `../assets/sounds/${musics[zero]}.mp3`;
            audio.currentTime = 0;
            audio.play();
            playList.innerHTML = `${musics[zero]}`;
            play.classList.add("pause");
            playList.classList.add("play-list-add");
        }
    });

    next.addEventListener("click", (e) => {
        list.classList.add("display");
        if (zero <= musics.length - 2) {
            zero += 1;
            audio.src = `../assets/sounds/${musics[zero]}.mp3`;
            audio.play();
            playList.innerHTML = `${musics[zero]}`;
            play.classList.add("pause");
            playList.classList.add("play-list-add");
        }
    });

    prev.addEventListener("click", (e) => {
        list.classList.add("display");
        if (zero > 0) {
            zero -= 1;
            audio.src = `../assets/sounds/${musics[zero]}.mp3`;
            audio.play();
            playList.innerHTML = `${musics[zero]}`;
            play.classList.add("pause");
            playList.classList.add("play-list-add");
        }
    });
};
playMusic();
