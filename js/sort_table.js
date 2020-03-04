
var flag=false; //булевская переменная для выбора направления сортировки
var number_col = none; //переменная для хранения номера активного столбца
//сортировка по ID
function sort_id() {
    action_th();//сбрасываем стили
    document.getElementById("thumb_1").className = "title_active";//выделяем столбец
    number_col = 0;
    m.sort(function(a, b){return a.id - b.id});
    newTable();
   
}
//сортировка по дате, 
function sort_date() {
    action_th();
    document.getElementById("thumb_3").className = "title_active";
    number_col = 2;
    m.sort(function(a, b){
        var c = new Date(a.date);
        var d = new Date(b.date);
        if(c < d) return -1;
        if(c > d) return 1;
    
    });
    newTable();
}

//Сортировка по значению
function sort_count() {
    action_th();
    document.getElementById("thumb_4").className = "title_active";
    number_col = 3;
    m.sort(function(a, b){return a.count - b.count});
    newTable();
}
//сортировка по имени
function sort_name() {
    action_th();
    document.getElementById("thumb_2").className = "title_active";
    number_col = 1;
    m.sort(function (a, b){var aname = a.name.toLowerCase(),
        bname = b.name.toLowerCase();
      if(aname < bname) return -1;
      if(aname > bname) return 1;});
    newTable();
}
//Функция для изменения данных
function newTable(){
    if (flag){
        m.reverse();
        foo();
        displaytable();
        flag = !flag;
    }
    else{
        foo();
        displaytable();
        flag = !flag;
    }
}

