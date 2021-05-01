console.clear();

const lightenText = document.getElementById('lightenText');
const darkenText = document.getElementById('darkenText');
const toggleBtn = document.getElementById('toggleBtn');
const logo = document.getElementById('logo');
const innerCircle = document.getElementById('inner-circle');

// Toggle Theme 
toggleBtn.addEventListener('click', () => {
  if(toggleBtn.classList.contains('toggled')){
    toggleBtn.classList.remove('toggled');
    lightenText.classList.remove('unselected');
    darkenText.classList.add('unselected');
    document.body.classList.remove('night-theme-body');
    logo.classList.remove('night-theme-logo');
    innerCircle.classList.remove('inner-circle-pac-man-left');
    innerCircle.classList.add('inner-circle-pac-man-right');
  } else {
    toggleBtn.classList.add('toggled');
    lightenText.classList.add('unselected');
    darkenText.classList.remove('unselected');
    document.body.classList.add('night-theme-body');
    logo.classList.add('night-theme-logo');
    innerCircle.classList.add('inner-circle-pac-man-left');
    innerCircle.classList.remove('inner-circle-pac-man-right');
  }
});

// --------------------------------------

// let root = document.documentElement;



// let game_02 = document.getElementById("game-02");
// let game_02_value = window.getComputedStyle(game_02, null).getPropertyValue("left");

// let game_02_value_parseInt = parseInt(game_02_value);
// let moveGameCardRight = game_02_value_parseInt + 200 + "px";
// let moveGameCardLeft = game_02_value_parseInt - 200 + "px";
//   console.log(`game_02_value_parseInt: ${game_02_value_parseInt + 200 + "px"}`);

// game_02.addEventListener('click', ()=>{
//   game_02.style.left = moveGameCardLeft;
//     console.log(game_02.style.left); 
// });

// -------------
const allgameCards = document.querySelectorAll(".game-card");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");    

// for(let i = 0; i < allgameCards.length; i++) {
//     let currentGameStyleLeftValue = window.getComputedStyle(allgameCards[i], null).getPropertyValue("left");
//       // console.log(currentGameStyleLeftValue);
//     let currentGameValueParseInt = parseInt(currentGameStyleLeftValue);
//       // console.log(currentGameStyleLeftValue);
//     let moveCurrentGameCardsLeft = currentGameValueParseInt - 200 + "px";
//       console.log(moveCurrentGameCardsLeft);
//     let moveCurrentGameCardsRight = currentGameValueParseInt + 200 + "px";
  
//     allgameCards[i].style.left = moveCurrentGameCardsLeft;  
//     allgameCards[i].style.left = moveCurrentGameCardsRight;  
// }

arrowLeft.addEventListener('click', ()=>{
  console.log(`arrowLeft clicked`);
  for(let i = 0; i < allgameCards.length; i++) {
    let currentGameStyleLeftValue = window.getComputedStyle(allgameCards[i], null).getPropertyValue("left");
    let currentGameValueParseInt = parseInt(currentGameStyleLeftValue);
    let moveCurrentGameCardsLeft = currentGameValueParseInt - 400 + "px";
    let moveCurrentGameCardsRight = currentGameValueParseInt + 400 + "px";
      console.log(`moveCurrentGameCardsRight: ${currentGameValueParseInt + 400}`);
    
    if(currentGameValueParseInt + 400 <= 1200) {
      allgameCards[i].style.left = moveCurrentGameCardsRight; 
    }  
}
})
arrowRight.addEventListener('click', ()=>{
  console.log(`arrowRight clicked`);
  for(let i = 0; i < allgameCards.length; i++) {
    let currentGameStyleLeftValue = window.getComputedStyle(allgameCards[i], null).getPropertyValue("left");
    let currentGameValueParseInt = parseInt(currentGameStyleLeftValue);
    let moveCurrentGameCardsLeft = currentGameValueParseInt - 400 + "px";
    let moveCurrentGameCardsRight = currentGameValueParseInt + 400 + "px";
      console.log(`moveCurrentGameCardsLeft: ${currentGameValueParseInt - 400}`);
   
    if(currentGameValueParseInt - 400 >= -1200) {
      allgameCards[i].style.left = moveCurrentGameCardsLeft; 
    }  
}
})