const adicionar = document.getElementById('todoSubmit'); // CHAMANDO O BOTÃO DE ADICIONAR PELA IDENTIDADE.
const input = document.getElementById('todoInput');

adicionar.addEventListener('click', function(event){
    //o que ele faz? Previne o comportamento padrão do navegador/btn
event.preventDefault()
    //preciso puxar o id da lista do html e armazenar em uma let/const para utilizar várias vezes
const list = document.getElementById('todoList');
    // document = vai até o html e pega o elemento que precisamos
const item = document.createElement('li');
    //aqui estou criando um item QUE NÃO EXISTE NO MEU HTML, para colocar a class que está especificada
    // para outro elemento
const p = document.createElement('p')
    //aqui eu estou atribuindo ao meu p um conteúdo(através do textContent)
    // o meu conteúdo recebe o valor do meu input( que foi armazenado na const input no começo na linha 7)
    //mas armazenei só o elemento dentro dessa const. Para acessar o valor, preciso colocar .value
p.textContent = input.value;
    //aqui eu pego a const lista (linha 26) e uso o appendChild e adiciono o item
    //lista(pai)
    //sintaxe é pai.acrescentaFilho(filho)
list.appendChild(item);
//aqui eu pego a const lista (linha 26) e uso o appendChild e adiciono o item
    //lista(pai)
    //sintaxe é pai.acrescentaFilho(filho)
item.appendChild(p)
// aqui eu estou adicionando um escutador de evento no item para que quando eu clique no evento uma ação dispare
// a ação que vai disparar é a de colocar uma classe chamada checked(que existe no meu css mas que nao existe no meu elemento ainda)
item.addEventListener('click', function() {
    p.classList.add('checked')
})


//mostrar campo vazio com alerta e não criar lista
if(input.value == ''){

    console.log(alert('O campo de inserir tarefa está vazio. Por favor, insira uma tarefa.'))
    list.removeChild(item)
}

//limpar campo de input quando salva o item 

document.getElementById('todoInput').value='';


//Poder excluir itens da lista individualmente
   
const removerItem = document.createElement('p')
item.appendChild(removerItem)
removerItem.textContent = 'remover esta tarefa';
removerItem.style.color = 'red'
removerItem.addEventListener('click', function(){
    list.removeChild(item)
})


//Botão Marcar todos os itens como feitos
const marcarTodos = document.getElementById('todoMarkAll');
marcarTodos.addEventListener('click', function(){
    p.classList.add('checked')
})

//Botão limpar/excluir todos os itens da lista

const removerTodos = document.getElementById('todoRemoveAll');
removerTodos.addEventListener('click', function(){
    list.removeChild(item)
})


})




