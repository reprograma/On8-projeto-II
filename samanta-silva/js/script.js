//Quando o usuário clikar no btn vai adionar um evento pegando o valor do input
const adicionar = document.getElementById("todoSubmit")//com esse comando falarei document, vai lá e pega esse elemento
const input = document.getElementById("todoInput") //com esse comando falarei document, vai la e pega esse elemento
const list = document.getElementById("todoList")
const buttonRemoveAll = document.getElementById("todoRemoveAll")
const buttonMarkAll = document.getElementById("todoMarkAll")



adicionar.addEventListener('click', function (e) { // adicionar itens na lista
    e.preventDefault() //ele previne o comportamento padrão do navegador/btn,etc...

    if (input.value === ""){
        alert("Por favor preencha o campo vazio!")
    }

    else{
        let inputValue = input.value;
        let itemList = document.createElement("li")//Criei um item que não existia no meu html
        let text = document.createElement("p")//aqui criei um item QUE NAO EXISTE NO MEU HTML,para colocar a class que está no css e está especificada para outro elemento.
        list.appendChild(itemList)// item(pai), p(filho)
        itemList.appendChild(text)
        text.textContent = inputValue//aqui atribui ao meu p um conteúdo (através do textContent). O meu conteudo recebe o valor do meu input (que foi armazenado na const input lá na linha)
        const label = document.getElementById("tag")
        let labelValue = label.value //criei uma variavel qu    e guarda o valor da opção selecionada
        let optionLabel = document.createElement("p")
        optionLabel.textContent = labelValue
        itemList.appendChild(optionLabel)
        //console.log(labelValue)
        
       itemList.addEventListener("click", function(){
           text.classList.add("checked")
           optionLabel.classList.add("checked")

       })
        
       //Remover itens
       const buttonRemoveAll = document.getElementById("todoRemoveAll")
       buttonRemoveAll.addEventListener("click", function(){
       itemList.removeChild(text)
       itemList.removeChild(optionLabel)
       itemList.removeChild(text)
       itemList.removeChild(span)
       

       })
       
       const apagar = document.createElement("span")
       itemList.appendChild(apagar)
       apagar.textContent = "X"
       apagar.addEventListener("click", function(){
       itemList.removeChild(apagar)
    

       })

       const buttonMarkAll = document.getElementById("todoMarkAll")
       buttonMarkAll.addEventListener("click", function(){
       text.classList.add("checked")
       optionLabel.classList.add("checked")

       })

    }

})

 

        //const buttonMarkAll = document.getElementById("todoMarkAll")
        //buttonMarkAll.addEventListener("clic", function(){
         //   p.classList.toogle("checked")
        //})


//itemList.addEventListener('click', function () { //aqui adiciono um escutador de evento no item para que quando eu click(evento) uma ação dispare a ação que vai disparar é a de colocar uma class chamada checked (que existe no css mas não existe no meu elemento AINDA)
      // text.classList.add('checked')

    //if(input.value == ""){
    //alert ('input vazio')
    
   // }else{
//const valorEtiqueta = document.getElementById('etiqueta')
//const itemEtiqueta = document.createElement('p') itemEtiqueta.innertext = valorEtiqueta.value;}

//})




/*const list = document.getElementById('todoList');
list.appendChild(item);
console.log(list);
*/

/*---outra forma com a função anonima---
adicionar.addEventListener('click',function(e){
    e.preventDefault();
    console.log(input.value)
*/

/* exemplo para adicionar uma classe, se tem no CSS e não no elemento/html
 const title = document.getElementById('teste')
 title.classList.add('todo__title')//ele vai pegar as propriedade que estão no css
 console.log(title)
 */
