document.getElementById("submit").addEventListener("click", check);

function check() {
    var mail = document.getElementById("mail").value
    var result = mail.match(/^\w+@[a-z]+.[a-z]+$/gm);
console.log(result)
    if(mail == "" || result == null){
        document.getElementById("warning").style.display = "block"
        document.getElementById("error").style.display = "block"
        document.getElementById("submitmail").style.border = "0.15vw solid hsl(0, 93%, 68%)"   
    } else {
        document.getElementById("warning").style.display = "none"
        document.getElementById("error").style.display = "none"
        document.getElementById("submitmail").style.border = "0.1vw solid hsl(0, 36%, 70%)"   
    }
}