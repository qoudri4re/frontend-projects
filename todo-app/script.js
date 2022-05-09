let todos = document.getElementsByClassName('border')
if (todos.length == 0) {
    document.getElementById('msg').style.display = 'flex'
} else {
    document.getElementById('msg').style.display = 'none'
}
document.getElementById('item-left').innerText = todos.length + " items left"

for (let i = 0; i < todos.length; i++) {
    toogleTodoCheckBox(todos[i])
}

function IncrementTodoListCounter(operation) {
    let todoList = document.getElementsByClassName("border")
    // let num_of_items_left = document.getElementById('item-left').innerText;
    if (operation == "add") {
        document.getElementById('item-left').innerText = todoList.length + 1 + " items left"
    } else {
        document.getElementById('item-left').innerText = todoList.length - 1 + " items left"
    }
}
function toogleTodoCheckBox(todo) {
    todo.addEventListener('click', function () {
        if (todo.classList.contains('completed')) {
            todo.classList.add('uncompleted')
            todo.classList.remove('completed')
            let num_of_items_left = document.getElementsByClassName('border').length - document.getElementsByClassName('completed').length
            document.getElementById('item-left').innerText = parseInt(num_of_items_left)  + " items left"
            
        } else if (todo.classList.contains('uncompleted')) {
            todo.classList.add('completed')
            todo.classList.remove('uncompleted')
            let num_of_items_left = document.getElementsByClassName('border').length - document.getElementsByClassName('completed').length
            document.getElementById('item-left').innerText = parseInt(num_of_items_left) + " items left"
        }
    })
}




//change view
let views = document.getElementsByClassName('view')
for (let i = 0; i < views.length; i++) {
    views[i].addEventListener('click', function () {
        if (views[i].classList.contains('current-view')) {

        } else {
            for (let j = 0; j < views.length; j++){
                if (views[j] !== views[i]) {
                    if (views[j].classList.contains('current-view')) {
                        views[j].classList.remove('current-view')
                    }
                }
            }
            views[i].classList.add('current-view')

            //change the view either to all tasks, active tasks or completed task
            let view_state = views[i].innerHTML;
            let all_tasks = document.getElementsByClassName('border')
            if (view_state == 'all') {
                if (all_tasks.length == 0) {
                    document.getElementById('msg').innerText = 'no task available'
                }
                for (let i = 0; i < all_tasks.length; i++) {
                        if (all_tasks[i].classList.contains('hide')) {
                            all_tasks[i].classList.remove('hide')
                            document.getElementById('msg').style.display = 'none'
                        }
                }
            } else if (view_state == 'active') {
                if (document.getElementsByClassName('uncompleted').length == 0) {
                    document.getElementById('msg').innerText = 'no  active task'
                    document.getElementById('msg').style.display = 'flex'
                } 
                for (let i = 0; i < all_tasks.length; i++) {
                    if (all_tasks[i].classList.contains('completed')) {
                        all_tasks[i].classList.add('hide')
                    } else {
                        all_tasks[i].classList.remove('hide')
                        document.getElementById('msg').style.display = 'none'
                    }
                }
            } else if (view_state == 'completed') {
                if (document.getElementsByClassName('completed').length == 0) {
                    document.getElementById('msg').innerText = 'no completed task'
                    document.getElementById('msg').style.display = 'flex'
                    
                }
                for (let i = 0; i < all_tasks.length; i++) {
                    if (all_tasks[i].classList.contains('uncompleted')) {
                        all_tasks[i].classList.add('hide')
                    } else {
                        all_tasks[i].classList.remove('hide')
                        document.getElementById('msg').style.display = 'none'
                    }
                }
                
            }
        }
    })
}

//change theme
let current_theme_light = true
let theme = document.getElementById('theme')
let icon = document.getElementById('theme-toogle')
document.getElementById('theme-toogle').addEventListener('click', function () {
    if (current_theme_light) {
        icon.src = 'images/icon-sun.svg'
        theme.classList.add('container-dark')
        theme.classList.remove('container-light')
        current_theme_light = false
    } else {
        icon.src = 'images/icon-moon.svg'
        theme.classList.add('container-light')
        theme.classList.remove('container-dark')
        current_theme_light = true
    }
})

//create new todo

let todo_input = document.getElementById('todo-input')

todo_input.addEventListener('keypress', function (event) {
    if (event.key == "Enter" && todo_input.value != "") {
        let new_todo = createNewTodo(todo_input.value)
        toogleTodoCheckBox(new_todo)
        document.getElementById('item-left').innerText = (document.getElementsByClassName('border').length - document.getElementsByClassName("completed").length) + " items left"
        todo_input.value = ''
        document.getElementById('msg').style.display = 'none'
    }
})


// delete todo
function deleteTodo(todo_class_name)  {
    let todo_to_be_deleted = document.getElementsByClassName(todo_class_name)
    for (let i = 0; i < todo_to_be_deleted.length; i++) {
        todo_to_be_deleted[i].remove()
        document.getElementById('item-left').innerText = (document.getElementsByClassName('border').length - 1) - document.getElementsByClassName('completed').length + " items left"
        if (document.getElementsByClassName('border').length == 0) {
            document.getElementById('msg').style.display = 'flex'
        } else {
            document.getElementById('msg').style.display = 'none'
        }
    }
}


//create new todo
let num_of_todo = 1

function createNewTodo(todo_content) {
    let main_div = document.createElement("div")
    main_div.classList.add('item')
    main_div.classList.add('border')
    main_div.classList.add('uncompleted')
    main_div.classList.add("todo_content_delete" + num_of_todo)
    let second_div = document.createElement('div')
    second_div.classList.add("image-bg")
    let second_div_content = document.createElement('img')
    second_div_content.src = "images/icon-check.svg"
    
    
    second_div.appendChild(second_div_content)

    let paragraph = document.createElement('p')

    paragraph.innerHTML = todo_content

    let image = document.createElement("img")
    image.src = "images/icon-cross.svg"
    image.id = "todo_content_delete" + num_of_todo
    image.addEventListener('click', function() {
        deleteTodo(image.id)
    })
    num_of_todo += 1
    main_div.appendChild(second_div)
    main_div.appendChild(paragraph)
    main_div.appendChild(image)
    let root = document.getElementById("todo-container")
    root.prepend(main_div)
    return main_div
}

document.getElementById('clear-completed-task').addEventListener('click', function () {
    let completed_todos = document.getElementsByClassName('completed')
    for (let i = 0; i < completed_todos.length; i++) {
        console.log(i);
        completed_todos[i].remove()
    }
    document.getElementById('item-left').innerText = document.getElementsByClassName('border').length + " items left"
})