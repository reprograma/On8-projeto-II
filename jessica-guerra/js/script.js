/*
Fase 1️⃣
Adicionar itens na lista OK
Poder dar check neles OK
Validar campo de texto para não entrar itens vazios OK
Limpar campo de texto depois que insere o item na lista OK
Fase 2️⃣
Poder excluir itens da lista individualmente OK
Fase 3️⃣
Marcar todos os itens como feito OK
Limpar lista, excluir todos os itens da lista OK
Fase 4️⃣
Não permitir que um item seja adicionado se só tiver espaços e nenhum texto no input OK


Fase 5️⃣ : BÔNUS
Adicionar etiqueta à tarefa OK
Poder retirar o check dos seus itens OK
*/


const botaoAdd = document.getElementById('todoSubmit');
const input = document.getElementById('todoInput');

botaoAdd.addEventListener('click', montarLista)


function montarLista(event) {
    event.preventDefault();

    //AVISO DE INPUT VAZIO
    if (input.value === ""){
        alert('Por favor, preencha o input!')
    }
    //Adicionar itens na lista
    else {
        const lista = document.getElementById('todoList');
        const item = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = input.value;  
        lista.appendChild(item);
        item.appendChild(p); 
        document.querySelector('#todoInput').value= '';

        //MARCAR TODOS OS ITENS
        const botaoMarcar = document.getElementById('todoMarkAll');
        botaoMarcar.addEventListener('click', function(){
            p.classList.toggle('checked');
            etiqueta.classList.toggle('checked');
        });

        //REMOVER TODOS OS ITENS
        const botaoApagar = document.getElementById('todoRemoveAll');
        botaoApagar.addEventListener('click', function (){
            lista.removeChild(item);
        });

        //SELECIONAR ITENS INDIVIDUALMENTE
        const tag = document.getElementById('tag');
        const etiqueta = document.createElement('p');
        etiqueta.textContent = tag.value;
        item.appendChild(etiqueta);

        item.addEventListener('click', function check() {
            p.classList.toggle('checked');
            etiqueta.classList.toggle('checked');

        });

        //APAGAR ITENS INDIVIDUALMENTE
        const apagar = document.createElement('span')
        item.appendChild(apagar)
        apagar.textContent = '🗑️';
        apagar.addEventListener('click', function (){
            lista.removeChild(item);
        });


    };
};



//console.log(botaoAdd)