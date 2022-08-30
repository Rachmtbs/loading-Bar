// in the css file we made width 0 in the loading bar front we will make it functional in the js

const counterEl = document.querySelector('.counter');
const barEl = document.querySelector('.loading-bar-front');

// create a function that will update the percentage of the load

let idx = 0;

updateNum();

function updateNum(){
    counterEl.innerText = idx + "%";
    barEl.style.width = idx + "%";
    idx ++;
    //need to loop 
    //first increament the ibx
    if(idx < 101){
        setTimeout(updateNum, 20);
    }
}
//counterEl.innerText = "20%"