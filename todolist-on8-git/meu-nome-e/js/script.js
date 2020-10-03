// const input = document.querySelector('#todoInput');
// const submit = document.querySelector('#todoSubmit');

const input = document.getElementById('todoInput');
const submit = document.getElementById('todoSubmit');



submit.addEventListener('click', function (event) {
    event.preventDefault();
  



    if (input.value.trim() === "") {
        alert('input vazio')
    } else {

        const list = document.querySelector('.todo__task-list');
        const tag = document.getElementById('tag');
        const text = document.createElement('p');
        const item = document.createElement('li');
        const tagName = document.createElement('p')
        const btnRemove = document.createElement('p');
        list.appendChild(item);
        item.appendChild(text);
        item.appendChild(tagName)

     
        text.innerText = inputValue;
        tagName.innerText = tag.value;
        btnRemove.innerHTML = 'x';
        item.appendChild(btnRemove);
        btnRemove.classList.add('over')
        input.value = "";
        
        
        item.addEventListener('click', function (event){
                text.classList.add('checked');
        })

        const markAll = document.querySelector('#todoMarcarTodos');

        markAll.addEventListener('click', function (event){
            text.classList.add('checked');
        })

        btnRemove.addEventListener('click', function (event) {
            list.removeChild(item)
        })

        const removeAll = document.querySelector('#todoRemoverTodos');

        removeAll.addEventListener('click', function (event) {
            list.removeChild(item)
        })

    }


})




// Primeiro passo: 
// Ao acionar o btn, pegar o valor do meu input e colocar na lista 


// const input = document.getElementById('todoInput');
// const submit = document.getElementById('todoSubmit');


// submit.addEventListener('click', montarLista);

// function montarLista(e){
//     e.preventDefault();

//     if(input.value.trim() === ""){
//         alert('poxa, seu input está vazio ):')
//     } else{
//         const list = document.querySelector('.todo__task-list');
//         const tag = document.getElementById('tag');
//         const item = document.createElement('li');
//         const tagName = document.createElement('p');
//         const remove = document.createElement('p');
//         item.textContent = input.value;
//         tagName.textContent = tag.value;
//         remove.textContent = 'x';
//         list.appendChild(item);
//         item.appendChild(tagName);
//         item.appendChild(remove);
//         input.value = "";

//         remove.addEventListener('click', removeHere);
        
//         function removeHere(e){
//             list.removeChild(item)
//         }

//         const removeBtn = document.getElementById('todoMarkAll');
//         removeBtn.addEventListener('click', removeAll);

//         function removeAll(e){
//             list.removeChild(item)
//         }
//     }

    
// }


