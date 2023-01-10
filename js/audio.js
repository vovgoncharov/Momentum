const play = document.querySelector(".play");
const next = document.querySelector(".play-next");
const prev = document.querySelector(".play-prev");
const playList = document.querySelector(".play-list");
const list = document.querySelector(".list");
const audio = document.querySelector(".player-control");
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
        } else {
            list.classList.add("display");
            source.src = `assets/sounds/${musics[zero]}.mp3`;
            audio.play();
            playList.innerHTML = `${musics[zero]}`;
            play.classList.add("pause");
        }
    });

    next.addEventListener("click", (e) => {
        list.classList.add("display");
        if (zero <= musics.length - 2) {
            zero += 1;
            audio.src = `assets/sounds/${musics[zero]}.mp3`;
            audio.play();
            playList.innerHTML = `${musics[zero]}`;
            play.classList.add("pause");
        }
    });

    prev.addEventListener("click", (e) => {
        list.classList.add("display");
        if (zero > 0) {
            zero -= 1;
            audio.src = `assets/sounds/${musics[zero]}.mp3`;
            audio.play();
            playList.innerHTML = `${musics[zero]}`;
            play.classList.add("pause");
        }
    });
};
playMusic();
