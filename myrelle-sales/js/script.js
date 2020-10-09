// adicionar
const submit = document.getElementById('todoSubmit');
const input = document.getElementById('todoInput');


submit.addEventListener('click', montarLista);

// Adicionar itens na lista e criar uma li dentro da ul usando o método createElement(''). E esse elemento só será criado a partir do evento de clique no botão.


// adicionar
// submit.addEventListener('click', function(e){
    //   e.preventDefault();
    //   console.log(input.value)
    // })
    
    function montarLista(e){
      e.preventDefault(); //previne o comportamente padrão do navegador
  
  
  // Puxar o id da lista do html e armazenar em uma let ou const para utilizar mais vezes
  // document = vai até o html e pega o elemento que precisamos
  

  // ul = lista é a mãe e a li = item é a filha
  const lista = document.getElementById('todoList');
  // const tag = document.getElementById('tag')
  const item = document.createElement('li'); //criando item não existente no html
  const p = document.createElement('p');//criando item não existente no html, para colocar a classe que está no css
  const form = document.getElementById('todoForm');
  const tagName = document.getElementById('tag');
  const todoMarkAll = document.getElementById('todoMarkAll');
  const todoRemoveAll = document.getElementById('todoRemoveAll');
  

  const s = tagName.value;
  const textSelect = document.createElement('p');
  const btnRemove = document.createElement('button');
  
  submit.addEventListener("click", function (event){
    event.preventDefault();
    
    if (input.value == ""){
      alert('O campo está vazio. Preencha para prosseguir')
    } else{
      const valorEtiqueta = document.getElementById('tag');
      const itemEtiqueta = document.createElement('p');
      itemEtiqueta.innerText = valorEtiqueta.value;
      itemEtiqueta.appendChild(valorEtiqueta);
      
      
    }                                         
    
  })
  
  p.textContent = input.value // p ao invés de item. Atribuindo ao meu p um conteúdo(através do textContent) 

  // o meu conteúdo recebe o valor do meu input, que foi armazenado no input do começo
  // Para acessar o valor preciso colocar input. value porque só armazenei o elemento e não o valor dele


  // Uso a const lista e o appendChild (que serve para acrescentar um valor e o item)
  lista.appendChild(item);
  item.appendChild(p)
  item.appendChild(textSelect);
  item.appendChild(btnRemove);
  // console.log(item)

  textSelect.textContent = s;
  btnRemove.textContent = '🗑️';

  btnRemove.addEventListener('click', function(){
    lista.remove();
  })



  // adicionando um escutador de evento
  // A acão que será disparda e a de colocar uma classe chamada checked que não existe no meu elemento ainda, apenas no css.
  item.addEventListener('click',function(){
    p.classList.add('checked');
  })
  
  if(p.innerHTML.trim() == ""){
    alert('O campo está vazio. Adicione uma tarefa.');
    input.focus();
  }else{
    // console.log(lista);
    lista.appendChild(item);
    item.appendChild(p);
    // item.appendChild(btnRemove);
    form.reset();
  }  
  
  item.addEventListener('click', function(){
    p.classList.toggle('checked');
  })

  item.addEventListener('click', function(){
    p.classList.add('checked')
  })



  


  // classlist.add ou classlist.remove  
  const titulo = document.querySelector('h1');
  titulo.classList.add('todo__title');


  form.reset();
  
  
  todoMarkAll.addEventListener('click', allDone);
  
  todoMarkAll.addEventListener('click', function(){
   p.classList.add('checked');
 })

 todoRemoveAll.addEventListener('click', function(){
   p.remove();
 })

 function allDone(){
 if(todoMarkAll.innerText != 'Desmarcar todos'){
   p.classList.add('checked')
  }else{
    todoMarkAll.innerText = 'Desmarcar todos'
  }   
}


}

// p.textContent = input.value;
// item.appendChild(p);
// console.log(item)


// ul é mãe da li por isso vou chama-la aqui
// const ul = document.getElementById('todoList');
// ul.appendChild(li)