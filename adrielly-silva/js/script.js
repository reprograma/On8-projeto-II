const input = document.getElementById('todoInput');
const botaoAdd = document.getElementById('todoSubmit');


botaoAdd.addEventListener('click',function (e) {
    e.preventDefault();

    if (input.value === ""){
        alert('Preencha o campo!')
    }

    else if(input.value >= 0 || input.value <= 0 ){
        alert('Preencha o campo corretamente!')
        input.value = '';
    }
    
    else {
        const lista = document.getElementById('todoList');
        const item = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = input.value;  
        lista.appendChild(item);
        item.appendChild(p); 
        document.querySelector('#todoInput').value= '';

        const botaoCheck = document.getElementById('todoMarkAll');
        botaoCheck.addEventListener('click', function(){
            p.classList.add('checked');

        });

        const botaoClear = document.getElementById('todoRemoveAll');
        botaoClear.addEventListener('click', function (){
            lista.removeChild(item);
        });

        const tag = document.getElementById('tag');
        const label = document.createElement('p');
        label.textContent = tag.value;
        item.appendChild(label);

        item.addEventListener('click', function check() {
            p.classList.toggle('checked');
            label.classList.toggle('checked');

        });

        const apagar = document.createElement('span')
        item.appendChild(apagar)
        apagar.textContent = '❌';
        apagar.addEventListener('click', function (){
            lista.removeChild(item);
        });


    };
});
