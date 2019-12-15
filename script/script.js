//Get Window 
// var x = window.matchMedia
//get elements for manipulation
//can width and heigth be set in 
const window = Window
const iphone6MQ = window.matchMedia("(max-width: 414px)");
const verticalRule = document.querySelector('.v1');
const mainElem = document.querySelector('main')
//function that removes certain elements
function mobileMarkup(){
    if(iphone6MQ){
        mainElem.removeChild(verticalRule)   
    }
}

