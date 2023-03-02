// Vars
const rocket = document.querySelector('.rocket');
const bullet = document.querySelector('.bullet');
const cursor = document.querySelector('.cursor');
let finished = false;
let xAxis = 0;
let yAxis = 0;

// Events & Functions 
document.addEventListener('keydown', (e) => {
  //TODO Arrow Right
  if(e.code == "ArrowRight") {
    xAxis++;
    rocket.style.left = `${xAxis * 2 + 50}%`;
    bullet.style.transition = "0.3s ease-out";
    bullet.style.left = `${xAxis * 2 + 50}%`;
  //TODO Arrow Left
  } else if(e.code == "ArrowLeft") {
    xAxis--;
    rocket.style.left = `${xAxis * 2 + 50}%`;
    bullet.style.transition = "0.3s ease-out";
    bullet.style.left = `${xAxis * 2 + 50}%`;
  //TODO Arrow Up
  } else if(e.code == "ArrowUp") {
    //! Bullet animation
    if(bullet.style.bottom === "100%") {
      bullet.style.transition = "0s";
      bullet.style.bottom = "15%";
    } else {
      bullet.style.transition = "0.3s ease-out";
    }
    //! Bullet & Rocket Style
    yAxis++;
    rocket.style.bottom = `${yAxis * 2 + 2}rem`;
    bullet.style.bottom = `${yAxis * 2 + 6}rem`;
  //TODO Arrow Down
  } else if(e.code == "ArrowDown") {
    //! Bullet animation
    if(bullet.style.bottom === "100%") {
      bullet.style.transition = "0s";
      bullet.style.bottom = "15%";
    } else {
      bullet.style.transition = "0.3s ease-out";
    }
    //! Bullet & Rocket Style
    yAxis--;
    rocket.style.bottom = `${yAxis * 2 + 2}rem`;
    bullet.style.bottom = `${yAxis * 2 + 6}rem`;
  //TODO Space
  } else if(e.code == "Space") {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    //! Bullet Firing
    bullet.style.transition = "0.3s ease-out";
    bullet.style.bottom = "100%";
  }
});

bullet.addEventListener('transitionend', () => {
  bullet.style.transition = "0s";
  bullet.style.bottom = `${yAxis * 2 + 6}rem`;
});

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`
  cursor.style.top = `${e.clientY}px`
})