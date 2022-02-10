let img = document.querySelector("#profile-img")
let nameprofile = document.querySelector("#profile-info")


function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    img.src = profile.getImageUrl();
    nameprofile.innerHTML = profile.getName();
    
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); 
}
