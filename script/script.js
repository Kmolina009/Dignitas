// ***Header 
const header =  document.querySelector('header');
const sticky = header.offsetTop;
// const sticky2 = hr.offsetTop;
// ***Menu Btn elements***
const browser = document.getElementsByName('window')
const verticalRule = document.querySelector('.v1');

// ***verticle rule event***
const mainElem = document.querySelector('main');
const iphone6MQ = window.matchMedia("(max-width: 414px)");
const menuBtn =document.querySelector('.menu-btn') ;
const links = document.querySelector('.links');
// ***function that removes certain elements***
const mobileMarkup =() => {
    if(iphone6MQ.matches){
        console.log("true")
        verticalRule.className ='v1-hidden'    
    } else {
        console.log("false")
        verticalRule.className ='v1' 
    }
}

//Change header menu to a solid shape with an menu as the header, and  the 
//hamburger button is replace with an X
// ***Menu Bar***
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
const  stickyHeader = () => {
    if(window.pageYOffset > sticky){
        console.log("Sticky")
        header.classList.add("sticky");
        header.classList.add("sticky");
    }else{
        console.log("Sticky")
        header.classList.remove("sticky");
    }
};


// Window Resize
window.onload = mobileMarkup;
window.onresize = mobileMarkup;
window.onscroll = stickyHeader;