//Get Window 
// var x = window.matchMedia
//get elements for manipulation
//can width and heigth be set in 

//Menu Btn elements
const browser = document.getElementsByName('window')
const verticalRule = document.querySelector('.v1');

//verticle rule event
const mainElem = document.querySelector('main');
const iphone6MQ = window.matchMedia("(max-width: 414px)");
const menuBtn =document.querySelector('.menu-btn') ;
const links = document.querySelector('.links');

//function that removes certain elements
const mobileMarkup =() => {
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


//Menu Bar
//event name

const menuItems = () =>{
    console.log("Click")
    links.classList.toggle('show')
} 
menuBtn.addEventListener('click', menuItems)

window.onclick = function(event){
    if(!event.target.matches(".dropdown")){
        var menuItems = links
        // var menuItems = querySelector("links");
        for(let i = 0; i < links; i++){
            var openLinks = menuItems[i];
            if(openLinks.classList.contains('.show')){
                openLinks.classList.remove('.show')
            } 
        }
    }
}

//animation to dropdown 

// window.addEventListener('onresize', mobileMarkup);
//onresize is more effective when it comes to chages in window size
window.onresize = mobileMarkup;
window.onload = mobileMarkup;