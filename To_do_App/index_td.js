function addFunction(){
    var text = document.getElementById('itemName').value;
    var node = document.createElement('li');
    var textNode = document.createTextNode(text);
    var button = document.createElement('button');
    button.innerHTML = "X"
    button.setAttribute("id", "myBtn")
    node.setAttribute("id", "myList")
    node.appendChild(textNode);
    node.appendChild(button);
    button.onclick = removeEntry;
    document.getElementById('list').appendChild(node);
    document.getElementById('itemName').value = "";
    }


function removeFunction(){
    document.getElementById('list').innerHTML = "";
}


function removeEntry(){
    var e = document.getElementById("myBtn");
    e.closest("li").remove();
}
