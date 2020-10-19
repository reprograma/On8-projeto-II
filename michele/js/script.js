
let textInput=document.getElementById('todoInput');
let adcionarInput=document.getElementById('todoSubmit');
let listaUl=document.getElementById('todoList');
let marcaTodos=document.getElementById('todoMarkAll')
let selecaoTag=document.getElementById('tag')

let limparLista=document.getElementById('todoRemoveAll')

if(textInput===''|| textInput===' '){
    
    alert("ERROR! Porfavor, digite novamente")
    //document.querySelector('#tag').value=''
}

adcionarInput.addEventListener('click', function(event){
    event.preventDefault();
    let adicionar=textInput.value;
    if(adicionar===''|| adicionar===' '){
        alert("ERROR! Por favor, digite novamente!")
    }

let criarLi=document.createElement('li');
let paragrafo=document.createElement('p')
let paragrafoSelecao=document.createElement('p')
let lixeira=document.createElement('p')


    listaUl.appendChild(criarLi)
    criarLi.appendChild(paragrafo)
    criarLi.appendChild(paragrafoSelecao)
    criarLi.appendChild(lixeira)

    paragrafo.innerHTML=`${adicionar}`
    paragrafoSelecao.innerHTML=`${selecaoTag.value}`
    lixeira.innerHTML='x'

document.querySelector('#todoInput').value=''

criarLi.addEventListener('click', function(event){
    event.preventDefault();
    paragrafo.classList.toggle('checked')
    paragrafoSelecao.classList.toggle('checked')
    
})

marcaTodos.addEventListener('click', function(event){
    event.preventDefault();
    paragrafo.classList.toggle('checked')
    paragrafoSelecao.classList.toggle('checked')

})
lixeira.addEventListener('click', function(event){
    event.preventDefault()
    criarLi.removeChild(paragrafo)
    criarLi.removeChild(paragrafoSelecao)
    criarLi.removeChild(lixeira)
})

limparLista.addEventListener('click', function(event){
    event.preventDefault();
   
    listaUl.removeChild(criarLi)
})

})

