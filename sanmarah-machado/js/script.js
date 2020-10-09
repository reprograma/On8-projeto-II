// TO DO LIST

const buttonSubmit = document.getElementById('todoSubmit');
const input = document.getElementById('todoInput');
let markAllButton = document.getElementById('todoMarkAll');
let removeAllButton = document.getElementById('todoRemoveAll');

buttonSubmit.addEventListener('click', setList)

function setList(e){
    e.preventDefault(); 
    const list = document.getElementById('todoList');
    const item = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = input.value;
    
    const dropdownMenu = document.getElementById('tag');
    const tag = document.createElement('p');
    tag.textContent = dropdownMenu.value;
    item.appendChild(tag);
    
    if (p.innerText.trim() == "") {
        alert('Adicione uma entrada válida!')
    } else {
        list.appendChild(item);
        item.appendChild(p);
        let deleteButton = document.createElement('button')
            deleteButton.textContent = '🗑️';
            item.appendChild(deleteButton);
        item.addEventListener('click', function(){
            p.classList.toggle('checked');
        });

        deleteButton.addEventListener('click', function() {
            list.removeChild(item)
        });
        
        input.value = "";
                        
        markAllButton.addEventListener('click', allDone);

        function allDone() {
            let tasksText = document.querySelectorAll("p");
            if(markAllButton.innerText != 'DESMARCAR TODOS') {
                tasksText.forEach((task) => {
                    task.classList.add('checked');
                });
                markAllButton.innerText = 'DESMARCAR TODOS';
            } else {
                tasksText.forEach((task) => {
                    task.classList.remove('checked')
                });
                markAllButton.innerText = 'MARCAR TODOS'
            }
        }  
        
        removeAllButton.addEventListener('click', function (){
            list.remove(item);
        });
    }
    
}