// As variáveis que são carregadas antes da chamada da função não pode ter .
// value, pois no momento que carrega o site os inputs estão sem valor, por 
// isso devemos atribuir o .value dentro da função. Já que o usuário, 
// preencherá o campo e clicará no botão.

// ALGUNS REGEX QUE APRENDI
// replace(/[^a-z]/g, ''); remove caracteres especiais, números e espaço em branco
// replace(/[0-9]/g, '')); remove apenas números
// replace(/[^0-9]/g, '')); admite apenas números

let submit = document.getElementById('todoSubmit');
let catchValue = document.getElementById('todoInput');
let listMother = document.getElementById('todoList');
let tag = document.getElementById('tag');


submit.addEventListener('click', toDoList);

function toDoList(e) {
    e.preventDefault();

    if (catchValue.value === '') { //Impedindo a inserção de valores vazios
        alert('Insira um texto!!')
    } else { //Fecha englobando toda a função para permitir sua execução


        // Cria um tipo de elemento (filho)
        let list_element = document.createElement('li');
        let input_element = document.createElement('input');

        input_element.type = 'checkbox'; //Criou a caixinha para selecionar através do atributo "type" checkbox]

        let p_element = document.createElement('p'); //Criado para receber o valor do "input" como texto e permitir sua estilização quando adicionar a etiqueta 

        let textList = document.createTextNode(catchValue.value.replace(/[0-9]/g, '')); //Atribue o valor do "input" como um texto para ser impresso no "li"
        p_element.appendChild(textList); //"p" recebendo o valor do "input"

        // ADICIONANDO A ETIQUETA -----------------------------------------------

        let tag_element = document.createElement('p'); //Criado para receber o valor do "tag" como texto e permitir sua estilização
        tag_element.textContent = tag.value; //A variação vai criar um texto e receber seu próprio valor

        list_element.append(input_element, p_element, tag_element); //Cria mais de um filho:neste caso um "input" e 2 textos das ("li" e "tag")
        

        //ADICIONANDO ESTILO PELO JS----------------------------------------

        list_element.style.marginRight = '1rem'
        list_element.style.textAlign = 'left'
        input_element.style.margin = '1.2rem 1rem 0 0';
        input_element.style.marginTop = '1.2rem'

        // ------------------------------------------------------------------

        listMother.appendChild(list_element); //Criou o filho "li"(contendo suas informações) na "ul"


        // FUNÇÃO QUE MARCA TODOS-------------------------------------------

        let markAll = document.getElementById('todoMarkAll');
        markAll.addEventListener('click', checkedAll)

        function checkedAll() {
            input_element.checked = true; //Input recebe o atributo "checked"
        }

        // FUNÇÃO QUE APAGA TODOS OS SELECIONADOS--------------------------------

        let removeAll = document.getElementById('todoRemoveAll');
        removeAll.addEventListener('click', cleanList)

        function cleanList() {

            // Se o input estiver de fato com um checked, realize a exclusão!
            if (input_element.checked == true) {
                listMother.appendChild(list_element); //Teve que chamar a mãe novamente, pois ela não reconhecia o filho (dava erro)
                listMother.removeChild(list_element); //Removeu o filho!! \o/
            }
        }

        catchValue.value = ''; //Limpar o local de preenchimento
    }
}






// https://pt.stackoverflow.com/questions/114622/fun%C3%A7%C3%A3o-em-javascript-para-desmarcar-limpar-todas-as-checkboxes-selecionadas-a-pa

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent

//http://devfuria.com.br/javascript/dom-remove-child/

//https://www.w3schools.com/jsref/prop_checkbox_checked.asp