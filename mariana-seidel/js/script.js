// FASE 1 //
// pegar valor do input OK
// dar o click no botão >> acionar um evento que pegue o valor do input OK
// retornar o valor do input num campo abaixo OK
// dar check no valor OK
// validar o campo de texto pra não entrar itens vazios >> com um alert OK
// limpar o campo de texto quando inserir um item na lista OK

// FASES 2|3|4 //
// excluir um item individualmente OK
// marcar todos os itens como feitos OK
// limpar a lista e excluir todos os itens da lista OK
// não permitir que um item seja adicionado se só tiver espaços OK

// BÔNUS //
// adicionar etiqueta à tarefa OK
// poder retirar o check dos itens >> quando clicar, ele tirar a marcação OK

const submit = document.querySelector('#todoSubmit')
const input = document.querySelector('#todoInput')
const list = document.querySelector('#todoList')
const buttonRemoveAll = document.querySelector('#todoRemoveAll')
const buttonMarkAll = document.querySelector('#todoMarkAll')
const listOption = document.querySelector('#tag')

submit.addEventListener('click', addList)

function addList(event){
    event.preventDefault()
    let inputValue = input.value
    let inputOption = listOption.value
    let itemList = document.createElement('li')
    let text = document.createElement('p')
    let text2 = document.createElement('p')
    let buttonDelete = document.createElement('button')

    list.appendChild(itemList)
    itemList.appendChild(text)
    itemList.appendChild(text2)
    itemList.appendChild(buttonDelete)
   
    text.textContent = inputValue
    text2.textContent = inputOption
    buttonDelete.textContent = 'X'
    buttonDelete.style.border = 'none'
    buttonDelete.style.backgroundColor = 'white'
    
    itemList.addEventListener('click', function(){
        text.classList.toggle('checked')
        text2.classList.toggle('checked')
    })
    
    buttonDelete.addEventListener('click', function(){
        list.removeChild(itemList)
    })

    if(inputValue ==''){
        alert('O campo está vazio! Por favor, insira sua tarefa.')
        list.removeChild(itemList)
    } else if (inputValue.trim().length <1){
            alert('Preencha o campo corretamente!')
            list.removeChild(itemList)}

    buttonMarkAll.addEventListener('click', function(){
        text.classList.add('checked')
        text2.classList.add('checked')
    })

    buttonRemoveAll.addEventListener('click', function(){
        list.innerHTML = ''
    })

    input.value = ''
}



