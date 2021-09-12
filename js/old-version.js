var letters = [
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'О',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'Е',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'А',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'И',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Н',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'Т',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'С',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'Р',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'В',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'Л',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'К',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'М',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'Д',
  'П',
  'П',
  'П',
  'П',
  'П',
  'П',
  'П',
  'П',
  'П',
  'П',
  'П',
  'П',
  'П',
  'П',
  'У',
  'У',
  'У',
  'У',
  'У',
  'У',
  'У',
  'У',
  'У',
  'У',
  'У',
  'У',
  'Я',
  'Я',
  'Я',
  'Я',
  'Я',
  'Я',
  'Я',
  'Я',
  'Я',
  'Я',
  'Ы',
  'Ы',
  'Ы',
  'Ь',
  'Ь',
  'Ь',
  'Ь',
  'Ь',
  'Ь',
  'Ь',
  'Ь',
  'Ь',
  'Ь',
  'Г',
  'Г',
  'Г',
  'Г',
  'Г',
  'З',
  'З',
  'З',
  'З',
  'З',
  'Б',
  'Б',
  'Б',
  'Б',
  'Ч',
  'Ч',
  'Й',
  'Й',
  'Х',
  'Х',
  'Ж',
  'Ж',
  'Ш',
  'Ш',
  'Ю',
  'Ю',
  'Ю',
  'Ц',
  'Ц',
  'Щ',
  'Щ',
  'Э',
  'Ф',
  'Ф',
];

var pole = [
  [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],

  [
    '',
    'Х',
    'С',
    'Е',
    'К',
    'Н',
    'Н',
    'И',
    'У',
    'А',
    'У',
    'А',
    'К',
    'З',
    'Т',
    'Р',
    'М',
    'Т',
    'А',
    'Е',
    'Ц',
    'О',
    'Р',
    'О',
    'Б',
    'В',
    '',
  ],

  [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
];

var kv = 90; //storona kvadrata
var d = 100; //vidstan mij kvadratamy
var pohybka = 7;
var x0 = 0,
  y0 = 140; //po4atok pola z bykvamu
var x1, x2, y1, y2, x1p, x2p, y1p, y2p;
var knbs = 0,
  ipot = 0,
  k = 1,
  mn = 1,
  sum = 0;
var startx = 15,
  starty = 15; //pochatkove rozmishchennjakv z bukvamy na poli
var ismousedown = false;
var block = true;
var timeron = true;
var peremen;
var pshryft;
var pshryft1 = 49; //rozmir bukv na poli
var p = []; //1..25 boolean
var b = [],
  nbs = []; //1..25 integer
var nabrani = [];

for (let i = 1; i < 26; i++) {
  p[i] = true;
  nbs[i] = 0;
}
//for (let i = 1; i < 26; i++ ){nb[i]=1;	nbs[i]=0;p[i]=true}
//nbs[0]=0

//pot = getElementById('potochni')

function isContained(m, e) {
  var e = e || window.event;
  var c = /(click)|(mousedown)|(mouseup)/i.test(e.type)
    ? e.target
    : e.relatedTarget || (e.type == 'mouseover' ? e.fromElement : e.toElement);
  while (c && c != m)
    try {
      c = c.parentNode;
    } catch (e) {
      c = m;
    }
  if (c == m) return true;
  else return false;
}

function startTimer() {
  var my_timer = document.getElementById('my_timer');
  var time = my_timer.innerHTML;
  var arr = time.split(':');
  var m = arr[0];
  var s = arr[1];

  if (s == 0) {
    if (m == 0) {
      alert('Ви набрали: ' + zagalni.textContent);
      window.location.reload();
      return;
    }
    m--;
    if (m < 10) m = '0' + m;
    s = 59;
  } else s--;
  if (s < 10) s = '0' + s;
  document.getElementById('my_timer').innerHTML = m + ':' + s;
  peremen = setTimeout(startTimer, 1000);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

w3 = getRandom(1, 25);
w2 = getRandom(1, 25);
while (w2 == w3) {
  w2 = getRandom(1, 25);
}
x3 = getRandom(1, 25);
while (x3 == w3 || x3 == w2) {
  x3 = getRandom(1, 25);
}
xx2 = getRandom(1, 25);
while (xx2 == w3 || xx2 == w2 || xx2 == x3) {
  xx2 = getRandom(1, 25);
}

for (let j = 1; j < 26; j++) {
  xx = getRandom(1, letters.length - 1);
  pole[1][j] = letters[xx];
}

function drawstart() {
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.fillStyle = 'white';
    for (let i = 1; i < 6; i++) {
      for (j = 1; j < 6; j++) {
        ctx.fillRect(startx + (j - 1) * d, starty + (i - 1) * d, kv, kv);
      }
    }
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.font = ' 46px Arial';
    ctx.fillStyle = 'black';
    for (let i = 1; i < 6; i++) {
      for (j = 1; j < 6; j++) {
        ctx.fillText(
          pole[1][(i - 1) * 5 + j],
          startx + 30 + (j - 1) * d,
          starty + 60 + (i - 1) * d,
        );
      }
    }
    //bonusy
    {
      //w3
      ctx.fillStyle = 'darkviolet';
      ctx.beginPath();
      ctx.moveTo(
        startx + ((w3 - 1) % 5) * d,
        starty + 40 + (((w3 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + 50 + ((w3 - 1) % 5) * d,
        starty + kv + (((w3 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + ((w3 - 1) % 5) * d,
        starty + kv + (((w3 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + ((w3 - 1) % 5) * d,
        starty + 40 + (((w3 - 1) / 5) | 0) * d,
      );
      ctx.fill();
      ctx.font = ' 20px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(
        'w3',
        startx + 3 + ((w3 - 1) % 5) * d,
        starty + kv - 5 + (((w3 - 1) / 5) | 0) * d,
      );

      //w2
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.moveTo(
        startx + ((w2 - 1) % 5) * d,
        starty + 40 + (((w2 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + 50 + ((w2 - 1) % 5) * d,
        starty + kv + (((w2 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + ((w2 - 1) % 5) * d,
        starty + kv + (((w2 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + ((w2 - 1) % 5) * d,
        starty + 40 + (((w2 - 1) / 5) | 0) * d,
      );
      ctx.fill();
      ctx.font = ' 20px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(
        'w2',
        startx + 3 + ((w2 - 1) % 5) * d,
        starty + kv - 5 + (((w2 - 1) / 5) | 0) * d,
      );

      //x3
      ctx.fillStyle = 'darkviolet';
      ctx.beginPath();
      ctx.moveTo(
        startx + ((x3 - 1) % 5) * d,
        starty + 50 + (((x3 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + 50 + ((x3 - 1) % 5) * d,
        starty + (((x3 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + ((x3 - 1) % 5) * d,
        starty + (((x3 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + ((x3 - 1) % 5) * d,
        starty + 50 + (((x3 - 1) / 5) | 0) * d,
      );
      ctx.fill();
      ctx.font = ' 20px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(
        'x3',
        startx + 3 + ((x3 - 1) % 5) * d,
        starty + 20 + (((x3 - 1) / 5) | 0) * d,
      );

      //x2
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.moveTo(
        startx + ((xx2 - 1) % 5) * d,
        starty + 50 + (((xx2 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + 50 + ((xx2 - 1) % 5) * d,
        starty + (((xx2 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + ((xx2 - 1) % 5) * d,
        starty + (((xx2 - 1) / 5) | 0) * d,
      );
      ctx.lineTo(
        startx + ((xx2 - 1) % 5) * d,
        starty + 50 + (((xx2 - 1) / 5) | 0) * d,
      );
      ctx.fill();
      ctx.font = ' 20px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(
        'x2',
        startx + 3 + ((xx2 - 1) % 5) * d,
        starty + 20 + (((xx2 - 1) / 5) | 0) * d,
      );
    }
  }
}

window.addEventListener(
  'load',
  function () {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
    }
    drawstart();

    document.body.addEventListener(
      'mousedown',
      function (e) {
        if (block) {
          display.value = '';
          if (
            e.clientX > 0 &&
            e.clientX < 520 &&
            e.clientY > x0 &&
            e.clientY < 520 + y0 &&
            timeron == true
          ) {
            timeron = false;
            startTimer();
          }

          //potochni.textContent="0"
          pshryft = pshryft1;
          display.style.fontSize = Number(pshryft) + 'px';

          for (let i = 1; i < 26; i++) {
            x1 = startx + ((i - 1) % 5) * d;
            x2 = startx + kv + ((i - 1) % 5) * d;
            y1 = starty + (((i - 1) / 5) | 0) * d;
            y2 = starty + kv + (((i - 1) / 5) | 0) * d;
            if (
              e.clientX - x0 > x1 &&
              e.clientX - x0 < x2 &&
              e.clientY - y0 > y1 &&
              e.clientY - y0 < y2 &&
              p[i]
            ) {
              p[i] = false;
              b[k] = i;
              k++;
              knbs++;
              nbs[knbs] = i;
              ipot = i;

              ctx.fillStyle = 'rgb(82, 124, 238)';
              ctx.fillRect(x1, y1, kv, kv);
              ctx.font = ' 46px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(pole[1][i], x1 + 30, y1 + 60);
              //bonusy
              {
                //w3
                ctx.fillStyle = 'darkviolet';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((w3 - 1) % 5) * d,
                  starty + 40 + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((w3 - 1) % 5) * d,
                  starty + kv + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w3 - 1) % 5) * d,
                  starty + kv + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w3 - 1) % 5) * d,
                  starty + 40 + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'w3',
                  startx + 3 + ((w3 - 1) % 5) * d,
                  starty + kv - 5 + (((w3 - 1) / 5) | 0) * d,
                );

                //w2
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((w2 - 1) % 5) * d,
                  starty + 40 + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((w2 - 1) % 5) * d,
                  starty + kv + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w2 - 1) % 5) * d,
                  starty + kv + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w2 - 1) % 5) * d,
                  starty + 40 + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'w2',
                  startx + 3 + ((w2 - 1) % 5) * d,
                  starty + kv - 5 + (((w2 - 1) / 5) | 0) * d,
                );

                //x3
                ctx.fillStyle = 'darkviolet';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((x3 - 1) % 5) * d,
                  starty + 50 + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((x3 - 1) % 5) * d,
                  starty + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((x3 - 1) % 5) * d,
                  starty + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((x3 - 1) % 5) * d,
                  starty + 50 + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'x3',
                  startx + 3 + ((x3 - 1) % 5) * d,
                  starty + 20 + (((x3 - 1) / 5) | 0) * d,
                );

                //x2
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((xx2 - 1) % 5) * d,
                  starty + 50 + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((xx2 - 1) % 5) * d,
                  starty + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((xx2 - 1) % 5) * d,
                  starty + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((xx2 - 1) % 5) * d,
                  starty + 50 + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'x2',
                  startx + 3 + ((xx2 - 1) % 5) * d,
                  starty + 20 + (((xx2 - 1) / 5) | 0) * d,
                );
              }

              display.textContent = pole[1][i];
            }
          }
          ismousedown = true;
          e.preventDefault(); // prevent default click behavior
        }
      },
      false,
    );

    window.addEventListener(
      'touchstart',
      function (e) {
        ts = e.changedTouches[0];
        block = false;

        if (
          ts.clientX > 0 &&
          ts.clientX < 520 &&
          ts.clientY > x0 &&
          ts.clientY < 520 + y0 &&
          timeron == true
        ) {
          timeron = false;
          startTimer();
        }
        display.textContent = '';
        //potochni.textContent="0"
        pshryft = pshryft1;
        display.style.fontSize = Number(pshryft) + 'px';

        for (let i = 1; i < 26; i++) {
          x1 = startx + ((i - 1) % 5) * d;
          x2 = startx + kv + ((i - 1) % 5) * d;
          y1 = starty + (((i - 1) / 5) | 0) * d;
          y2 = starty + kv + (((i - 1) / 5) | 0) * d;
          if (
            ts.clientX - x0 > x1 &&
            ts.clientX - x0 < x2 &&
            ts.clientY - y0 > y1 &&
            ts.clientY - y0 < y2 &&
            p[i]
          ) {
            p[i] = false;
            b[k] = i;
            k++;
            knbs++;
            nbs[knbs] = i;
            ipot = i;

            ctx.fillStyle = 'rgb(82, 124, 238)';
            ctx.fillRect(x1, y1, kv, kv);
            ctx.font = ' 46px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(pole[1][i], x1 + 30, y1 + 60);
            //bonusy
            {
              //w3
              ctx.fillStyle = 'darkviolet';
              ctx.beginPath();
              ctx.moveTo(
                startx + ((w3 - 1) % 5) * d,
                starty + 40 + (((w3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + 50 + ((w3 - 1) % 5) * d,
                starty + kv + (((w3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((w3 - 1) % 5) * d,
                starty + kv + (((w3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((w3 - 1) % 5) * d,
                starty + 40 + (((w3 - 1) / 5) | 0) * d,
              );
              ctx.fill();
              ctx.font = ' 20px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(
                'w3',
                startx + 3 + ((w3 - 1) % 5) * d,
                starty + kv - 5 + (((w3 - 1) / 5) | 0) * d,
              );

              //w2
              ctx.fillStyle = 'red';
              ctx.beginPath();
              ctx.moveTo(
                startx + ((w2 - 1) % 5) * d,
                starty + 40 + (((w2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + 50 + ((w2 - 1) % 5) * d,
                starty + kv + (((w2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((w2 - 1) % 5) * d,
                starty + kv + (((w2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((w2 - 1) % 5) * d,
                starty + 40 + (((w2 - 1) / 5) | 0) * d,
              );
              ctx.fill();
              ctx.font = ' 20px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(
                'w2',
                startx + 3 + ((w2 - 1) % 5) * d,
                starty + kv - 5 + (((w2 - 1) / 5) | 0) * d,
              );

              //x3
              ctx.fillStyle = 'darkviolet';
              ctx.beginPath();
              ctx.moveTo(
                startx + ((x3 - 1) % 5) * d,
                starty + 50 + (((x3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + 50 + ((x3 - 1) % 5) * d,
                starty + (((x3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((x3 - 1) % 5) * d,
                starty + (((x3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((x3 - 1) % 5) * d,
                starty + 50 + (((x3 - 1) / 5) | 0) * d,
              );
              ctx.fill();
              ctx.font = ' 20px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(
                'x3',
                startx + 3 + ((x3 - 1) % 5) * d,
                starty + 20 + (((x3 - 1) / 5) | 0) * d,
              );

              //x2
              ctx.fillStyle = 'red';
              ctx.beginPath();
              ctx.moveTo(
                startx + ((xx2 - 1) % 5) * d,
                starty + 50 + (((xx2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + 50 + ((xx2 - 1) % 5) * d,
                starty + (((xx2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((xx2 - 1) % 5) * d,
                starty + (((xx2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((xx2 - 1) % 5) * d,
                starty + 50 + (((xx2 - 1) / 5) | 0) * d,
              );
              ctx.fill();
              ctx.font = ' 20px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(
                'x2',
                startx + 3 + ((xx2 - 1) % 5) * d,
                starty + 20 + (((xx2 - 1) / 5) | 0) * d,
              );
            }

            display.textContent = pole[1][i];
          }
        }

        // ts.preventDefault() // prevent default click behavior
      },
      false,
    );

    document.body.addEventListener(
      'mousemove',
      function (e) {
        if (ismousedown) {
          for (let i = 1; i < 26; i++) {
            x1 = startx + ((i - 1) % 5) * d;
            x2 = startx + kv + ((i - 1) % 5) * d;
            y1 = starty + (((i - 1) / 5) | 0) * d;
            y2 = starty + kv + (((i - 1) / 5) | 0) * d;
            if (
              e.clientX - x0 - pohybka > x1 &&
              e.clientX - x0 + pohybka < x2 &&
              e.clientY - y0 - pohybka > y1 &&
              e.clientY - y0 + pohybka < y2 &&
              p[i]
            ) {
              p[i] = false;
              b[k] = i;
              k++;
              knbs++;
              nbs[knbs] = i;
              ipot = i;
              display.style.fontSize = Number(pshryft - 1) + 'px';
              pshryft--;

              ctx.fillStyle = 'rgb(82, 124, 238)';
              ctx.fillRect(x1, y1, kv, kv);
              ctx.font = ' 46px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(pole[1][i], x1 + 30, y1 + 60);
              //bonusy
              {
                //w3
                ctx.fillStyle = 'darkviolet';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((w3 - 1) % 5) * d,
                  starty + 40 + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((w3 - 1) % 5) * d,
                  starty + kv + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w3 - 1) % 5) * d,
                  starty + kv + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w3 - 1) % 5) * d,
                  starty + 40 + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'w3',
                  startx + 3 + ((w3 - 1) % 5) * d,
                  starty + kv - 5 + (((w3 - 1) / 5) | 0) * d,
                );

                //w2
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((w2 - 1) % 5) * d,
                  starty + 40 + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((w2 - 1) % 5) * d,
                  starty + kv + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w2 - 1) % 5) * d,
                  starty + kv + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w2 - 1) % 5) * d,
                  starty + 40 + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'w2',
                  startx + 3 + ((w2 - 1) % 5) * d,
                  starty + kv - 5 + (((w2 - 1) / 5) | 0) * d,
                );

                //x3
                ctx.fillStyle = 'darkviolet';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((x3 - 1) % 5) * d,
                  starty + 50 + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((x3 - 1) % 5) * d,
                  starty + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((x3 - 1) % 5) * d,
                  starty + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((x3 - 1) % 5) * d,
                  starty + 50 + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'x3',
                  startx + 3 + ((x3 - 1) % 5) * d,
                  starty + 20 + (((x3 - 1) / 5) | 0) * d,
                );

                //x2
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((xx2 - 1) % 5) * d,
                  starty + 50 + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((xx2 - 1) % 5) * d,
                  starty + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((xx2 - 1) % 5) * d,
                  starty + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((xx2 - 1) % 5) * d,
                  starty + 50 + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'x2',
                  startx + 3 + ((xx2 - 1) % 5) * d,
                  starty + 20 + (((xx2 - 1) / 5) | 0) * d,
                );
              }

              display.textContent += pole[1][i];
              nbs[knbs] = i;
              x1p = x1;
              x2p = x2;
              y1p = y1;
              y2p = y2;
            } else {
              if (
                e.clientX - x0 - pohybka > x1 &&
                e.clientX - x0 + pohybka < x2 &&
                e.clientY - y0 - pohybka > y1 &&
                e.clientY - y0 + pohybka < y2 &&
                nbs[knbs - 1] == i
              ) {
                ctx.fillStyle = 'white';
                ctx.fillRect(x1p, y1p, kv, kv);
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
                ctx.font = ' 46px Arial';
                ctx.fillStyle = 'black';

                //bonusy
                {
                  //w3
                  ctx.fillStyle = 'darkviolet';
                  ctx.beginPath();
                  ctx.moveTo(
                    startx + ((w3 - 1) % 5) * d,
                    starty + 40 + (((w3 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + 50 + ((w3 - 1) % 5) * d,
                    starty + kv + (((w3 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + ((w3 - 1) % 5) * d,
                    starty + kv + (((w3 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + ((w3 - 1) % 5) * d,
                    starty + 40 + (((w3 - 1) / 5) | 0) * d,
                  );
                  ctx.fill();
                  ctx.font = ' 20px Arial';
                  ctx.fillStyle = 'white';
                  ctx.fillText(
                    'w3',
                    startx + 3 + ((w3 - 1) % 5) * d,
                    starty + kv - 5 + (((w3 - 1) / 5) | 0) * d,
                  );

                  //w2
                  ctx.fillStyle = 'red';
                  ctx.beginPath();
                  ctx.moveTo(
                    startx + ((w2 - 1) % 5) * d,
                    starty + 40 + (((w2 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + 50 + ((w2 - 1) % 5) * d,
                    starty + kv + (((w2 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + ((w2 - 1) % 5) * d,
                    starty + kv + (((w2 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + ((w2 - 1) % 5) * d,
                    starty + 40 + (((w2 - 1) / 5) | 0) * d,
                  );
                  ctx.fill();
                  ctx.font = ' 20px Arial';
                  ctx.fillStyle = 'white';
                  ctx.fillText(
                    'w2',
                    startx + 3 + ((w2 - 1) % 5) * d,
                    starty + kv - 5 + (((w2 - 1) / 5) | 0) * d,
                  );

                  //x3
                  ctx.fillStyle = 'darkviolet';
                  ctx.beginPath();
                  ctx.moveTo(
                    startx + ((x3 - 1) % 5) * d,
                    starty + 50 + (((x3 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + 50 + ((x3 - 1) % 5) * d,
                    starty + (((x3 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + ((x3 - 1) % 5) * d,
                    starty + (((x3 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + ((x3 - 1) % 5) * d,
                    starty + 50 + (((x3 - 1) / 5) | 0) * d,
                  );
                  ctx.fill();
                  ctx.font = ' 20px Arial';
                  ctx.fillStyle = 'white';
                  ctx.fillText(
                    'x3',
                    startx + 3 + ((x3 - 1) % 5) * d,
                    starty + 20 + (((x3 - 1) / 5) | 0) * d,
                  );

                  //x2
                  ctx.fillStyle = 'red';
                  ctx.beginPath();
                  ctx.moveTo(
                    startx + ((xx2 - 1) % 5) * d,
                    starty + 50 + (((xx2 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + 50 + ((xx2 - 1) % 5) * d,
                    starty + (((xx2 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + ((xx2 - 1) % 5) * d,
                    starty + (((xx2 - 1) / 5) | 0) * d,
                  );
                  ctx.lineTo(
                    startx + ((xx2 - 1) % 5) * d,
                    starty + 50 + (((xx2 - 1) / 5) | 0) * d,
                  );
                  ctx.fill();
                  ctx.font = ' 20px Arial';
                  ctx.fillStyle = 'white';
                  ctx.fillText(
                    'x2',
                    startx + 3 + ((xx2 - 1) % 5) * d,
                    starty + 20 + (((xx2 - 1) / 5) | 0) * d,
                  );
                }

                ctx.font = ' 46px Arial';
                ctx.fillStyle = 'black';
                ctx.fillText(pole[1][ipot], x1p + 30, y1p + 60);

                x1p = x1;
                x2p = x2;
                y1p = y1;
                y2p = y2;

                p[nbs[knbs]] = true;
                knbs--;
                k--;
                ipot = nbs[knbs];
                display.style.fontSize = Number(pshryft + 1) + 'px';
                pshryft++;
                display.textContent = display.textContent.slice(
                  0,
                  display.textContent.length - 1,
                );
              }
            }
          }
          e.preventDefault();
        }
      },
      false,
    );

    window.addEventListener(
      'touchmove',
      function (e) {
        tm = e.changedTouches[0];

        for (let i = 1; i < 26; i++) {
          x1 = startx + ((i - 1) % 5) * d;
          x2 = startx + kv + ((i - 1) % 5) * d;
          y1 = starty + (((i - 1) / 5) | 0) * d;
          y2 = starty + kv + (((i - 1) / 5) | 0) * d;
          if (
            tm.clientX - x0 - pohybka > x1 &&
            tm.clientX - x0 + pohybka < x2 &&
            tm.clientY - y0 - pohybka > y1 &&
            tm.clientY - y0 + pohybka < y2 &&
            p[i]
          ) {
            p[i] = false;
            b[k] = i;
            k++;
            knbs++;
            nbs[knbs] = i;
            ipot = i;
            display.style.fontSize = Number(pshryft - 1) + 'px';
            pshryft--;

            ctx.fillStyle = 'rgb(82, 124, 238)';
            ctx.fillRect(x1, y1, kv, kv);
            ctx.font = ' 46px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(pole[1][i], x1 + 30, y1 + 60);
            //bonusy
            {
              //w3
              ctx.fillStyle = 'darkviolet';
              ctx.beginPath();
              ctx.moveTo(
                startx + ((w3 - 1) % 5) * d,
                starty + 40 + (((w3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + 50 + ((w3 - 1) % 5) * d,
                starty + kv + (((w3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((w3 - 1) % 5) * d,
                starty + kv + (((w3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((w3 - 1) % 5) * d,
                starty + 40 + (((w3 - 1) / 5) | 0) * d,
              );
              ctx.fill();
              ctx.font = ' 20px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(
                'w3',
                startx + 3 + ((w3 - 1) % 5) * d,
                starty + kv - 5 + (((w3 - 1) / 5) | 0) * d,
              );

              //w2
              ctx.fillStyle = 'red';
              ctx.beginPath();
              ctx.moveTo(
                startx + ((w2 - 1) % 5) * d,
                starty + 40 + (((w2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + 50 + ((w2 - 1) % 5) * d,
                starty + kv + (((w2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((w2 - 1) % 5) * d,
                starty + kv + (((w2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((w2 - 1) % 5) * d,
                starty + 40 + (((w2 - 1) / 5) | 0) * d,
              );
              ctx.fill();
              ctx.font = ' 20px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(
                'w2',
                startx + 3 + ((w2 - 1) % 5) * d,
                starty + kv - 5 + (((w2 - 1) / 5) | 0) * d,
              );

              //x3
              ctx.fillStyle = 'darkviolet';
              ctx.beginPath();
              ctx.moveTo(
                startx + ((x3 - 1) % 5) * d,
                starty + 50 + (((x3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + 50 + ((x3 - 1) % 5) * d,
                starty + (((x3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((x3 - 1) % 5) * d,
                starty + (((x3 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((x3 - 1) % 5) * d,
                starty + 50 + (((x3 - 1) / 5) | 0) * d,
              );
              ctx.fill();
              ctx.font = ' 20px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(
                'x3',
                startx + 3 + ((x3 - 1) % 5) * d,
                starty + 20 + (((x3 - 1) / 5) | 0) * d,
              );

              //x2
              ctx.fillStyle = 'red';
              ctx.beginPath();
              ctx.moveTo(
                startx + ((xx2 - 1) % 5) * d,
                starty + 50 + (((xx2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + 50 + ((xx2 - 1) % 5) * d,
                starty + (((xx2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((xx2 - 1) % 5) * d,
                starty + (((xx2 - 1) / 5) | 0) * d,
              );
              ctx.lineTo(
                startx + ((xx2 - 1) % 5) * d,
                starty + 50 + (((xx2 - 1) / 5) | 0) * d,
              );
              ctx.fill();
              ctx.font = ' 20px Arial';
              ctx.fillStyle = 'white';
              ctx.fillText(
                'x2',
                startx + 3 + ((xx2 - 1) % 5) * d,
                starty + 20 + (((xx2 - 1) / 5) | 0) * d,
              );
            }

            display.textContent += pole[1][i];
            nbs[knbs] = i;
            x1p = x1;
            x2p = x2;
            y1p = y1;
            y2p = y2;
          } else {
            if (
              tm.clientX - x0 - pohybka > x1 &&
              tm.clientX - x0 + pohybka < x2 &&
              tm.clientY - y0 - pohybka > y1 &&
              tm.clientY - y0 + pohybka < y2 &&
              nbs[knbs - 1] == i
            ) {
              ctx.fillStyle = 'white';
              ctx.fillRect(x1p, y1p, kv, kv);
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 0;
              ctx.shadowBlur = 0;
              ctx.font = ' 46px Arial';
              ctx.fillStyle = 'black';

              //bonusy
              {
                //w3
                ctx.fillStyle = 'darkviolet';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((w3 - 1) % 5) * d,
                  starty + 40 + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((w3 - 1) % 5) * d,
                  starty + kv + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w3 - 1) % 5) * d,
                  starty + kv + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w3 - 1) % 5) * d,
                  starty + 40 + (((w3 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'w3',
                  startx + 3 + ((w3 - 1) % 5) * d,
                  starty + kv - 5 + (((w3 - 1) / 5) | 0) * d,
                );

                //w2
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((w2 - 1) % 5) * d,
                  starty + 40 + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((w2 - 1) % 5) * d,
                  starty + kv + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w2 - 1) % 5) * d,
                  starty + kv + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((w2 - 1) % 5) * d,
                  starty + 40 + (((w2 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'w2',
                  startx + 3 + ((w2 - 1) % 5) * d,
                  starty + kv - 5 + (((w2 - 1) / 5) | 0) * d,
                );

                //x3
                ctx.fillStyle = 'darkviolet';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((x3 - 1) % 5) * d,
                  starty + 50 + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((x3 - 1) % 5) * d,
                  starty + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((x3 - 1) % 5) * d,
                  starty + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((x3 - 1) % 5) * d,
                  starty + 50 + (((x3 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'x3',
                  startx + 3 + ((x3 - 1) % 5) * d,
                  starty + 20 + (((x3 - 1) / 5) | 0) * d,
                );

                //x2
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.moveTo(
                  startx + ((xx2 - 1) % 5) * d,
                  starty + 50 + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + 50 + ((xx2 - 1) % 5) * d,
                  starty + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((xx2 - 1) % 5) * d,
                  starty + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.lineTo(
                  startx + ((xx2 - 1) % 5) * d,
                  starty + 50 + (((xx2 - 1) / 5) | 0) * d,
                );
                ctx.fill();
                ctx.font = ' 20px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(
                  'x2',
                  startx + 3 + ((xx2 - 1) % 5) * d,
                  starty + 20 + (((xx2 - 1) / 5) | 0) * d,
                );
              }

              ctx.font = ' 46px Arial';
              ctx.fillStyle = 'black';
              ctx.fillText(pole[1][ipot], x1p + 30, y1p + 60);

              x1p = x1;
              x2p = x2;
              y1p = y1;
              y2p = y2;

              p[nbs[knbs]] = true;
              knbs--;
              k--;
              ipot = nbs[knbs];
              display.style.fontSize = Number(pshryft + 1) + 'px';
              pshryft++;
              display.textContent = display.textContent.slice(
                0,
                display.textContent.length - 1,
              );
            }
          }
        }
        // tm.preventDefault()
      },
      false,
    );

    document.body.addEventListener(
      'mouseup',
      function (e) {
        for (let i = 1; i < 26; i++) {
          p[i] = true;
        }
        knbs = 0;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 3;
        ctx.fillStyle = '#a6cef3';
        ctx.fillRect(0, 0, 550, 550);
        ctx.fillStyle = 'white';

        for (let i = 1; i < 6; i++) {
          for (j = 1; j < 6; j++) {
            ctx.fillRect(startx + (j - 1) * d, starty + (i - 1) * d, kv, kv);
          }
        }
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.font = '46px Arial';
        ctx.fillStyle = 'black';
        for (let i = 1; i < 6; i++) {
          for (j = 1; j < 6; j++) {
            ctx.fillText(
              pole[1][(i - 1) * 5 + j],
              startx + 30 + (j - 1) * d,
              starty + 60 + (i - 1) * d,
            );
          }
        }
        //bonusy
        {
          //w3
          ctx.fillStyle = 'darkviolet';
          ctx.beginPath();
          ctx.moveTo(
            startx + ((w3 - 1) % 5) * d,
            starty + 40 + (((w3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + 50 + ((w3 - 1) % 5) * d,
            starty + kv + (((w3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((w3 - 1) % 5) * d,
            starty + kv + (((w3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((w3 - 1) % 5) * d,
            starty + 40 + (((w3 - 1) / 5) | 0) * d,
          );
          ctx.fill();
          ctx.font = ' 20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(
            'w3',
            startx + 3 + ((w3 - 1) % 5) * d,
            starty + kv - 5 + (((w3 - 1) / 5) | 0) * d,
          );

          //w2
          ctx.fillStyle = 'red';
          ctx.beginPath();
          ctx.moveTo(
            startx + ((w2 - 1) % 5) * d,
            starty + 40 + (((w2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + 50 + ((w2 - 1) % 5) * d,
            starty + kv + (((w2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((w2 - 1) % 5) * d,
            starty + kv + (((w2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((w2 - 1) % 5) * d,
            starty + 40 + (((w2 - 1) / 5) | 0) * d,
          );
          ctx.fill();
          ctx.font = ' 20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(
            'w2',
            startx + 3 + ((w2 - 1) % 5) * d,
            starty + kv - 5 + (((w2 - 1) / 5) | 0) * d,
          );

          //x3
          ctx.fillStyle = 'darkviolet';
          ctx.beginPath();
          ctx.moveTo(
            startx + ((x3 - 1) % 5) * d,
            starty + 50 + (((x3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + 50 + ((x3 - 1) % 5) * d,
            starty + (((x3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((x3 - 1) % 5) * d,
            starty + (((x3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((x3 - 1) % 5) * d,
            starty + 50 + (((x3 - 1) / 5) | 0) * d,
          );
          ctx.fill();
          ctx.font = ' 20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(
            'x3',
            startx + 3 + ((x3 - 1) % 5) * d,
            starty + 20 + (((x3 - 1) / 5) | 0) * d,
          );

          //x2
          ctx.fillStyle = 'red';
          ctx.beginPath();
          ctx.moveTo(
            startx + ((xx2 - 1) % 5) * d,
            starty + 50 + (((xx2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + 50 + ((xx2 - 1) % 5) * d,
            starty + (((xx2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((xx2 - 1) % 5) * d,
            starty + (((xx2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((xx2 - 1) % 5) * d,
            starty + 50 + (((xx2 - 1) / 5) | 0) * d,
          );
          ctx.fill();
          ctx.font = ' 20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(
            'x2',
            startx + 3 + ((xx2 - 1) % 5) * d,
            starty + 20 + (((xx2 - 1) / 5) | 0) * d,
          );
        }

        switch (display.textContent.length) {
          case 3:
            for (var i = 1; i < slova3.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova3[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 4; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 4:
            for (var i = 1; i < slova4.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova4[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 5; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 5:
            for (var i = 1; i < slova5.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova5[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 6; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 6:
            for (var i = 1; i < slova6.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova6[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 7; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 7:
            for (var i = 1; i < slova7.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova7[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 8; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 8:
            for (var i = 1; i < slova8.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova8[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 9; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
        }

        ksliv.textContent = nabrani.length;

        if (sum != 0) {
          potochni.style.top = '0px';
          setTimeout(function () {
            potochni.style.top = '-100px';
          }, 1000);
        }

        for (var j = 1; j < 15; j++) {
          b[j] = 0;
        }
        k = 1;
        sum = 0;
        mn = 1;
        ismousedown = false;
        e.preventDefault(); // prevent default click behavior
      },
      false,
    );

    window.addEventListener(
      'touchend',
      function (e) {
        te = e.changedTouches[0];
        for (let i = 1; i < 26; i++) {
          p[i] = true;
        }
        knbs = 0;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 3;
        ctx.fillStyle = '#a6cef3';
        ctx.fillRect(0, 0, 550, 550);
        ctx.fillStyle = 'white';

        for (let i = 1; i < 6; i++) {
          for (j = 1; j < 6; j++) {
            ctx.fillRect(startx + (j - 1) * d, starty + (i - 1) * d, kv, kv);
          }
        }
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.font = '46px Arial';
        ctx.fillStyle = 'black';
        for (let i = 1; i < 6; i++) {
          for (j = 1; j < 6; j++) {
            ctx.fillText(
              pole[1][(i - 1) * 5 + j],
              startx + 30 + (j - 1) * d,
              starty + 60 + (i - 1) * d,
            );
          }
        }
        //bonusy
        {
          //w3
          ctx.fillStyle = 'darkviolet';
          ctx.beginPath();
          ctx.moveTo(
            startx + ((w3 - 1) % 5) * d,
            starty + 40 + (((w3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + 50 + ((w3 - 1) % 5) * d,
            starty + kv + (((w3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((w3 - 1) % 5) * d,
            starty + kv + (((w3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((w3 - 1) % 5) * d,
            starty + 40 + (((w3 - 1) / 5) | 0) * d,
          );
          ctx.fill();
          ctx.font = ' 20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(
            'w3',
            startx + 3 + ((w3 - 1) % 5) * d,
            starty + kv - 5 + (((w3 - 1) / 5) | 0) * d,
          );

          //w2
          ctx.fillStyle = 'red';
          ctx.beginPath();
          ctx.moveTo(
            startx + ((w2 - 1) % 5) * d,
            starty + 40 + (((w2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + 50 + ((w2 - 1) % 5) * d,
            starty + kv + (((w2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((w2 - 1) % 5) * d,
            starty + kv + (((w2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((w2 - 1) % 5) * d,
            starty + 40 + (((w2 - 1) / 5) | 0) * d,
          );
          ctx.fill();
          ctx.font = ' 20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(
            'w2',
            startx + 3 + ((w2 - 1) % 5) * d,
            starty + kv - 5 + (((w2 - 1) / 5) | 0) * d,
          );

          //x3
          ctx.fillStyle = 'darkviolet';
          ctx.beginPath();
          ctx.moveTo(
            startx + ((x3 - 1) % 5) * d,
            starty + 50 + (((x3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + 50 + ((x3 - 1) % 5) * d,
            starty + (((x3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((x3 - 1) % 5) * d,
            starty + (((x3 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((x3 - 1) % 5) * d,
            starty + 50 + (((x3 - 1) / 5) | 0) * d,
          );
          ctx.fill();
          ctx.font = ' 20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(
            'x3',
            startx + 3 + ((x3 - 1) % 5) * d,
            starty + 20 + (((x3 - 1) / 5) | 0) * d,
          );

          //x2
          ctx.fillStyle = 'red';
          ctx.beginPath();
          ctx.moveTo(
            startx + ((xx2 - 1) % 5) * d,
            starty + 50 + (((xx2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + 50 + ((xx2 - 1) % 5) * d,
            starty + (((xx2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((xx2 - 1) % 5) * d,
            starty + (((xx2 - 1) / 5) | 0) * d,
          );
          ctx.lineTo(
            startx + ((xx2 - 1) % 5) * d,
            starty + 50 + (((xx2 - 1) / 5) | 0) * d,
          );
          ctx.fill();
          ctx.font = ' 20px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(
            'x2',
            startx + 3 + ((xx2 - 1) % 5) * d,
            starty + 20 + (((xx2 - 1) / 5) | 0) * d,
          );
        }

        switch (display.textContent.length) {
          case 3:
            for (var i = 1; i < slova3.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova3[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 4; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 4:
            for (var i = 1; i < slova4.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova4[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 5; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 5:
            for (var i = 1; i < slova5.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova5[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 6; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 6:
            for (var i = 1; i < slova6.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova6[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 7; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 7:
            for (var i = 1; i < slova7.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova7[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 8; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
          case 8:
            for (var i = 1; i < slova8.length - 1; i++) {
              if (
                display.textContent.toLowerCase() == slova8[i] &&
                nabrani.includes(display.textContent) == false
              ) {
                for (var j = 1; j < 9; j++) {
                  if (b[j] == xx2) {
                    sum = sum + 2 * j;
                  } else {
                    if (b[j] == x3) {
                      sum = sum + 3 * j;
                    } else {
                      if (b[j] == w2) {
                        mn = mn * 2;
                        sum = sum + j;
                      } else {
                        if (b[j] == w3) {
                          mn = mn * 3;
                          sum = sum + j;
                        } else {
                          sum = sum + j;
                        }
                      }
                    }
                  }
                }
                sum = sum * mn;
                potochni.textContent = sum;
                zagalni.textContent = Number(zagalni.textContent) + sum;
                nabrani.push(display.textContent);
                break;
              }
            }
            break;
        }

        ksliv.textContent = nabrani.length;

        if (sum != 0) {
          potochni.style.top = '0px';
          setTimeout(function () {
            potochni.style.top = '-100px';
          }, 1000);
        }

        for (var j = 1; j < 15; j++) {
          b[j] = 0;
        }
        k = 1;
        sum = 0;
        mn = 1;
        ismousedown = false;
        // te.preventDefault() // prevent default click behavior
      },
      false,
    );
  },
  false,
);

const restart = document.querySelector('#new');

restart.addEventListener('click', event => {
  event.preventDefault();
  clearTimeout(peremen);
  timeron = true;
  my_timer.textContent = '02:00';
  for (i = 1; i < 26; i++) {
    p[i] = true;
  }
  potochni.textContent = '0';
  zagalni.textContent = '0';
  ksliv.textContent = '0';
  display.textContent = '';
  nabrani = [];
  w3 = getRandom(1, 25);
  w2 = getRandom(1, 25);
  while (w2 == w3) {
    w2 = getRandom(1, 25);
  }
  x3 = getRandom(1, 25);
  while (x3 == w3 || x3 == w2) {
    x3 = getRandom(1, 25);
  }
  xx2 = getRandom(1, 25);
  while (xx2 == w3 || xx2 == w2 || xx2 == x3) {
    xx2 = getRandom(1, 25);
  }

  //aa.textContent=''
  for (let j = 1; j < 26; j++) {
    xx = getRandom(1, letters.length - 1);
    pole[1][j] = letters[xx];
    //     aa.textContent+=' '+xx
  }
  drawstart();
});
