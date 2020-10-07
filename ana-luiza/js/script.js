const submit = document.getElementById('todoSubmit')
const input = document.getElementById('todoInput')
const aviso = document.createElement('p')

submit.addEventListener('click', criarLista)

function criarLista(e) {
    e.preventDefault()

    // conferir se o campo de input está vazio

    if (input.value.trim() == '') {
        const div = document.querySelector('.todo__container')
        const formulario = document.getElementById('todoForm')
        aviso.textContent = 'Campo vazio. Necessário inserir uma tarefa.'
        aviso.style.textAlign = 'center'
        aviso.style.fontSize = '15px'
        aviso.style.color = 'red'
        aviso.style.fontWeight = 'bold'
        aviso.style.textTransform = 'uppercase'
        div.appendChild(aviso)
        aviso = div.insertBefore(aviso, formulario)
    } else {

        // adicionar itens na lista
    
        const lista = document.getElementById('todoList')
        const item = document.createElement('li')
        const paragrafo = document.createElement('p')
        item.appendChild(paragrafo)
        paragrafo.textContent = input.value
        lista.appendChild(item)
    
        // adicionar etiqueta à tarefa
    
        const opcao = document.getElementById('tag')
        const paragrafo2 = document.createElement('p')
        paragrafo2.textContent = opcao.value
        item.appendChild(paragrafo2)
    
        // limpar campo de texto depois que insere o item na lista
    
        input.value = null
    
        // poder dar check nos itens e poder retirar o check dos itens
    
        item.addEventListener('click', marcarItem)
    
        function marcarItem(e) {
            e.preventDefault()
            // paragrafo.classList.add('checked')
            paragrafo.classList.toggle('checked')
        }
        
        // deletar um item quando clicar no botão 'excluir'
    
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
    
        function excluirItem(e) {
            e.preventDefault()
            lista.removeChild(item)
        }
    
        // riscar todos os itens quando clicar em 'marcar todos'
    
        const marcarTodos = document.getElementById('todoMarkAll')
        marcarTodos.addEventListener('click', marcarTudo)
    
        function marcarTudo(e) {
            e.preventDefault()
            paragrafo.classList.add('checked')
        }
    
        // limpar lista, excluir todos os itens da lista
    
        const limparTodos = document.getElementById('todoRemoveAll')
        limparTodos.addEventListener('click', limparTudo)
    
        function limparTudo(e) {
            e.preventDefault()
            lista.removeChild(item)
        }
    }






}















