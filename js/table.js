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

