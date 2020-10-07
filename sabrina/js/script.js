const adicionar = document.getElementById('todoSubmit');
const input = document.getElementById('todoInput');
const option = document.getElementById('tag');
const marcar = document.getElementById('todoMarkAll');
const limpar = document.getElementById('todoRemoveAll');
const div = document.querySelector('.todo__container');
let alerta = document.createElement('h2');
const formulario = document.getElementById('todoForm')


adicionar.addEventListener('click', montarLista);
function montarLista(e) {
    e.preventDefault();

    const lista = document.getElementById('todoList');
    const itemLista = document.createElement('li');
    const textoOption = document.createElement('p');
    const textoInput = document.createElement('p');
    const botaoDeletar = document.createElement('button');

    if (input.value === '' || input.value.match(/^(\s)+$/)) {
        alerta.textContent = 'Insira uma tarefa no campo abaixo.';
        alerta.style.textAlign = 'center'
        alerta.style.color = 'purple'
        alerta.style.borderBottom = 'solid'
        alerta.style.borderColor = 'purple'

        div.appendChild(alerta);
        alerta = div.insertBefore(alerta, formulario)

        input.value = null

    }

    else {
        alerta.textContent = null
        alerta.style.border = 'none'

        lista.appendChild(itemLista)
        itemLista.appendChild(textoOption)
        itemLista.appendChild(textoInput)
        itemLista.appendChild(botaoDeletar)

        itemLista.classList.add('todo__task-list')

        textoOption.textContent = option.value
        textoInput.textContent = input.value
        botaoDeletar.textContent = '🗑️';

        textoOption.style.width = '40%'
        textoOption.style.textAlign = 'center'
        textoOption.style.borderRight = '2px solid purple'
        botaoDeletar.style.cursor = 'pointer'
        botaoDeletar.style.backgroundColor = 'white'
        botaoDeletar.style.border = 'none'

        botaoDeletar.addEventListener('click', function () {
            lista.removeChild(itemLista)
        })

        input.value = null

        marcar.addEventListener('click', clicou)
        itemLista.addEventListener('click', clicou)
        function clicou(){
            textoOption.classList.toggle('checked');
            textoInput.classList.toggle('checked');
        }

        limpar.addEventListener('click', function(){
            lista.innerHTML = ''
        })
        
    }
}