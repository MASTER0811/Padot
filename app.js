let img = document.querySelector("#profile-img")
let nameprofile = document.querySelector("#profile-info")


function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    img.src = profile.getImageUrl();
    nameprofile.innerHTML = profile.getName();
}