


const submit= document.getElementById('todoSubmit');
const input = document.getElementById('todoInput');
const aviso = document.createElement('p')

submit.addEventListener('click', Lista)


function Lista(e) {
    e.preventDefault();

    if (input.value === ''){//campo vazio
        alert('Inserir um Item')
    

    }
    // itens  lista
    else {
        const lista = document.getElementById('todoList');
        const item = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = input.value;  
        lista.appendChild(item);
        item.appendChild(p); 
        document.querySelector('#todoInput').value= '';

        const btnCheck= document.getElementById('todoMarkAll');//etiquetas 
        btnCheck.addEventListener('click', function(){
            p.classList.toggle('checked');
            etiqueta.classList.toggle('checked');
        });

        const btnRemoveAll= document.getElementById('todoRemoveAll');  // limpar lista
        btnRemoveAll.addEventListener('click', function (){
            lista.removeChild(item);
        });

        const tag = document.getElementById('tag');  //cada item
        const etiqueta = document.createElement('p');
        etiqueta.textContent = tag.value;
        item.appendChild(etiqueta);

        item.addEventListener('click', function check() {
            p.classList.toggle('checked');
            etiqueta.classList.toggle('checked');

        });

        const apagar = document.createElement('span')//removendo cada iten
        item.appendChild(apagar)
        apagar.textContent = 'excluir item';
        apagar.addEventListener('click', function (){
            lista.removeChild(item);
        });


    };
};
