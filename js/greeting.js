export function initGreeting() {
  const greet = document.querySelector('.greeting');
  const name = document.querySelector('.name');
  const form = document.querySelector('.greeting-container');
  const date = new Date();
  const greets = ['Good morning,', 'Good day,', 'Good evening,', 'Good night,'];
  const getGreet = () => {
    let hours = date.getHours();
    if (hours > 6 && hours < 12) {
      greet.innerHTML = `${greets[0]}`;
    } else if (hours > 12 && hours < 18) {
      greet.innerHTML = `${greets[1]}`;
    } else if (hours > 18 && hours < 23) {
      greet.innerHTML = `${greets[2]}`;
    } else {
      greet.innerHTML = `${greets[3]}`;
    }
  };
  function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if (localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);

  getGreet();
}
