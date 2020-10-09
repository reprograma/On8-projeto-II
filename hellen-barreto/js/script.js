const submit = document.getElementById('todoSubmit');
const input = document.getElementById('todoInput');

submit.addEventListener('click', function (event){
    event.preventDefault();

    if(inputvalue == ""){
        alert('input vazio')        
    } else{
        const valorEtiqueta = document.getElementById('etiqueta');
        const itemEtiqueta = document.createElement('p');
        itemEtiqueta.innerText = valorEtiqueta.value;
        const listaEtiqueta = document.getElementById('todoLista');
        listaEtiqueta.appendChild(item);


    }
})

const buttonRemoveAll = document.getElementById("todoRemoveAll")
const label = document.getElementById("todoMarkAll")
const tag = document.getElementsById('disable')
let labelValeu = label.value()

adicionar.addEventListener('click', montarLista);

//adicionar itens na lista

function montarLista(e){
    //o que ele faz? Previne o comportamento padrão do navegador/ btn etc

    // preciso puxar o ID da lsita do html
    // document - vai até o html e pega o elemento que precisamos
    const lista = document.getElementById('todoLista')

    // aqui estou criando um item que NÃO EXISTE NO MEU HTML
    const item = document.createElement('li');

    // aqui estou criando um item que NÃO EXISTE NO MEU HTML, para colocar a clss que está no CSS e está especificada
    const p = document.createElement('p');

    // aqui estou atribuindo ao meu p um conteúdo a (através do textContent)
    // o meu conteúdo recebe o valor do input (que foi armazenado no input lá no começo - linha 3)
    // mas armazenei só o elemento dentro dessa const. Para acessar o valor, preciso colocar o .value
    p.textContent = input.value;

    // aqui eu pego a const lista (linha 16) e uso o appendChild (significa acrescentar um filho)e add o item(filho)
    // sintaxe é pai.acrescentaFilho(i)
    //            lista.appendChild(item)
    list.appendChild(itemList);
    
    // item(pai), p(filho)
    item.appendChild(p);

    // aqui eu estou adicionando um escutador de evento no item para que quando eu click (evento) uma ação dispare)
    // a ação que vai disparar é a de colocar uma class checked (que existe no css mas não existe no meu elemento AINDA)
    item.addEventListener('click', function() {
        p.classList.add('checked')

    })
