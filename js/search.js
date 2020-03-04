//поиск по столбцу
function tableSearch() {
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('table_id');
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