easyScrollDots({
    'fixedNav': false,
    'fixedNavId': '',
    'fixedNavUpward': false,
    'offset': 15
});
var typed = new Typed('#animate-text', {
    strings: ['This Webpage is create by HTML, CSS, Javascript.','Scroll down to browse more page.'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
});

let texttype0 = new Typed(".text-blink0",{
    strings: ['*****************************************************','*****************************************************************'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
})

let texttype1 = new Typed(".text-blink1",{
    strings: ['** ###·····###  ··#######··  ###########  ########### **','** ###########   ····###····  #########··  ··#######··  ########### **'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
})

let texttype2 = new Typed(".text-blink2",{
    strings: ['** ###·····###  ·#########·  ###########  ########### **','** ###·····###   ···##·##···  ##########·  ·#########·  ########### **'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
})

let texttype3 = new Typed(".text-blink3",{
    strings: ['** ###########  ####···####  ##··###··##  ###········ **','** ###·····###   ··##···##··  ###····####  ####···####  ····###···· **'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
})
let texttype4 = new Typed(".text-blink4",{
    strings: ['** ###########  ###·····###  ##··###··##  ########### **','** ###########   ·#########·  ###·····###  ###·····###  ····###···· **'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
})
let texttype5 = new Typed(".text-blink5",{
    strings: ['** ###########  ####···####  ##··###··##  ###········ **','** ##·········   ###·····###  ###····####  ####···####  ····###···· **'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
})

let texttype6 = new Typed(".text-blink6",{
    strings: ['** ###·····###  ·#########·  ##··###··##  ########### **','** ##·········   ###########  ##########·  ·#########·  ····###···· **'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
})

let texttype7 = new Typed(".text-blink7",{
    strings: ['** ###·····###  ··#######··  ##··###··##  ########### **','** ##·········   ###·····###  #########··  ··#######··  ····###···· **'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
})

let texttype8 = new Typed(".text-blink8",{
    strings: ['*****************************************************','*****************************************************************'],
    smartBackspace: true, // Default value
    backSpeed: 40,
    typeSpeed: 40
})



var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 500,
	speedAsDuration: true
});