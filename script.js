const addbutton = document.getElementById('addTask')
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

loadTasks()

function addTask(){

    const task =  taskInput.value.trim() 
    if(task){
        createTaskElement(task)
        taskInput.value = ""

        saveTasks()
        
    }else{
        alert("Please Enter A Task!")
    }

}

addbutton.addEventListener("click",addTask)

function createTaskElement(task){

    const listItem = document.createElement('li')
    
    listItem.textContent = task

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'deleteTask' // from css

    listItem.appendChild(deleteButton)
    taskList.appendChild(listItem)

    deleteButton.addEventListener('click', function(){
        taskList.removeChild(listItem)
        saveTasks()
    })
}

function saveTasks(){

    let tasks = []
    taskList.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.replace('Delete', '').trim())
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))

}
function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.forEach(createTaskElement)
}


