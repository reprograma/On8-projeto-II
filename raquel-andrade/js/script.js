

// Preciso dá um clik no btn "add" e pegar o valor que está no meu input 


const adicionar = document.getElementById('todoSubmit');

const input = document.getElementById('todoInput');



adicionar.addEventListener('click', montarLista);


// Adicionar itens na lista
// tenho uma ul mas tenho uma li. Ok, o que fazer agora? Sei que eu tenho um método chamdo creacteElement( criar um elemento)
// sei que esse elemento só será criado quando eu dou um clik no btn 


function montarLista(e){
    // O que ele faz? Previne o comportamento padrão do navegador/btn etc 
    e.preventDefault(); 

    // Preciso puxar o id da lista do html e armazenar em uma let/const para utilizar mais vezes
    // documento = vai até o html e pega o elemneto que precisamos

    const lista = document.getElementById('todoLista');

    //  aqui estou criando um item QUE NÃO EXISTE NO MEU HTML
    const item = document.createElement('li');

    // aqui estou criando um item QUE NÃO EXISTE NO MEU HTML, para colocar a class que está no css e está especificada 
    // para outro elemento
    const p = document.createElement('p');

    // aqui eu estou atribuindo ao meu p um conteúdo (através do textContent)
    //  o meu conteúdo recebe o valor do meu input (que foi armazenado na const input láaa no começo - linha 7)
    // mas armazenei só o elemento dentro dessa const. Para acessar o valor, preciso colocar .value
    p.textContent = input.value;

    // aqui eu pego a const lista (linha 26) e uso o appendChild( significa acrescentar um filho) e add o item(filho)
    // lista(pai)
    // sintaxe é pai.acrescentaFilho(filho)
    //           lista.appendChild(item)
    lista.appendChild(item);

    // item(pai), p(filho)
    item.appendChild(p);
    
    // aqui eu estou adicionando um escutador de evento no item para que quando eu click(evento) uma ação dispare)
    // a ação que vai disparar é a de colocar uma class chamada checked (que existe no css mas não existe no meu elemento
    // AINDA)
    item.addEventListener('click', function(){
        p.classList.add('checked')
    })

}

