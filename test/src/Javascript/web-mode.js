let bars = document.querySelector("[bars]")
let hears = document.querySelector("[heart]")
let githublinks = document.querySelector("[githubLogo]")

let navbar = document.querySelector('nav[navItem]');
// Hears 
hears.onclick = () =>{
    hears.classList.toggle("active")
    if(localStorage.getItem("love") == "red"){
        localStorage.setItem("love","nonered")
    }else{
        localStorage.setItem("love","red")
    }
}
if (localStorage.getItem("love") == "red"){
    hears.classList.add("active")
}  
if (localStorage.getItem("love") == "nonered"){
    hears.classList.remove("active")
}

// media bars
bars.onclick = () =>{
    navbar.classList.toggle("active")
}




// Mode - Dark or Light
let modeMoon = document.querySelector("[mode-moon]")
let modeSun = document.querySelector("[mode-sun]")

let moonStyle = modeMoon.style
let sunStyle = modeSun.style
modeMoon.onclick = () =>{
    document.body.classList.toggle("web-dark-mode")

    moonStyle.display = "none"
    sunStyle.display = "flex"

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
modeSun.onclick = () =>{
    document.body.classList.toggle("web-dark-mode")

    moonStyle.display = "flex"
    sunStyle.display = "none"  

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}


if (localStorage.getItem("theme") == "light") {
    document.body.classList.remove("web-dark-mode");
    
    moonStyle.display = "flex"
    sunStyle.display = "none"  
}
else if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("web-dark-mode");
    moonStyle.display = "none"
    sunStyle.display = "flex"
} else {
    localStorage.setItem("theme", "light");
    moonStyle.display = "flex"
    sunStyle.display = "none"  
}




githublinks.onclick = () =>{
    window.location.replace("github.html")
}

window.onscroll = () =>{
    navbar.classList.remove("active")
}