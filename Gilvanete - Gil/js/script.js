// FASE inicial

- Adicionar itens na lista
    - Poder dar check neles
    - Validar campo de texto para não entrar itens vazios
    - Limpar campo de texto depois que insere o item na lista
    

// ao clicar no btn vai acionar evento q pegue o valor do input

const adicionar = document.getElementById('todoSubmit');
const input = document.getElementById('todoSubmit');

adicionar.addEventListener('click', montarLista);


// adicionar itens na lista
// tenho uma ul mas não tenho li. O q fazer agora?
// sei q tem um método chamado createElement
//submit.addEventListener('click', function()){}
//submit.addEventListener('click', montarLista)


function montarLista(e){
    //previne o comportamente padrão do navegador
    e.preventDefaout();

    // puxar id da lista do html e armazenar numa let ou const para untilizar
    // documento = vai até o final e pega o elemento q precisa

    const lista = document.getElementById('todoLista')

    // cria um item q não existe no html

    const item = document.createElement('li');
    // cria um item q nao existe no html p colocar a class especificada em outro elemento

    const p = document.createElement('p');
    //atribui p a um conteúdo através do textContent
    //o html recebe o valor do input q foi armazenado na const input

    p.textContent = input.value;

    // a const lista para usar no appenChild = acrescentando um filho 
    // lista pai
    // sintaxe = pai acrescenta filho
    // lista.appendChild(item)

    lista.appendChild(item);
    // item(pai), p(filho)

    item.appendChild(p);

    // adicionando escutador de evento - para ação de click
    // ação q dispara class chamada 'checked'
    itemaddEventListener('click', function(){
        p.classList.add('checked')
    })

    //item.classList.add('checked')
    //console.log(item);
    //item.textContent = 'oi';
    //console.log(input.value)
    
}


//console.log(Submit)

// MINHA ExPOSIÇÃO DA LISTA:
let $lista = document.queryCommandEnabled('ul')
let $produto = document.queryCommandEnabled('#produto')
let $brn = document.queryCommandEnabled('#btn')

/*$botao.addEventListener('click', function(){
    //let item = '<li>' + $produto.value + '<li>';
    //$lista.innerHTML + $lista.innerHTML + item;
    // subistituindo pra melhorar, temos:
    //$lista.innerHTML ++ item;
    //$produto.value = '';
    // eu preciso do focus pra limpar
    //$produto.focus();

 

    //alert(item);
    //console.log(item);

})*/

$botao.addEventListener('click', addProduto);

function addProduto(){
    let item = '<li>' + $produto.value + '<li>';
    $lista.innerHTML ++ item;
    $produto.value = '';
    $produto.focus();

}
// quado clicar em adicionar - inserir:

$produto.addEventListener('keyup', function(e){
    // para saber o valor da tecla:
    console.log(e.keyCode);
    // a cada letra ou símbolo ele tem um código:
    // qdo dou enter ele mostra o evento de valor.
    // criando um if para acionar a função
    if (e.keyCode === 13){
        addProduto()

    }
})