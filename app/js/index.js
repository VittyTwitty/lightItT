let arrowLeft = document.getElementsByClassName('v-slider_buttons--left')[0];
let arrowRight = document.getElementsByClassName('v-slider_buttons--right')[0];

let vSliderInnerMove = document.getElementsByClassName('v-slider_inner')[0];

let setOfPhotos = document.getElementById('v-slider_mini');


let transitionMove = 100;
let positionMove = 0;

arrowLeft.onclick = () => {
    positionMove += transitionMove;
    console.log(positionMove);
    vSliderInnerMove.style.transform = `translate(${positionMove}vw)`;
}
arrowRight.onclick = () => {
    positionMove -= transitionMove;
    console.log(positionMove)
    vSliderInnerMove.style.transform = `translateX(${positionMove}vw)`;
}





