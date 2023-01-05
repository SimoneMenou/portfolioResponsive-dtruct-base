// Je vais pointer sur la balise webb app
let webapp = document.getElementsByClassName(".text")
let front = document.querySelector(".text2");
let purecss = document.querySelector(".text3");

function galleriewebapp() {
    
    let menu = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    menu.appendChild(li1);
    menu.appendChild(li2);
    menu.appendChild(li3);
    menu.appendChild(li4);
    li1.innerText = "app1";
    li2.innerText = "app2";
    li3.innerText = "app3";
    li4.innerText = "app4";
}
webapp.onclick = galleriewebapp;