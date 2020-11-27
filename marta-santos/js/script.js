let submit = document.getElementById('todoSubmit');
let catchValue = document.getElementById('todoInput');
let listMother = document.getElementById('todoList');
let tag = document.getElementById('tag');


submit.addEventListener('click', toDoList);

function toDoList(e) {
    e.preventDefault();

    if (catchValue.value === '') { 
        alert('Insira um texto!!')
    } else { 


        
        let list_element = document.createElement('li');
        let input_element = document.createElement('input');

        input_element.type = 'checkbox'; 

        let p_element = document.createElement('p'); 

        let textList = document.createTextNode(catchValue.value.replace(/[0-9]/g, '')); 
        p_element.appendChild(textList); 


        let tag_element = document.createElement('p'); 
        tag_element.textContent = tag.value; 

        list_element.append(input_element, p_element, tag_element); 
        

       
        input_element.style.margin = '.2rem 1rem 0 0';

       

        listMother.appendChild(list_element); 



        let markAll = document.getElementById('todoMarkAll');
        markAll.addEventListener('click', checkedAll)

        function checkedAll() {
            input_element.checked = true;
        }

       
        let removeAll = document.getElementById('todoRemoveAll');
        removeAll.addEventListener('click', cleanList)

        function cleanList() {

            
            if (input_element.checked == true) {
                listMother.appendChild(list_element); 
                listMother.removeChild(list_element);
            }
        }

        catchValue.value = ''; 
    }
}
