function addNewContact(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const table = document.getElementById('contact-table').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${address}</td>
    `;
    table.appendChild(newRow);
    document.getElementById('contact-form').reset();
}

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}
