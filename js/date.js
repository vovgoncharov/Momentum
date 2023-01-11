export function initDate() {
  const date = document.querySelector('.date');
  const time = document.querySelector('.time');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];
  const getData = () => {
    let data = new Date();
    let hours = data.getHours();
    let min = data.getMinutes();
    let seconds = data.getSeconds();
    let today = data.getDay();
    let dates = data.getDate();
    let month = data.getMonth();
    // console.log(today)
    date.innerHTML = `${days[today]}, ${months[month]} ${dates}`;
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    time.innerHTML = `${hours}:${min}:${seconds}`;
  };
  setInterval(getData, 1000);
}
