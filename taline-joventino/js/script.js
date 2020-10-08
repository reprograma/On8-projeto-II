
const submit = document.getElementById('todoSubmit');
const input = document.getElementById('todoInput');
const lista = document.getElementById('todoList');
const etiqueta = document.getElementById ('tag');



submit.addEventListener('click', function (e){

    if (input.value === ''){
        alert('Insira alguma tarefa!')
    } else {

    e.preventDefault ();
    let item = document.createElement('li');
    const inputCheck = document.createElement('input');
    inputCheck.type = "checkbox";
    let text = document.createElement('p')
    text.textContent = input.value.replace(/[0-9]/g, '');
    let textEtiqueta = document.createElement('p')
    textEtiqueta.textContent = etiqueta.value
    item.append(inputCheck, text, textEtiqueta);
    lista.append(item);


    inputCheck.style.margin = '1.2rem 1rem 0 0';
    text.style.marginRight = '1rem';


    //adicionando evento no botão marcar todos
    let marcarTodos = document.getElementById('todoMarkAll')
    marcarTodos.addEventListener('click', marcarItens)
    //função para marcar todos 
    function marcarItens(){
        inputCheck.checked = true;
    }

    //adicionando evento no botão delete
    let remove = document.getElementById('todoRemoveAll')
    remove.addEventListener('click', deleteItens)
    //função para apagar apenas tosos os selecionados
    function deleteItens() {
        if (inputCheck.checked == true){
            lista.append(item) //teve que chamar novamente o filho e mãe, pois o removeChild não dava erro
            lista.removeChild(item)
        }
    }
    //item.remove() => remove todos os itens sem excessão

    input.value = '';
    }
});














