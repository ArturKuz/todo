var color = document.querySelector('.logo');
color.addEventListener('mouseover', randomColor);
function randomColor() {

    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    color.style.backgroundColor = rgb;
}

var item;
var addBtn = document.querySelector('.todo__button_add');
var clear = document.querySelector('.todo__button_clear');
var taskList = document.querySelector('.todo__list');

loadEventListeners();
    function loadEventListeners() {
        addBtn.addEventListener('click', addTask);
        clear.addEventListener('click', clearList);

    }
    function addTask() {
        item = document.getElementById('new-task').value;
        var text = document.createTextNode(item);
        var newItem = document.createElement("li");
        newItem.className = "todo__list-item";
        newItem.appendChild(text);
        taskList.appendChild(newItem);
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        newItem.appendChild(span);
        span.addEventListener('click', delTask) ;
}

    function delTask() {
        var del = this.parentElement;
        del.style.display = "none";}

    function clearList() {
        taskList.innerHTML = '';
}



    taskList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
    }, false);












