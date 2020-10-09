
   

const submit = document.documentElement('todoSubmit');
const input = document.getElementById('todoInput');

submit.addEventListener('click', criarLista)

function criarLista(event) {
    event.preventDefault()


    if (input.value.trim () == '') {
        const div = document.querySelector('.todo__container')
        const formulario = document.getElementById('todoForm')
        const aviso = document.createElement('p')
        aviso.textContent = 'O campo está vazio. Por favor, insira uma tarefa!'
        aviso.style.textAlign = 'center'
        aviso.style.fontSize = '10px'
        aviso.style.color = 'red'
        aviso.style.fontWeight = 'bold'
        aviso.style.textTransform = 'uppercase'
        div.appendChild(aviso)
        aviso = div.insertBefore(aviso,formulario)

    } else { 
        const lista = document.getElementById('todoList')
        const item = document.createElement('li')
        const paragrafo = document.createElement('p')
        item.appendChild(paragrafo)
        paragrafo.textContent = input.value
        lista.appendChild(item)
    // etiqueta
        const opcao = document.getElementById('tag')
        const paragrafo2 = document.createElement('p')
        paragrafo2.textContent = opcao.value
        item.appendChild(paragrafo2)
    //limpar campo de texto depois que insere o item na lista
        input.value = null
    //dar check e retirar o check
        item.addEventListener('click', marcarItem)

        function marcarItem(event) {
        event.preventDefault()
        paragrafo.classList.toggle('checked')

    }

    //deletando um item

        const botaoExcluir = document.createElement('button')
        botaoExcluir.textContent = '❌'
        botaoExcluir.style.color = 'purple'
        botaoExcluir.style.backgroundColor = 'white'
        botaoExcluir.style.borderColor = '#ecc4ff'
        botaoExcluir.style.fontWeight = 'bold'
        botaoExcluir.style.fontSize = '20px'
        botaoExcluir.style.textTransform = 'uppercase'
        botaoExcluir.style.padding = '12px'
        botaoExcluir.style.cursor = 'pointer'

        item.appendChild(botaoExcluir)

        botaoExcluir.addEventListener('click', excluirItem)
        
        function excluirItem(event) {
            event.preventDefault()
            lista.removeChild(item)
        } 

        const marcarTodos = document.getElementById('todoMarkAll')
        marcarTodos.addEventListener('click', marcarTudo)

        function marcarTudo(event) {
            event.preventDefault()
            paragrafo.classList.add('checked')

        }

        const limparTodos = document.getElementById('todoRemoveAll')
        limparTodos.addEventListener('click', limparTudo)

        function limparTudo(event) {
            event.preventDefault()
            lista.removeChild(item)
        }




}




}
