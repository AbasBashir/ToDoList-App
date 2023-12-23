

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

    // Dynamically creating check button + adding attributes
    let checkBtn = document.createElement('img');
    checkBtn.setAttribute('src', 'images/unReadStatus.svg');
    checkBtn.setAttribute('id', 'unRead');
    task.append(checkBtn);

    // Dynamically creating delete button + adding attributes
    let trashBtn = document.createElement('img');
    trashBtn.setAttribute('src', 'images/trash.svg');
    trashBtn.setAttribute('id', 'delete');
    task.append(trashBtn);

    // Establishing a condition that checks if user clicked on add task without entering a task
    if (inputTask.value === "") {
        
        alert('Please Enter A Task');

    }else{
        taskContainer.appendChild(task);
    }

    // Clearing the input bar in order for new tasks to be added
    inputTask.value = "";

    // Adding event listener for the check button
    checkBtn.addEventListener('click', function(){

            
            this.classList.toggle('active');

            if (this.classList.contains('active')) {

                this.setAttribute('src', 'images/readStatus.svg');
                checkBtn.parentElement.style.textDecoration = 'line-through';
                checkBtn.parentElement.style.textDecorationColor = '#34b7f1';

            } else {

                this.setAttribute('src', 'images/unReadStatus.svg');
                checkBtn.parentElement.style.textDecoration = 'none';

            }
            
    })

    // Adding event listener for the delete button
    trashBtn.addEventListener('click', function(e){
                
        let target = e.target;
        target.parentElement.remove();       
    
    })

})