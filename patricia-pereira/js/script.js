//Quando o usuário clicar no botão vai acionar um evento pegando o valor do input
const submit = document.getElementById('todoSubmit');
const input = document.getElementById('todoInput');
const marcarTodos = document.getElementById('todoMarkAll');
submit.addEventListener('click', montarLista);

//adicionar.addEventListener

// adicionar itens na lista
// tenho ul mas tenho uma li. ok, o que fazer agora? Sei que eu tenho método chamado createElement(riar um elemento)
//sei que esse elemento só será criado quando eu clico no botão 

function montarLista(e){
    //O que ele faz? Previne o comportamento padrão do navegador/btn etc
    e.preventDefault();

    if(input.value == 0){
        alert("Ops, você não adicinou nada a sua tarefa!")
        return;
    }
    
    //Preciso puxar o id da lista do html e pega o elemento que precisamos
    const lista = document.getElementById('todoList');
    // aqui estou criando um item que não existe no meu html
    const item = document.createElement('li');
    //aqui estou criando um item que não existe no meu html, para colocar a class no css e está especificada
    const p = document.createElement('p');
    //aqui estou atribuindo ao meu p um conteúdo através do textContent
    //meu conteúdo recebe o valor do meu input que foi armazenado no input lá no começo linha 3
    //mas armazenei só o elemento dentro dessa const. Para acessar o valor, preciso colocar value
    p.textContent = input.value;
    
    //aqui eu pego a const lista (linha26) e uso appendChild (significa acrescentar um filho) e add item(filho)
    //lista(pai)
    //sintaxe é pai.acrescentafilho(filho)
    // lista.appendChild(item)
    lista.appendChild(item);
    //item(filho), p(filho)
    item.appendChild(p);

    input.value = ""

//aqui estou adicionando um escutador de evento no item para que quando eu click (evento) uma ação 
//dispare e a ação que vai disparar é a de colocar uma class chamada checked (que existe no css mas não
//existe no seu elemento ainda)
    
    item.addEventListener('click', function(){
        if(p.classList.contains('checked')){
            item.remove();
        } else{
            p.classList.add('checked')
        }   
    })    
}

marcarTodos.addEventListener('click', function(){
    console.log("oi");
});