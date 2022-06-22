function addEntry(){
    var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    document.querySelector('.noData').classList.remove('show');
    document.querySelector('.noData').classList.add('hide');
    var name = document.getElementById('name').value;
    var date1 = document.getElementById('date1').value;
    var amount = document.getElementById('amount').value;
    var new_row = "<tr><td>"+ name + "</td><td>" + date1 + "</td><td>" + amount + "</td><td>" + "<button id='myBtn' onclick='removeEntry()';>X</button>" + "</td></tr>"
    tableRef.insertRow().innerHTML = new_row;
    document.getElementById('name').value = "";
    document.getElementById('date1').value = "";
    document.getElementById('amount').value = "";
}

function removeEntry(){
    var e = document.getElementById('myBtn');
    e.closest('tr').remove();
    if(document.querySelectorAll('#myTable tbody tr').length == 1){
        document.querySelector('.noData').classList.remove('hide');
        document.querySelector('.noData').classList.add('show');
    }
}