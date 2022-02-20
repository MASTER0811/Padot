let signButton = document.getElementById("SignButton"),
    signBox = document.querySelector(".login-container"),
    closeButton = document.querySelector(".closeButton")

let userImg = document.querySelector(".user-profile"),
    userName = document.querySelector(".user-name")

let signBorder = document.querySelector(".g-signin2"),
    signOut = document.querySelector(".signOut")

signButton.onclick = () => {
    signBox.classList.add("signNow")
}
closeButton.onclick = () =>{
    signBox.classList.remove("signNow")
}
 
signBorder.setAttribute("style", "display:flex;")

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    userImg.src = profile.getImageUrl()
    userName.innerHTML = profile.getName()

    signBorder.setAttribute("style", "display:none;")
    signOut.setAttribute("style", "display:flex;")
}

function signOutBtn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert('User signed out.')

        signBorder.setAttribute("style", "display:flex;")
        signOut.setAttribute("style", "display:none;")

        userImg.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        userName.innerHTML = "User"
    })
  }
