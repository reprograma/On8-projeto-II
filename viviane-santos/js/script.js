const botaoAdicionar = document.getElementById('todoSubmit');
const input = document.getElementById('todoInput');

botaoAdicionar.addEventListener('click', mostrarLista);



function mostrarLista(e){
    e.preventDefault()
    
    const list = document.getElementById('todoList');
    const item = document.createElement('li');
    const p = document.createElement('p');
   

    p.textContent = input.value
    list.appendChild(item)
    item.appendChild(p)
   

    
     item. addEventListener('click', function(event){
     p.classList.add("checked") 

     if(input.value  == ""){
       alert('Por favor, preencha o campo')
   }else{  
      const list = document.getElementById('todoList');
      const valorEtiqueta = document.getElementById('tag');
      const div = document.querySelector (".todo_container")
      const acaoFormulario = document.getElementById('todoForm')
      const p = document.createElement('p');
      const item = document.createElement('li');
      const itemEtiqueta = document.createElement("p");
      const botaoLimpar = document.createElement('p')
      item.appendChild(itemEtiqueta)

      
      p.innerText = valorEtiqueta.value;
      list.appendChild (item)
   
     input.value = null
     const excluirItem = document.createElement('button')
      excluirItem.innerText = "X"
      item.appendChild(excluirItem)
      
      excluirItem.addEventListener("click", excluir)
      function excluir(e){
         e.preventDefault()
         list.removeChild(item)

         function marcarItens(e) {
            e.preventDefault()
            p.classList.add('checked')

            const limpar = document.getElementById('todoRemoveAll')
            limpar.addEventListener("click", botaoLimpar)

            function botaoLimpar(e) {
               e.preventDefault()
               list.removeChild(item)
            }
         }
      }
     }
   


     })

   }













