import words3 from "../data/3.js";
import words4 from "../data/4.js";
import words5 from "../data/5.js";
import words6 from "../data/6.js";

const fieldEl = document.querySelector(".field");
const lettersEl = document.querySelectorAll(".letter");
const wordDisplayEl = document.querySelector(".display");
const wordsCountEl = document.querySelector(".words__count");
const totalScoreEl = document.querySelector(".total__score");
const currentScoreEl = document.querySelector(".current__score");
const resetBtnEl = document.querySelector(".button");
const timer = document.querySelector(".timer");

window.addEventListener("touchstart", handleTouchstart);
window.addEventListener("touchmove", handleTouchmove);
window.addEventListener("touchend", handleTouchend);
fieldEl.addEventListener("mousedown", handleMousedown);
fieldEl.addEventListener("mousemove", handleMousemove);
fieldEl.addEventListener("mouseup", handleMouseup);
resetBtnEl.addEventListener("click", handleClick);

let lettersRandom =
  "ООООООООООООООООООООООООООЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕААААААААААААААААААААААААИИИИИИИИИИИИИИИИИИИИИННННННННННННННННННННТТТТТТТТТТТТТТТТТТСССССССССССССССССРРРРРРРРРРРРРРРВВВВВВВВВВВВВВВЛЛЛЛЛЛЛЛЛЛЛЛЛЛЛЛККККККККККККККККККМММММММММММММММДДДДДДДДДДППППППППППППППУУУУУУУУУУУУЯЯЯЯЯЯЯЯЯЯЯЯЯЫЫЫЬЬЬЬЬЬЬЬЬЬГГГГГЗЗЗЗЗББББЧЧЙЙХХЖЖШШЮЮЮЦЦЩЩФФ";

let isMouseClicked = false; //Чи натиснута кнопка миші
let resultWordArr = []; //Масив з буквами набраного слова
let totalLeters = 0; //Кількість букв у набраному слові
let current = lettersEl[0]; //Поточна буква
let headerHeight = 150; //висота хедера + верхній падінг поля
let fault = 10; //похибка для точності проведення по буквам
let w3 = 0; //номер бонусної букви
let w2 = 0; //номер бонусної букви
let x3 = 0; //номер бонусної букви
let x2 = 0; //номер бонусної букви
let kv = 90; //розмір квадрата з буквою
let z = 5; //половина зазора між квадратами мінус 1
let d = kv + 2 * z; //відстань від початку попереднього до початку наступного
let c = 50; //стала для бонусних трикутників
let zm = 2; //виступ бонусних трикутників
let score = 0; //Очки за одне слово
let totalScore = 0; //Очки загальні
let mn = 1; //Множник для пірахунку очків за слово
let selectedWords = []; //Набрані слова
let words = []; //Слова з словника
let timerFunc; //Функція таймера
let isTimerOn = false; //Чи ввімкнений таймер
const initFontSize = 49; //Початковий розмір шрифта слова
let currentFontSize = initFontSize; //Поточний розмір шрифта слова

function handleTouchstart(e) {
  let target = null;

  lettersEl.forEach((el) => {
    if (
      e.changedTouches[0].clientX > el.offsetLeft - fault &&
      e.changedTouches[0].clientX < el.offsetLeft + el.offsetWidth + fault &&
      e.changedTouches[0].clientY > el.offsetTop + headerHeight - fault &&
      e.changedTouches[0].clientY <
        el.offsetTop + headerHeight + el.offsetHeight + fault
    ) {
      target = el;
      target.parentNode.classList.add("active-letter");

      if (!isTimerOn) {
        startTimer();
        isTimerOn = true;
      }

      totalLeters = 1;
      target.visited = true;
      target.letterNumber = 1;
      current = target;
      resultWordArr.push(target.textContent);
      wordDisplayEl.textContent = resultWordArr.join("");
    }
  });
}

function handleTouchmove(e) {
  let target = null;
  lettersEl.forEach((el) => {
    if (
      e.changedTouches[0].clientX > el.offsetLeft - fault &&
      e.changedTouches[0].clientX < el.offsetLeft + el.offsetWidth + fault &&
      e.changedTouches[0].clientY > el.offsetTop + headerHeight - fault &&
      e.changedTouches[0].clientY <
        el.offsetTop + headerHeight + el.offsetHeight + fault
    ) {
      target = el;

      if (!target.visited) {
        target.parentNode.classList.add("active-letter");

        target.visited = true;
        current = target;
        totalLeters += 1;
        target.letterNumber = totalLeters;

        wordDisplayEl.style.fontSize = Number(currentFontSize - 1) + "px";
        currentFontSize -= 1;

        resultWordArr.push(target.textContent);
        wordDisplayEl.textContent = resultWordArr.join("");
      } else {
        if (target.letterNumber === totalLeters - 1) {
          wordDisplayEl.style.fontSize = Number(currentFontSize + 1) + "px";
          currentFontSize += 1;

          current.parentNode.classList.remove("active-letter");
          totalLeters -= 1;
          current.visited = false;
          current = target;
          resultWordArr.pop();
          wordDisplayEl.textContent = resultWordArr.join("");
        }
      }
    }
  });
}

function handleTouchend(e) {
  resultWordArr = [];
  lettersEl.forEach((el, index) => {
    if (index === x2 - 1 && el.letterNumber !== 0) {
      score = score + 2 * el.letterNumber;
    } else {
      if (index === x3 - 1 && el.letterNumber !== 0) {
        score = score + 3 * el.letterNumber;
      } else {
        if (index === w2 - 1 && el.letterNumber !== 0) {
          mn = mn * 2;
          score = score + el.letterNumber;
        } else {
          if (index === w3 - 1 && el.letterNumber !== 0) {
            mn = mn * 3;
            score = score + el.letterNumber;
          } else {
            if (el.letterNumber !== 0) {
              score = score + el.letterNumber;
            }
          }
        }
      }
    }
    el.parentNode.classList.remove("active-letter");
    el.visited = false;
    el.letterNumber = 0;
  });

  switch (totalLeters) {
    case 3:
      words = words3;
      break;

    case 4:
      words = words4;
      break;

    case 5:
      words = words5;
      break;

    case 6:
      words = words6;
      break;
  }

  if (
    words.includes(wordDisplayEl.textContent.toLocaleLowerCase()) &&
    !selectedWords.includes(wordDisplayEl.textContent)
  ) {
    selectedWords.push(wordDisplayEl.textContent);
    score = score * mn;
    totalScore += score;

    currentScoreEl.textContent = score;
    totalScoreEl.textContent = totalScore;
    wordsCountEl.textContent = selectedWords.length;

    currentScoreEl.style.top = "0px";
    setTimeout(function () {
      currentScoreEl.style.top = "-100px";
    }, 1000);
  }

  mn = 1;
  score = 0;
  totalLeters = 0;
  currentFontSize = initFontSize;
}

function handleMousedown(e) {
  e.preventDefault();

  let target = null;

  lettersEl.forEach((el) => {
    if (
      e.clientX > el.offsetLeft - fault &&
      e.clientX < el.offsetLeft + el.offsetWidth + fault &&
      e.clientY > el.offsetTop + headerHeight - fault &&
      e.clientY < el.offsetTop + headerHeight + el.offsetHeight + fault
    ) {
      target = el;
      target.parentNode.classList.add("active-letter");

      if (!isTimerOn) {
        startTimer();
        isTimerOn = true;
      }

      isMouseClicked = true;
      totalLeters = 1;
      target.visited = true;
      target.letterNumber = 1;
      current = target;
      resultWordArr.push(target.textContent);
      wordDisplayEl.textContent = resultWordArr.join("");
    }
  });
}

function handleMousemove(e) {
  if (!isMouseClicked) {
    return;
  }

  let target = null;
  lettersEl.forEach((el) => {
    if (
      e.clientX > el.offsetLeft - fault &&
      e.clientX < el.offsetLeft + el.offsetWidth + fault &&
      e.clientY > el.offsetTop + headerHeight - fault &&
      e.clientY < el.offsetTop + headerHeight + el.offsetHeight + fault
    ) {
      target = el;

      if (!target.visited) {
        target.parentNode.classList.add("active-letter");

        wordDisplayEl.style.fontSize = Number(currentFontSize - 1) + "px";
        currentFontSize -= 1;

        target.visited = true;
        current = target;
        totalLeters += 1;
        target.letterNumber = totalLeters;
        resultWordArr.push(target.textContent);
        wordDisplayEl.textContent = resultWordArr.join("");
      } else {
        if (target.letterNumber === totalLeters - 1) {
          wordDisplayEl.style.fontSize = Number(currentFontSize + 1) + "px";
          currentFontSize += 1;

          current.parentNode.classList.remove("active-letter");
          totalLeters -= 1;
          current.visited = false;
          current = target;
          resultWordArr.pop();
          wordDisplayEl.textContent = resultWordArr.join("");
        }
      }
    }
  });
}

function handleMouseup(e) {
  isMouseClicked = false;

  resultWordArr = [];

  lettersEl.forEach((el, index) => {
    if (index === x2 - 1 && el.letterNumber !== 0) {
      score = score + 2 * el.letterNumber;
    } else {
      if (index === x3 - 1 && el.letterNumber !== 0) {
        score = score + 3 * el.letterNumber;
      } else {
        if (index === w2 - 1 && el.letterNumber !== 0) {
          mn = mn * 2;
          score = score + el.letterNumber;
        } else {
          if (index === w3 - 1 && el.letterNumber !== 0) {
            mn = mn * 3;
            score = score + el.letterNumber;
          } else {
            if (el.letterNumber !== 0) {
              score = score + el.letterNumber;
            }
          }
        }
      }
    }
    el.parentNode.classList.remove("active-letter");
    el.visited = false;
    el.letterNumber = 0;
  });

  switch (totalLeters) {
    case 3:
      words = words3;
      break;

    case 4:
      words = words4;
      break;

    case 5:
      words = words5;
      break;

    case 6:
      words = words6;
      break;
  }

  if (
    words.includes(wordDisplayEl.textContent.toLocaleLowerCase()) &&
    !selectedWords.includes(wordDisplayEl.textContent)
  ) {
    selectedWords.push(wordDisplayEl.textContent);
    score = score * mn;
    totalScore += score;

    currentScoreEl.textContent = score;
    totalScoreEl.textContent = totalScore;
    wordsCountEl.textContent = selectedWords.length;

    currentScoreEl.style.top = "0px";
    setTimeout(function () {
      currentScoreEl.style.top = "-100px";
    }, 1000);
  }

  mn = 1;
  score = 0;
  totalLeters = 0;
  currentFontSize = initFontSize;
  // wordDisplayEl.style.fontSize = initFontSize + 'px';
}

function handleClick(e) {
  isTimerOn = false;
  selectedWords = [];

  timer.textContent = "02:00";
  totalScoreEl.textContent = "0";
  currentScoreEl.textContent = "0";
  wordsCountEl.textContent = "0";
  wordDisplayEl.textContent = "";

  clearTimeout(timerFunc);
  fillRandomLetters();
  renderBonusLetters();
}

function generateBonusLetters() {
  w3 = getRandom(1, 25);
  w2 = getRandom(1, 25);
  while (w2 == w3) {
    w2 = getRandom(1, 25);
  }
  x3 = getRandom(1, 25);
  while (x3 == w3 || x3 == w2) {
    x3 = getRandom(1, 25);
  }
  x2 = getRandom(1, 25);
  while (x2 == w3 || x2 == w2 || x2 == x3) {
    x2 = getRandom(1, 25);
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillRandomLetters() {
  lettersEl.forEach((el) => {
    el.textContent = lettersRandom[getRandom(1, lettersRandom.length - 1)];
    el.letterNumber = 0;
  });
}

function renderBonusLetters() {
  generateBonusLetters();

  let canvas = document.querySelector(".canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 520, 520);

    //бонуси
    {
      //трикутники
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = -2;
      ctx.shadowBlur = 3;
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.fillStyle = "white";

      //w3
      ctx.fillStyle = "darkviolet";
      ctx.beginPath();
      ctx.moveTo(zm + ((w3 - 1) % 5) * d, c + (((w3 - 1) / 5) | 0) * d);
      ctx.lineTo(c + ((w3 - 1) % 5) * d, d - zm + (((w3 - 1) / 5) | 0) * d);
      ctx.lineTo(zm + ((w3 - 1) % 5) * d, d - zm + (((w3 - 1) / 5) | 0) * d);
      ctx.lineTo(zm + ((w3 - 1) % 5) * d, c + (((w3 - 1) / 5) | 0) * d);
      ctx.fill();

      //w2
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(zm + ((w2 - 1) % 5) * d, c + (((w2 - 1) / 5) | 0) * d);
      ctx.lineTo(c + ((w2 - 1) % 5) * d, d - zm + (((w2 - 1) / 5) | 0) * d);
      ctx.lineTo(zm + ((w2 - 1) % 5) * d, d - zm + (((w2 - 1) / 5) | 0) * d);
      ctx.lineTo(zm + ((w2 - 1) % 5) * d, c + (((w2 - 1) / 5) | 0) * d);
      ctx.fill();

      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;

      //x3
      ctx.fillStyle = "darkviolet";
      ctx.beginPath();
      ctx.moveTo(zm + ((x3 - 1) % 5) * d, c + (((x3 - 1) / 5) | 0) * d);
      ctx.lineTo(c + ((x3 - 1) % 5) * d, zm + (((x3 - 1) / 5) | 0) * d);
      ctx.lineTo(zm + ((x3 - 1) % 5) * d, zm + (((x3 - 1) / 5) | 0) * d);
      ctx.lineTo(zm + ((x3 - 1) % 5) * d, c + (((x3 - 1) / 5) | 0) * d);
      ctx.fill();

      //x2
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(zm + ((x2 - 1) % 5) * d, c + (((x2 - 1) / 5) | 0) * d);
      ctx.lineTo(c + ((x2 - 1) % 5) * d, zm + (((x2 - 1) / 5) | 0) * d);
      ctx.lineTo(zm + ((x2 - 1) % 5) * d, zm + (((x2 - 1) / 5) | 0) * d);
      ctx.lineTo(zm + ((x2 - 1) % 5) * d, c + (((x2 - 1) / 5) | 0) * d);
      ctx.fill();

      //букви
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 0;
      ctx.font = " 20px Arial";
      ctx.fillStyle = "white";

      //w3
      ctx.fillText(
        "w3",
        5 + ((w3 - 1) % 5) * d,
        d - 7 + (((w3 - 1) / 5) | 0) * d
      );

      //w2
      ctx.fillText(
        "w2",
        5 + ((w2 - 1) % 5) * d,
        d - 7 + (((w2 - 1) / 5) | 0) * d
      );

      //x3
      ctx.fillText("x3", 5 + ((x3 - 1) % 5) * d, 20 + (((x3 - 1) / 5) | 0) * d);

      //x2
      ctx.fillText("x2", 5 + ((x2 - 1) % 5) * d, 20 + (((x2 - 1) / 5) | 0) * d);
    }
  }
}

function startTimer() {
  let time = timer.innerHTML;
  let arr = time.split(":");
  let m = arr[0];
  let s = arr[1];

  if (s == 0) {
    if (m == 0) {
      alert("Ви набрали: " + totalScoreEl.textContent);
      window.location.reload();
      return;
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 59;
  } else s--;
  if (s < 10) s = "0" + s;
  timer.innerHTML = m + ":" + s;
  timerFunc = setTimeout(startTimer, 1000);
}

fillRandomLetters();

renderBonusLetters();
