
var menuicon = document.getElementById("box-line");
var menu = document.getElementById("menu-phone");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

menuicon.onclick = function() {
   if(menu.style.left == "-768px"){
      menu.style.left = "0px"
      line1.style.transform = "rotate(-45deg)  translateX(-20%)"
      line2.style.display = "none"
      line3.style.transform = "rotate(45deg) translateX(-20%)"
   }
   else{
      menu.style.left = "-768px";
       line1.style.transform = "none"
      line2.style.display = "block"
      line3.style.transform = "none"
   };
};

var aside = document.getElementById ("aside"); 
var filtr = document.getElementById ("filtr");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");


filtr.onclick = function() {
   if(aside.style.display == "none"){
      aside.style.display = "block"
      aside.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      plus.style.display = "none"
      minus.style.display = "block"
   }else{
      aside.style.display = "none"
       plus.style.display = "block"
      minus.style.display = "none"
   }
}

