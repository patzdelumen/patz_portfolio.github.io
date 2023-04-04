

let typed = new Typed(".multi-text",{
    strings: ["I'm a Fontend Developer"," You're in my Portfolio"],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
});



let type = new Typed(".typing__two",{
    strings: ["I'm a Fontend Developer"," You're in my Portfolio"],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
});
let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "icon/sun.png";  
    }
    else{
        icon.src = "icon/moon.png"; 
    }
}
window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".nav");
var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}


function sendEmail() {
  var fullName = document.querySelector(".fullname").value;
  var email = document.querySelector(".email-input").value;
  var subject = document.querySelector(".subject").value;
  var message = document.querySelector(".message").value;
  
  if (fullName == "" || email == "" || subject == "" || message == "") {
      alert("Please fill in all the fields");
      return false;
  }
  
  var templateParams = {
      from_name: fullName,
      from_email: email,
      to_email: "delumenpatrick@gmail.com",
      subject: subject,
      message: message
  };
  
  emailjs.send("patz_7ov9knb", "template_ldynw3h", templateParams, "0AL4mExsgwPLJo4aa")
      .then(function(response) {
          alert("Your message has been sent!");
          document.querySelector(".fullname").value = "";
          document.querySelector(".email-input").value = "";
          document.querySelector(".subject").value = "";
          document.querySelector(".message").value = "";
      }, function(error) {
          alert("Oops... " + JSON.stringify(error));
      });
      
  return false;
}

document.querySelector(".send__msg").addEventListener("click", sendEmail);


// window.onload = function() {
      
//   const loader = document.querySelector('.loader');
  
//   setTimeout(function() {
//       loader.style.display = 'none';
      
//       document.body.style.display = 'block';
//   }, 1000);
// }