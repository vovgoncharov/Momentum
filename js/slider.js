export function initSlider() {
  const next = document.querySelector('.slide-next');
  const prev = document.querySelector('.slide-prev');
  const body = document.querySelector('body');
  const date = new Date();
  const img = new Image();

  const timeOfDay = ['morning', 'afternoon', 'evening', 'night'];
  let time;
  const getTimeOfDay = () => {
    let hours = date.getHours();
    if (hours > 6 && hours < 12) {
      time = `${timeOfDay[0]}`;
    } else if (hours > 12 && hours < 18) {
      time = `${timeOfDay[1]}`;
    } else if (hours > 18 && hours < 23) {
      time = `${timeOfDay[2]}`;
    } else {
      time = `${timeOfDay[3]}`;
    }
  };
  getTimeOfDay();

  let number;
  const getRandom = () => {
    let randomNumber = Math.random() * 20;
    if (randomNumber < 1) {
      number = `01`;
    } else if (randomNumber < 9.5) {
      number = Math.round(randomNumber);
      number = `0${number}`;
      return parseInt(number, 10);
    } else {
      return (number = Math.round(randomNumber));
    }
  };

  const getSlideNext = () => {
    getRandom();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${number}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${number}.jpg")`;
      console.log(number);
    };
  };
  const getSlidePrev = () => {
    getRandom();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${number}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${number}.jpg")`;
      console.log(number);
    };
  };

  const nextSlide = () => {
    next.addEventListener('click', getSlideNext);
  };
  const prevSlide = () => {
    prev.addEventListener('click', getSlidePrev);
  };

  prevSlide();
  nextSlide();
}
