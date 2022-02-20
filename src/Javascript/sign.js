let signButton = document.getElementById("SignButton"),
    signBox = document.querySelector(".login-container"),
    closeButton = document.querySelector(".closeButton")



signButton.onclick = () => {
    signBox.classList.add("signNow")
}
closeButton.onclick = () =>{
    signBox.classList.remove("signNow")
}
 
let signInButton = document.getElementById("signButton")
let signOutButton = document.getElementById("signOutButton")




function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    signOutButton.style.visibility = "visible"
}

function signOutBtn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {

        signOutButton.style.visibility = "hidden"
    })
  }
