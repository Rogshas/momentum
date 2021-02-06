// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  date  = document.querySelector('.date'),
  arrOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  arrOfMonth = ['Январь‎', 'Февраль', 'Март', 'Апрель‎', 'Май‎', 'Июнь', 'Июль‎', 'Август‎', 'Сентябрь‎', 'Октябрь‎', 'Ноябрь‎', 'Декабрь‎'];

// Show Time
function showTime() {
  let today = new Date(),
  //let today = new Date('2021-01-30T08:24:00'),

    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    dayOfWeek = today.getDay(),
    day = today.getDate(),
    month = today.getMonth();
  
  

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}  `;
  date.innerHTML = `${arrOfWeek[dayOfWeek]}<span>,</span> ${day}   ${arrOfMonth[month]}`;


 

  
  setTimeout(showTime, 1000);
}


function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


let base ;
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
function setBgGreet() {
  let today = new Date(),
  //let today = new Date('2021-01-30T08:24:00'),
    hour = today.getHours();
    i = 1
    if (hour < 6) {
      base = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/night/';
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/night/01.jpg')"
      greeting.textContent = 'Спокойной ночи, ';
      document.body.style.color = 'white';
      // Night
  } else if (hour < 12) {
      // Morning
      base = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/morning/';
      document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/morning/01.jpg')"
      greeting.textContent = 'Доброе утро, ';
      document.body.style.color = 'white';
  } else if (hour < 18) {
    // Afternoon
    base = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/day/';
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/day/01.jpg')"
    greeting.textContent = 'Добрый день, ';
    document.body.style.color = 'white';
  } else {
    // Evening
    base = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/evening/';
    greeting.textContent = 'Добрый вечер, ';
    document.body.style.color = 'white';
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/evening/01.jpg')";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {

  
  if (e.type === 'keypress') {
    
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
    
      localStorage.setItem('name', e.target.innerText);
      
      name.blur();
      if (document.querySelector('.name').innerHTML === '' ) name.innerHTML =  '[Enter Name]' ; //'[Enter Name]'
      
    }
  } else {
    
    localStorage.setItem('name', e.target.innerText);
    if (document.querySelector('.name').innerHTML === '' ) name.innerHTML =  '[Enter Name]';
    
  
}
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  
   if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
      if (document.querySelector('.focus').innerHTML === '') document.querySelector('.focus').innerHTML =  '[Enter Focus]' ;
    }
  } else {
    
    localStorage.setItem('focus', e.target.innerText);
    if (document.querySelector('.focus').innerHTML === '') document.querySelector('.focus').innerHTML =  '[Enter Focus]';
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

name.addEventListener('click', function(){
  name.innerText = '';
});
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', function(){
  focus.innerText = '';
});

// Run
showTime();
setBgGreet();
getName();
getFocus();



if (document.querySelector('.name').innerHTML === '') getFocus();


function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}
function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);




// если смена цитаты у вас не работает, вероятно, исчерпался лимит API. в консоли ошибка 403
// скопируйте код себе и запустите со своего компьютера
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const quoteBtn = document.querySelector('.quote-btn');

async function getQuote() {  
  const url = `https://type.fit/api/quotes`;
  const res = await fetch(url);
  const data = await res.json(); 
  let n = getRandomInt(1,1000);
  blockquote.textContent = data[n].text;
  figcaption.textContent = data[n].author;
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

quoteBtn.addEventListener('DOMContentLoaded', getQuote());
quoteBtn.addEventListener('click', () => {getQuote()});
