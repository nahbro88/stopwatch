const display = document.querySelector(`.display`);
const toggleBtn = document.querySelector(`.toggle-btn`);
const resetBtn = document.querySelector(`.reset-btn`);

let min = 0;
let sec = 0;
let ms = 0;
let value = false;

let toggle = () => {
  if (value == true) {
    value = false;
    toggleBtn.innerHTML = `<ion-icon name="play">`;
  } else {
    value = true;
    toggleBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    
  }
};
let reset = () => {
  min = 0
  sec = 0
  ms = 0
  value = false
  toggleBtn.innerHTML = `<ion-icon name="play">`
  display.innerHTML = '0' + min + `:` + `0` + sec + `:` + `0` + ms 
};
toggleBtn.addEventListener(`click`, toggle);
window.addEventListener(`keyup`, (e) => {
   
})
resetBtn.addEventListener(`click`, reset);

setInterval(() => {
  if (value == true) {
    ms++;
    if (ms > 99) {
      sec++;
      ms = 0;
    } 
    if (sec>59) {
        min++ ;
        sec = 0 ;
     }
     
     if(sec<10){
         display.innerHTML = min + `:` + `0` + sec + `:` + ms 
     }
     if(min<10){
         display.innerHTML = `0` +  min + `:` + sec + `:` + ms 
     }
    if (min<10 && sec<10) {
      display.innerHTML = '0' + min + `:` + `0` + sec + `:` + ms 
    }
    }
     
  }
, 10);
