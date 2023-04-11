const bubbles = document.querySelector('.bubbles');
for (let i = 0; i < 50; i++) {
   const span = document.createElement('span');
   const size = Math.floor(Math.random() * 15) + 5;
   const duration = Math.floor(Math.random() * 10) + 5;
   span.style.width = size + 'px';
   span.style.height = size + 'px';
   span.style.left = Math.floor(Math.random() * 100) + 'vw';
   span.style.animationDuration = duration + 's';
   bubbles.appendChild(span);
}
