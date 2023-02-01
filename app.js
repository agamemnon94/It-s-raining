
let body = document.querySelector('body');



setInterval(rainFall, 10);

// let main = document.querySelector('main');

function rainFall() {

  let waterDrop = document.createElement('i');
  // let waterDrop = document.createElement('img');

  waterDrop.classList.add('fa-solid');
  waterDrop.classList.add('fa-droplet');
  // waterDrop.classList.add('drop');
  // waterDrop.src = '/assets/img/Tennis_ball_3.svg.png';

  waterDrop.style.fontSize = Math.random() * 7 + 'px';
  // waterDrop.style.width = Math.random() * 10 + 'px';
  // waterDrop.style.height = Math.random() * 50 + 'px';
  waterDrop.style.animationDuration = Math.random() * 2 + 's';
  waterDrop.style.opacity = Math.random() + 0.3;
  waterDrop.style.left = Math.random() * window.innerWidth + 'px';

  body.appendChild(waterDrop);

  setTimeout(() => {
    waterDrop.remove();
  }, 2000)
}
console.log(body);