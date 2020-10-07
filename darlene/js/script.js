
// As variáveis que são carregadas antes da chamada da função não pode ter .
// value, pois no momento que carrega o site os inputs estão sem valor, por 
// isso devemos atribuir o .value dentro da função. Já que o usuário, 
// preencherá o campo e clicará no botão.
// Dicas de REGEX 
// replace(/[^a-z]/g, ''); remove caracteres especiais, números e espaço em branco
// replace(/[0-9]/g, '')); remove apenas números
// replace(/[^0-9]/g, '')); admite apenas números


// criei as variáveis
let submit = document.getElementById('todoSubmit');
let catchValue = document.getElementById('todoInput')
let tag = document.querySelector('#tag')


// criando o evento de escuta da 1° função
submit.addEventListener('click', toDoList);

// FUNÇÃO PARA CRIAR A LISTA
function toDoList(e){
    e.preventDefault();

    if(catchValue.value === ''){ // inpede que seja insido um valor em branco na lista
        alert('Por favor, prencher o espaço em branco')
    } else{ // fecha englobando toda a função criada 
        
    

    //chamamos a mãe para criar o filho
    let listMother = document.getElementById('todoList');


    // criando o elemento filho
    let element = document.createElement('li')
    
    

    //ADICIONANDO A ETIQUETA e criando o filho
    let tag_element = document.createElement('p') // foi criado para receber o valor do 'tag' como texto e permitir sua visualização
   
    tag_element.textContent = tag.value; // A variação vai criar um texto e receber o seu próprio valor.
    

    // criando o input no li para receber o checkbox
    let inputElement = document.createElement('input')
    

    // criando um elemento do tipo texto que será vinculado ao elemento criado na hora da execução

    let p_element = document.createElement('p') // foi criado para receber o valor do 'input' como texto para ser impresso na li
   
    let item = document.createTextNode(catchValue.value.replace(/[0-9]/g, '')); 
    

    p_element.appendChild(item) // 'p' foi criada para receber o valor do Input

    // insere o texto como filho e o input no item
    element.append(inputElement, p_element, tag_element);

    //criou o filho li na mãe ul
    listMother.appendChild(element); 

    //----------------------------------------------------------

    // ADICIONANDO ESTILO NOS ELEMENTOS PELO JS
    element.style.marginRight = '1rem'
    inputElement.type = 'checkbox' // criou a caixa de seleção
    inputElement.style.margin = '1.2rem 1rem 0 0'; // style

    //------------------------------------------------------


    // FUNÇÃO QUE MARCA TODOS OS ITENS DA LISTA

    let markAll = document.querySelector('#todoMarkAll')
    markAll.addEventListener('click', mark)
    function mark(){
        inputElement.checked = true; // atributo checked      
        
    }

    

    // BOTÃO DE EXCLUSÃO DOS ITENS 

    let removeAll = document.querySelector('#todoRemoveAll')
    removeAll.addEventListener('click', removeItem)
    
    function removeItem(){
 
      if(inputElement.checked == true){
 
        listMother.appendChild(element); // Tivemos que chamar o elemento mãe porque sem ela a função remove child não funcionava.
        listMother.removeChild(element); // Removeu o filho \o/
    
       }
    }
    

    catchValue.value = ""; // limpa o local de preenchimento 
 }
}

// links de pesquisa
//http://devfuria.com.br/javascript/dom-remove-child/
//https://social.msdn.microsoft.com/Forums/vstudio/pt-BR/58a95f25-4259-4e08-8e5e-501c0041ca95/alterar-text-e-cor-do-checkbox?forum=vscsharppt
//https://www.w3schools.com/jsref/prop_checkbox_checked.asp
//https://developer.mozilla.org/pt-BR/docs/Web/API/Node/parentNode
//http://andreza.eti.br/2017/11/27/estilizando_checkbox_css/