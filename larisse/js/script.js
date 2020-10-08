const adicionar = document.getElementById('todoSubmit')
const input = document.getElementById('todoInput')

// Registrar o evento e adicionar item na lista
adicionar.addEventListener('click', function (e) {
    e.preventDefault()
    // Validação de remover espaços
    if (input.value.trim() == "") {
        alert('Preecha o campo corretamente!')
    } else {
        // Criando as tags
        const list = document.getElementById('todoList')
        const tag = document.getElementById('tag')
        const item = document.createElement('li')
        const paragrafo = document.createElement('p')
        const excluir = document.createElement('span')
        const tagName = document.createElement('p')
        // Etiqueta
        tagName.textContent = tag.value
        paragrafo.textContent = input.value
        excluir.textContent = '🗑️'
        // Devolve a referência
        list.appendChild(item)
        item.appendChild(paragrafo)
        item.appendChild(tagName)
        item.appendChild(excluir)
        input.value = ""

        excluir.addEventListener('click', removeHere)
        function removeHere(e) {
            list.removeChild(item)
        }
        const limparLista = document.getElementById('todoRemoveAll')
        limparLista.addEventListener('click', removeAll)
        function removeAll(e) {
            list.removeChild(item)
        }
        let verify = true;
        paragrafo.addEventListener('click', markHere)
        function markHere() {
            paragrafo.classList.toggle('checked')
        }
        // CHECKED
        const markBtnAll = document.getElementById('todoMarkAll')
        markBtnAll.addEventListener('click', markAll)
        function markAll() {
            paragrafo.classList.toggle('checked')
        }
    }

})