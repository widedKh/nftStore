function signIn(element){
    // console.log("Hellooo");
    if (element.innerText === "Register"){
        var userName = prompt("Please Enter You Name")
        var userEmail = prompt("Please Enter You Email")
        var userPassword = prompt("Please Enter You Password")
        alert("Thank you " + userName)
        // target the login button
        var login = document.getElementById("login") 
        login.innerHTML = "Logout"
        // change the inner text of the register button to show the "username"
        element.innerText = userName

    }
    if(element.innerText === "Login"){
        alert("Try to Register Please 👈⏮◀⬅↩")
    }
}




var counter=[5 ,0 ,0];
var spans=[
    document.querySelector("#nb-like1"),
    document.querySelector("#nb-like2"),
    document.querySelector("#nb-like3")
];
function increment(id){
    counter[id]++
    spans[id].innerHTML=counter[id]+"like(s)";
}
// function changeImage(element) {
//     element.src = "images\images\5.png"
// }

// function changeImage2(element){
//     element.src = "images\images\2.png"
// }