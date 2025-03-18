const arrayOfhealthwishes = [
  "Пий більше води.",
  "Регулярно рухайся.",
  "Спи не менше 7-8 годин на добу.",
  "Їж більше овочів і фруктів.",
  "Зменшуй споживання цукру.",
  "Уникай стресів.",
  "Мий руки після вулиці та перед їжею.",
  "Займайся фізичними вправами кожного дня.",
  "Не зловживай алкоголем.",
  "Проводь більше часу на свіжому повітрі.",
  "Робіть регулярні медичні обстеження.",
  "Контролюй вагу.",
  "Не кури.",
  "Підтримуй нормальний рівень холестерину.",
  "Робіть перерви під час роботи на комп'ютері.",
  "Слухай своє тіло і не ігноруй симптоми хвороб.",
  "Використовуй сонцезахисний крем на вулиці.",
  "Практикуй техніки розслаблення, такі як медитація.",
  "Підтримуй позитивний настрій.",
];

let countofpills = 5;
document.getElementById("count-of-tablets").innerText = "🥛".repeat(countofpills);

document.getElementById("btn_health_wishes").addEventListener("click", () => {
if (countofpills > 0) {
  countofpills--;
  let index = Math.floor(Math.random() * arrayOfhealthwishes.length);
  document.getElementById("p-health-wishes").innerText = arrayOfhealthwishes[index];
  
  console.log(countofpills);
  document.getElementById("count-of-tablets").innerText = "🥛".repeat(countofpills) + "❌".repeat(5 - countofpills);
  console.log("".repeat(countofpills) + "❌".repeat(5 - countofpills));
  if (countofpills === 0) {
    console.log("countofpills - 0");
    document.getElementById("btn_health_wishes").style.display = "none";
  }
} else {
  document.getElementById("p-health-wishes").innerText = "Немає молока для отримання поради.";
}
});

document.getElementById("btn-buy-tablets").addEventListener("click", () => {
if (countofpills < 5) {
  countofpills++;
  console.log(countofpills);
  document.getElementById("count-of-tablets").innerText = "🥛".repeat(countofpills) + "❌".repeat(5 - countofpills);
  document.getElementById("btn_health_wishes").style.display = "inline-block";
  document.getElementById("p-health-wishes").innerText = "🥛";
} else {
  document.getElementById("p-health-wishes").innerText = "У вас вже максимальна кількість молока.";
}
});

const arrayOfImages = [
  "1",
  "2",
  "3"
]

let galleryImage = 1

document.getElementById("main-image").setAttribute('src', `img/gallery/${arrayOfImages[galleryImage - 1]}.jpg`)

document.getElementById('right-arrow').addEventListener('click',()=>{
    galleryImage++
    console.log(galleryImage)

    if (galleryImage == arrayOfImages.length) galleryImage = 0


    document.getElementById("main-image").setAttribute('src', `img/gallery/${arrayOfImages[galleryImage]}.jpg`)
})

document.getElementById('left-arrow').addEventListener('click',()=>{
  galleryImage--
  console.log(galleryImage)

  if (galleryImage == 0) galleryImage = arrayOfImages.length


  document.getElementById("main-image").setAttribute('src', `img/gallery/${arrayOfImages[galleryImage - 1]}.jpg`)
})

const arrayOfObjects = [
  {
    id: 1,
    title:"Аевіт",
    photo:"",
    decsription:"",
    rating: 4,
    type: ""
  },
  {
    id: 2,
    title:"Вітамін С",
    photo:"",
    decsription:"",
    rating: 3,
    type: ""
  },
  {
    id: 3,
    title:"Вітамін D",
    photo:"",
    decsription:"",
    rating: 5,
    type: ""
  },
  {
    id: 4,
    title:"Вітамін B3",
    photo:"",
    decsription:"",
    rating: 5,
    type: ""
  },
  {
    id: 5,
    title:"Омега-3",
    photo:"",
    decsription:"",
    rating: 4,
    type: ""
  },
]

console.log(arrayOfObjects)

arrayOfObjects.forEach((item)=>{
  console.log(item)
let divVitamin = document.createElement('div')
divVitamin.innerText = item.title
divVitamin.classList.add('vitamin')

document.getElementById('p-vitamin').appendChild(divVitamin)
})