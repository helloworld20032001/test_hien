//MENU
let modalBtn = document.getElementById("popup-btn-hambuger");
let modal = document.querySelector(".popup");
let closeBtn = document.querySelector(".close-btn");
// Hiển thị popup khi nhấp chuột vào button
modalBtn.onclick = function()
{ modal.style.display = "flex"; }
// Đóng popup khi ấn vào nút đóng
closeBtn.onclick = function()
{modal.style.display = "none"}
function Sum(){
    let quantity=document.getElementById("textboxclass").value;
    quantity=parseInt(quantity);
    var x=quantity*20000;
    document.querySelector('#kq').innerHTML = x;
}
//popup pizza
let modalBtn_1 = document.getElementById("popup-btn-pizza");
let modal_1 = document.querySelector(".popup_1");
let closeBtn_1 = document.querySelector(".close-btn_1");
modalBtn_1.onclick = function(){
modal_1.style.display = "flex";}
closeBtn_1.onclick = function()
{ modal_1.style.display = "none" }
function Sum_1(){
    let quantity=document.getElementById("textboxclass_1").value;
    quantity=parseInt(quantity);
    var x=quantity*50000;
    document.querySelector('#kq_1').innerHTML = x;
}
//popup bò sốt rượu vang
let modalBtn_2 = document.getElementById("popup-btn-bò");
let modal_2 = document.querySelector(".popup_2");
let closeBtn_2 = document.querySelector(".close-btn_2");
modalBtn_2.onclick = function(){
modal_2.style.display = "flex";}
closeBtn_2.onclick = function()
{ modal_2.style.display = "none" }
function Sum_2(){
    let quantity=document.getElementById("textboxclass_2").value;
    quantity=parseInt(quantity);
    var x=quantity*50000;
    document.querySelector('#kq_2').innerHTML = x;
}
//popup bò sốt rượu vang
let modalBtn_3 = document.getElementById("popup-btn-cá");
let modal_3 = document.querySelector(".popup_3");
let closeBtn_3 = document.querySelector(".close-btn_3");
modalBtn_3.onclick = function(){
modal_3.style.display = "flex";}
closeBtn_3.onclick = function()
{ modal_3.style.display = "none" }
function Sum_3(){
    let quantity=document.getElementById("textboxclass_3").value;
    quantity=parseInt(quantity);
    var x=quantity*50000;
    document.querySelector('#kq_3').innerHTML = x;
}
//popup chả mực
let modalBtn_4 = document.getElementById("popup-btn-chả");
let modal_4 = document.querySelector(".popup_4");
let closeBtn_4 = document.querySelector(".close-btn_4");
modalBtn_4.onclick = function(){
modal_4.style.display = "flex";}
closeBtn_4.onclick = function()
{ modal_4.style.display = "none" }
function Sum_4(){
    let quantity=document.getElementById("textboxclass_4").value;
    quantity=parseInt(quantity);
    var x=quantity*50000;
    document.querySelector('#kq_4').innerHTML = x;
}
//MENU

