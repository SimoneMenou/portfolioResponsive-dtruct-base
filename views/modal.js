
// Get the modal
let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');
let modal5 = document.getElementById('myModal5');
let modal6 = document.getElementById('myModal6');

// Get the button that opens the modal
let btn1 = document.querySelector(".viewbutton1");
// Get the button that opens the modal
let btn2 = document.querySelector(".viewbutton2");
// Get the button that opens the modal
let btn3 = document.querySelector(".viewbutton3");
// Get the button that opens the modal
let btn4 = document.querySelector(".viewbutton4");
// Get the button that opens the modal
let btn5 = document.querySelector(".viewbutton5");
// Get the button that opens the modal
let btn6 = document.querySelector(".viewbutton6");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
function OpenModal () {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
btn1.onclick = OpenModal;
btn2.onclick = OpenModal;
btn3.onclick = OpenModal;
btn4.onclick = OpenModal;
btn5.onclick = OpenModal;
btn6.onclick = OpenModal;