const adicionar = document.getElementById('todoSubmit');
const marcarTodos = document.getElementById('todoMarkAll');
const removerTodos = document.getElementById('todoRemoveAll');

const input = document.getElementById('todoInput');
const lista = document.getElementById('todoList');

adicionar.addEventListener('click', montarLista);
marcarTodos.addEventListener('click', checkAll);
removerTodos.addEventListener('click', removeAll);

function montarLista(e){
    e.preventDefault(); 

    let task = input.value.trim();

    if(task.length > 0){
        const item = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = task;
        item.appendChild(p);

        const tag = document.getElementById('tag');
        const tagElement = document.createElement('p');
        tagElement.textContent = tag.value;
        item.appendChild(tagElement);

        item.addEventListener('click', function check() {
            p.classList.toggle('checked');
            tagElement.classList.toggle('checked');
        });
        
        const apagar = document.createElement('span')
        item.appendChild(apagar)
        apagar.innerHTML = '&#10060;';
        apagar.addEventListener('click', function (){
            item.remove();
        });
       
        lista.appendChild(item);

    } else {
        alert('Preencha o campo corretamente!')
    }
    
    input.value = ""
}

function checkAll() {
    let items = document.querySelectorAll("#todoList li p:not(.checked)")
    items.forEach((item) => {
        item.classList.toggle("checked");
    });
} 

function removeAll() {
    lista.textContent = "";
} 