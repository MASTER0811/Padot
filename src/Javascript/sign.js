let signButton = document.getElementById("SignButton"),
    signBox = document.querySelector(".login-container"),
    closeButton = document.querySelector(".closeButton")

let userImg = document.querySelector(".user-profile"),
    userName = document.querySelector(".user-name")

let signBorder = document.querySelector(".sign"),
    signOut = document.querySelector(".signOut")



signButton.onclick = () => {
    signBox.classList.add("signNow")
}
closeButton.onclick = () =>{
    signBox.classList.remove("signNow")
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    userImg.src = profile.getImageUrl()
    userName.innerHTML = profile.getName()

    signBorder.style.display = "none"
    signOut.style.display = "flex"


    console.log('Image URL: ' + profile.getImageUrl());
}

function signOutBtn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert('User signed out.');
        signBorder.style.display = "flex"
        signOut.style.display = "none"

        userImg.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        userName.innerHTML = "User"
    });
  }