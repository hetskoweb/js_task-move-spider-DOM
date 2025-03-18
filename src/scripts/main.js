'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // write code here
  const wallSize = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  const x = e.clientX - wallSize.left - spiderSize.width / 2;
  const y = e.clientY - wallSize.top - spiderSize.height / 2;

  spider.style.position = 'absolute';
  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
