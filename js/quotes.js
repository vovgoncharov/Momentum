export function getQuote() {
  const data = [
    {
      text: 'Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете',
      author: 'Стив Макконнелл',
    },
    {
      text: 'Сложность программы растет до тех пор, пока не превысит способности программиста',
      author: 'Артур Блох. Законы Мэрфи',
    },
    {
      text: 'Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены',
      author: 'И. Берард',
    },
  ];

  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');
  const changeQuote = document.querySelector('.change-quote');

  data.forEach(() => {
    quote.textContent = `${data[0].text}`;
    author.textContent = `${data[0].author}`;
  });
  changeQuote.addEventListener('click', (e) => {
    e.preventDefault();
    let number = Math.random() * 2;
    let numberIndex = Math.round(number);

    data.forEach(() => {
      quote.textContent = `${data[numberIndex].text}`;
      author.textContent = `${data[numberIndex].author}`;
    });
  });
}
