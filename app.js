

// Globale variables

let addTask = document.getElementById('add-btn');

let inputTask = document.getElementById('input-task');

let taskContainer = document.getElementById('task-container');


// Event Listener for Add Button
addTask.addEventListener('click', function(){

    let task = document.createElement('div');

    task.classList.add('task'); 

    // Creating our list item and appending to taskContainer
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;    
    task.append(li);

    let checkBtn = document.createElement('img');

    checkBtn.setAttribute('src', 'images/unReadStatus.svg');

    task.append(checkBtn);

    let trashBtn = document.createElement('img');

    trashBtn.setAttribute('src', 'images/trash.svg');

    task.append(trashBtn);

    if (inputTask.value === "") {
        
        alert('Please Enter A Task');

    }else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";
})