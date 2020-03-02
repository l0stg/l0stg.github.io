var modal = document.getElementById("my_modal");
var btn = document.getElementById("MyBtn");
var span = document.getElementsByClassName("close_modal_window")[0];

// функция для открытия по нажатию на кнопку
btn.onclick = function () { 
   modal.style.display = "block";
}
//функция для закрытию по нажатию на крестик
span.onclick = function () {
   modal.style.display = "none";
}
//функция для закрытия по нажатию вне модального окна
window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}
