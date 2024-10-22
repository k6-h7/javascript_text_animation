// JavaScript
// console.log('Hello world!');

// フェード
const fade = document.querySelector('.fade');

const fadeKeyFrames = {
    opacity: [0, 1],
}

const fadeOptions = {
    duration: 3000,
    easing: 'ease',
    fill: 'forwards',
}

fade.animate(fadeKeyFrames, fadeOptions);

// 回転
const spin = document.querySelector('.spin');

const spinKeyframes = {
  rotate: ['x 0deg','x 360deg'],
  opacity: [0, 1],
}

const spinOptions = {
  duration: 2000,
  easing: 'ease',
}

spin.animate(spinKeyframes, spinOptions);

spin.animate(spinKeyframes, spinOptions);

// 色の変更
const color = document.querySelector('.color');

const colorKeyframes = {
    backgroundColor: [
        'aquamarine', 'aqua', 'darkturquoise','lightseagreen',
    ]
}

const colorOptions = {
    duration: 5000,
    direction: 'alternate',
    iterations: Infinity,
}

color.animate(colorKeyframes, colorOptions);

// のびる背景
const line = document.querySelector('.line');

const lineKeyframes = {
   width: ['0','100%'],
   color: ['transparent','#000'],
}

const lineOptions = {
    duration: 3000,
    fill: 'forwards',
}

line.animate(lineKeyframes,lineOptions);

// スライドイン
const slide = document.querySelector('.slide-in');

const slideKeyframes = {
  opacity: [0, 1],
  translate: ['0 30px', 0],
};

const slideOptions = {
  duration: 1000,
  fill: 'forwards',
};

slide.animate(slideKeyframes,slideOptions);
