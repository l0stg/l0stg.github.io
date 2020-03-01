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


//обьявление массива
var m = [
    {id: 1, name: 'Вася', date:'15.06.2018', count: 11},
    {id: 2, name: 'Петя', date:'23.11.2018', count: 23},
    {id: 3, name: 'Иван', date:'12 марта 2017', count: 3},
    {id: 4, name: 'Александр', date: '20/12/2010', count: 1},
    {id: 5, name: 'Евгений', date:'12.09.2018', count: 112},
    {id: 6, name: 'Мария', date:'1.08.2016', count: 122},
    {id: 7, name: 'Анастасия', date:'20.11.2018', count: 34},
    {id: 8, name: 'Степан', date:'12.11.2019', count: 10},
    ]
    

var tbody = document.querySelector('tbody');

displaytable();//выводим таблицу

var flag=0; //булевская переменная для выбора направления сортировки
var number_col = none; //переменная для хранения номера активного столбца
//сортировка по ID
function sort_id() {
    number_col = 0;
    m.sort(function(a, b){return a.id - b.id});
    newTable();
   
}
function sort_date() {
    number_col = 2;
    m.sort(function(a, b){return Date.parse(a.date) - Date.parse(b.date)
        /* var adate = Date.parse(a.date),
        bdate = Date.parse(b.date);
      if(adate < bdate) return -1;
      if(adate > bdate) return 1; */});
    newTable();
}

//Сортировка по значению
function sort_count() {
    number_col = 3;
    m.sort(function(a, b){return a.count - b.count});
    newTable();
}
//сортировка по имени
function sort_name() {
    number_col = 1;
    m.sort(function (a, b){var aname = a.name.toLowerCase(),
        bname = b.name.toLowerCase();
      if(aname < bname) return -1;
      if(aname > bname) return 1;});
    newTable();
}
//Функция для изменения данных
function newTable(){
    if (flag == 0){
        foo();
        displaytable();
        flag = 1;
    }
    else{
        m.reverse();
        foo();
        displaytable();
        flag = 0;
    }
}

//заполняем таблицу
function displaytable(){
    
    for(var i = 0; i < m.length; i++)
        {
            var tr = document.createElement('tr');
            tr.innerHTML =
                '<td>' + m[i].id + '</td>' +
                '<td>' + m[i].name + '</td>' +
                '<td>' + m[i].date + '</td>'+
                '<td>' + m[i].count + '</td>';
            tbody.appendChild(tr);
        }
}

//очистка таблицы
function foo() {
    for(var i = 0; i < m.length; i++){
        var elem = document.getElementById("list").lastChild;
        elem.parentNode.removeChild(elem);
    }
  }

//поиск по столбцу
function tableSearch() {
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('demo');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        
            flag = regPhrase.test(table.rows[i].cells[number_col].innerHTML);
        
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
    }
}

//функция выделения столбца

    document.getElementById("myel").className = "zagolovok_active";
