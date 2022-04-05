let signButton = document.querySelector("[login]")
let signBox = document.querySelector(".login-container")
let closeButton = document.querySelector(".closeButton")

signButton.onclick = () => {
    signBox.classList.add("signNow")
}
closeButton.onclick = () =>{
    signBox.classList.remove("signNow")
}

 
const gSignInButton = document.querySelector("[googleSInBtn]")
const gSignOutButton = document.querySelector("[googleSOutBtn]")
const userImages = document.querySelector("img.logOutImage")

const googleUser = {}

function startApp() {
    gapi.load('auth2',function (){
        auth2 = gapi.auth2.init({
            client_id: "787803052793-74ovels7pvr9lf4tebgcg3c6ldkeq9ed.apps.googleusercontent.com",
            cookiepolicy:'single_host_origin',
            scope: 'https://www.googleapis.com/auth/plus.login',
        });
        attachSignin(document.querySelector("[googleSInBtn]"))
    })
}
startApp()

function attachSignin(element){
    auth2.attachClickHandler(element,{},
        function(googleUser){
            userImages.src = googleUser.getBasicProfile().getImageUrl();

            gSignInButton.style.display = "none"
            gSignOutButton.style.display = "flex"

            var typed = new Typed('#usertext', {
                strings: [`user`,`${googleUser.getBasicProfile().getName()}`],
                typeSpeed: 100,
                showCursor: false,
            });

            signBox.classList.remove("signNow")
        },
        function(error){
            console.log(
                JSON.stringify(error,undefined,2)
            );
        }
        
    )

}


gSignOutButton.onclick = () =>{
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){

        gSignInButton.style.display = "flex"
        gSignOutButton.style.display = "none"
        var typed = new Typed('#usertext', {
            strings: [``,`Signed Out successfully`,'user'],
            typeSpeed: 100,
            showCursor: false,
        });
        signBox.classList.remove("signNow")

        userImages.src = "https://firebasestorage.googleapis.com/v0/b/padot-login.appspot.com/o/iconGoogle.svg?alt=media&token=ff407df3-4e71-4999-a8b1-51d67e7b7769"
    })
}
