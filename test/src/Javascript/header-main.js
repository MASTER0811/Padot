window.addEventListener("scroll",function(){
    navbar.classList.remove('active');

    let section = document.querySelectorAll('section')
    let navlink = document.querySelectorAll('header [navItem] a')
    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
            navlink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector(`a[href*="${id}"]`).classList.add('active');
            });
        }
    })

})