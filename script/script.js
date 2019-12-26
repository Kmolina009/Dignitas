//Get Window 
// var x = window.matchMedia
//get elements for manipulation
//can width and heigth be set in 

const browser = document.getElementsByName('window')
const verticalRule = document.querySelector('.v1');
const mainElem = document.querySelector('main');
const iphone6MQ = window.matchMedia("(max-width: 414px)");
//function that removes certain elements
function mobileMarkup(){
    if(iphone6MQ.matches){
        console.log("true")
        verticalRule.className ='v1-hidden'    
        // mainElem.removeChild(verticalRule)    
    } else {
        console.log("false")
        verticalRule.className ='v1' 
        //have verticle rule be the 2nd in the array
        // mainElem.insertBefore(verticalRule, document.querySelector('.application'))
    }
}

// window.addEventListener('onresize', mobileMarkup);
//onresize is more effective when it comes to chages in window size
window.onresize = mobileMarkup;
window.onload = mobileMarkup;

